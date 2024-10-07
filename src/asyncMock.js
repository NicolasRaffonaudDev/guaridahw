const products = [
    {
        id: 1,
        name: "Intel Core I3",
        price: 189000,
        category: "processor",
        img: "",
        stock: 156,
        description: "Procesador Intel Core I3"
    },{
        id: 2,
        name: "Intel Core I3",
        price: 189000,
        category: "processor",
        img: "",
        stock: 156,
        description: "Procesador Intel Core I3"
    },{
        id: 3,
        name: "Intel Core I3",
        price: 189000,
        category: "processor",
        img: "",
        stock: 156,
        description: "Procesador Intel Core I3"
    },{
        id: 4,
        name: "Intel Core I3",
        price: 189000,
        category: "processor",
        img: "",
        stock: 156,
        description: "Procesador Intel Core I3"
    },{
        id: 5,
        name: "Intel Core I3",
        price: 189000,
        category: "processor",
        img: "",
        stock: 156,
        description: "Procesador Intel Core I3"
    },{
        id: 6,
        name: "Intel Core I3",
        price: 189000,
        category: "processor",
        img: "",
        stock: 156,
        description: "Procesador Intel Core I3"
    },{
        id: 7,
        name: "Intel Core I3",
        price: 189000,
        category: "processor",
        img: "",
        stock: 156,
        description: "Procesador Intel Core I3"
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        }, 2500)
    })
}