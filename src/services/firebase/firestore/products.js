import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { createProductAdaptedFromFirebase } from '../../../adapters/ProductAdapter';
import { db } from '../';


export const getProducts  = (categoryId) => {
    const productsCollection = categoryId
    ? query(collection(db, "products"), where("category", "==", categoryId))
    : collection(db, "products")

    return getDocs(productsCollection)
    .then((querySnapshot)=> {
        const productAdapted = querySnapshot.docs.map((doc)=>{
            return createProductAdaptedFromFirebase(doc)
        })
        return productAdapted;
    })
    .catch((err)=>{
        return err;
    })
};

export const getProductById = (itemId) => {
    const productDoc = doc(db, "products", itemId)

    return getDoc(productDoc)
    .then((queryDocumentSnapshot)=>{
        const productAdapted = createProductAdaptedFromFirebase(queryDocumentSnapshot);

        return productAdapted
    })
    .catch((err)=>{
        return err
    })
}

