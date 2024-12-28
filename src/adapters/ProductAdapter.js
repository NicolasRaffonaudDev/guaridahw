export const createProductAdaptedFromFirebase = ( doc ) => {
    const data = doc.data()

    return {
        id: doc.id,
        category: data.category,
        description: data.description,
        img: data.img,
        name: data.name,
        price: data.price,
        stock: data.stock,
    }
}