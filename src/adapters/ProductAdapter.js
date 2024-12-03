export const createProductAdaptedFromFirebase = ( doc ) => {
    const data = doc.data()

    return {
        id: doc.id,
        category: doc.category,
        description: doc.description,
        img: doc.img,
        name: doc.name,
        price: doc.price,
        stock: doc.stock,
    }
}