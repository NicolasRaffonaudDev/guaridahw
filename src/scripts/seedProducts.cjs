const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const products = require('../data/products.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();


async function seedProducts() {
  const batch = db.batch();
  const productsRef = db.collection('products');

  // ======== CAMBIO CLAVE 1: Obtener TODOS los productos existentes ========
  const existingProductsSnapshot = await productsRef.get();
  const existingProductsMap = new Map();

  existingProductsSnapshot.forEach(doc => {
    existingProductsMap.set(doc.data().name, doc);
  });

  // ======== CAMBIO CLAVE 2: Procesar productos locales ========

  for (const product of products) {
    const existingDoc = existingProductsMap.get(product.name);

    if (!existingDoc) {
      // ➕ NUEVO PRODUCTO (Mismo código que antes)
      const docRef = productsRef.doc();
      batch.set(docRef, {
        ...product,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        lastUpdated: admin.firestore.FieldValue.serverTimestamp()
      });
      console.log(`🔼 Producto añadido: ${product.name}`);
    } else {
      // 🔄 ACTUALIZACIÓN (Nueva funcionalidad)
      const existingData = existingDoc.data();
      if (!areProductsEqual(existingData, product)) {
        batch.update(existingDoc.ref, {
          ...product,
          lastUpdated: admin.firestore.FieldValue.serverTimestamp()
        });
        console.log(`🔄 Producto actualizado: ${product.name}`);
      } else {
        console.log(`⏩ Producto existente (sin cambios): ${product.name}`);
      }
    }
  }

  // ======== CAMBIO CLAVE 3: Eliminación opcional (Nueva funcionalidad) ========
  if (process.argv.includes('--delete-missing')) {
    const localProductNames = new Set(products.map(p => p.name));
    
    existingProductsSnapshot.forEach(doc => {
      if (!localProductNames.has(doc.data().name)) {
        batch.delete(doc.ref);
        console.log(`🗑️ Producto eliminado: ${doc.data().name}`);
      }
    });
  }

  await batch.commit();
  console.log("✅ Proceso completado: Añadidos, actualizados y/o eliminados");
}

// ======== FUNCIÓN AUXILIAR NUEVA ========
function areProductsEqual(existingProduct, localProduct) {
  // Ignoramos campos de auditoría en la comparación
  const { createdAt, lastUpdated, ...cleanExisting } = existingProduct;
  const { createdAt: _, lastUpdated: __, ...cleanLocal } = localProduct;
  
  return JSON.stringify(cleanExisting) === JSON.stringify(cleanLocal);
}

seedProducts().catch(console.error);