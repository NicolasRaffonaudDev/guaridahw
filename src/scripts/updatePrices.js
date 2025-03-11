// scripts/updateProducts.js
const admin = require('firebase-admin');
// ... configuración inicial igual que seedProducts.js ...

async function updateProducts() {
  const productsRef = db.collection('products');
  
  // Ejemplo: Actualizar precios de productos con categoría "processor"
  const snapshot = await productsRef
    .where("category", "==", "processor")
    .get();

  const batch = db.batch();
  snapshot.forEach(doc => {
    batch.update(doc.ref, {
      price: doc.data().price * 1.1, // +10%
      lastUpdated: admin.firestore.FieldValue.serverTimestamp()
    });
  });

  await batch.commit();
  console.log(`✅ ${snapshot.size} productos actualizados`);
}

updateProducts().catch(console.error);