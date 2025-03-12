// scripts/seedProducts.js
import admin from "firebase-admin";
import serviceAccount from"./serviceAccountKey.json";
import products from "./products.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Tu array de productos
/* const products = require("./products.json"); */

async function seedProducts() {
    const batch = db.batch();
    const productsRef = db.collection('products');
  
    for (const product of products) {
      // Verificar si el producto ya existe por nombre (server-side)
      const snapshot = await productsRef
        .where("name", "==", product.name)
        .limit(1)
        .get();
  
      if (snapshot.empty) {
        // Crear documento con ID autogenerado
        const docRef = productsRef.doc(); // ← ID autogenerado aquí
        batch.set(docRef, {
          ...product,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
          lastUpdated: admin.firestore.FieldValue.serverTimestamp()
        });
        console.log(`🔼 Producto añadido: ${product.name}`);
      } else {
        console.log(`⏩ Producto existente: ${product.name}`);
      }
    }
  
    await batch.commit();
    console.log("✅ Todos los productos procesados");
  }
  
  seedProducts().catch(console.error);