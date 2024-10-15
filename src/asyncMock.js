const products = [
    { id: 1, name: "Intel Core i5-12400", price: 45000, category: "processor", img: "https://pcboost.co.uk/wp-content/uploads/2022/08/1.jpg", stock: 120, description: "Procesador Intel Core i5-12400 de 6 núcleos." },
    { id: 2, name: "NVIDIA GeForce RTX 3060", price: 120000, category: "graphics_card", img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6439/6439402cv1d.jpg", stock: 50, description: "Placa de Video NVIDIA GeForce RTX 3060 con 12GB de VRAM." },
    { id: 3, name: "ASUS ROG Strix B550-F", price: 30000, category: "motherboard", img: "https://hard-digital.com.ar/public/files/Motherboard%20Asus%20Rog%20Strix%20B550-F%20Gaming%20Wifi%20Am4/2.jpg", stock: 80, description: "Motherboard ASUS ROG Strix B550-F con soporte para Ryzen." },
    { id: 4, name: "Corsair Vengeance 16GB (2x8GB) 3200MHz", price: 18000, category: "memory", img: "https://www.xt-pc.com.ar/img/productos/4/MEM1732.jpg", stock: 200, description: "Memoria RAM Corsair Vengeance de 16GB en kit de 2." },
    { id: 5, name: "Kingston A2000 500GB NVMe", price: 12000, category: "storage", img: "https://spacegamer.com.ar/img/Public/1058-producto-proyecto-111-b2dd9bf4395b523fc916052208177996-1024-1024-2842.jpg", stock: 150, description: "SSD NVMe Kingston A2000 de 500GB para cargas rápidas." },
    { id: 6, name: "Corsair CV550 550W", price: 10000, category: "power_supply", img: "https://hard-digital.com.ar/public/files/Fuente%20Corsair%20550w%20Cv550%2080%20Plus%20Bronze%20Negro/5.jpg", stock: 100, description: "Fuente de poder Corsair CV550 de 550W." },
    { id: 7, name: "Cooler Master MasterBox Q300L", price: 12000, category: "case", img: "https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-8841701.jpg", stock: 75, description: "Gabinete Cooler Master MasterBox Q300L, compacto y eficiente." },
    { id: 8, name: "Seagate Barracuda 1TB", price: 8000, category: "storage", img: "https://www.venex.com.ar/products_images/1586464173_disc1.jpg", stock: 200, description: "Disco Duro Seagate Barracuda de 1TB." },
    { id: 9, name: "Corsair H100i", price: 25000, category: "cooling", img: "https://katech.com.ar/wp-content/uploads/x1-1166.jpg", stock: 30, description: "Refrigeración líquida Corsair H100i para alto rendimiento." },
    { id: 10, name: "LG 24' Full HD", price: 30000, category: "monitor", img: "https://http2.mlstatic.com/D_NQ_NP_644655-MLA50496998865_062022-O.webp", stock: 60, description: "Monitor LG de 24 pulgadas con resolución Full HD." },
    { id: 11, name: "AMD Ryzen 5 5600X", price: 48000, category: "processor", img: "https://i0.wp.com/www.fullysilentpcs.com/wp-content/uploads/2017/07/AMD-Ryzen-5-5600X.png?fit=888%2C888&ssl=1", stock: 90, description: "Procesador AMD Ryzen 5 5600X, 6 núcleos." },
    { id: 12, name: "Gigabyte GeForce GTX 1660 Super", price: 90000, category: "graphics_card", img: "https://static.gigabyte.com/StaticFile/Image/Global/5199322bf829fbf25710f1ebddd23742/Product/23929/png/500", stock: 45, description: "Placa de video GTX 1660 Super, ideal para juegos." },
    { id: 13, name: "MSI B450M PRO-VDH MAX", price: 15000, category: "motherboard", img: "", stock: 70, description: "Motherboard MSI B450M para procesadores AMD." },
    { id: 14, name: "G.Skill Ripjaws V 16GB (2x8GB) 3200MHz", price: 19000, category: "memory", img: "", stock: 180, description: "Memoria RAM G.Skill de alto rendimiento." },
    { id: 15, name: "Samsung 970 EVO Plus 1TB NVMe", price: 20000, category: "storage", img: "", stock: 120, description: "SSD NVMe Samsung 970 EVO Plus de 1TB." },
    { id: 16, name: "Thermaltake Smart RGB 600W", price: 11000, category: "power_supply", img: "", stock: 80, description: "Fuente de poder Thermaltake RGB de 600W." },
    { id: 17, name: "NZXT H510", price: 15000, category: "case", img: "", stock: 65, description: "Gabinete NZXT H510, elegante y funcional." },
    { id: 18, name: "Toshiba DT01ACA200 2TB", price: 12000, category: "storage", img: "", stock: 140, description: "Disco Duro Toshiba de 2TB." },
    { id: 19, name: "Cooler Master Hyper 212", price: 8000, category: "cooling", img: "", stock: 60, description: "Cooler CPU Cooler Master Hyper 212." },
    { id: 20, name: "Dell UltraSharp U2415", price: 35000, category: "monitor", img: "", stock: 30, description: "Monitor Dell UltraSharp 24' con gran precisión de color." },
    { id: 21, name: "Intel Core i7-11700K", price: 70000, category: "processor", img: "", stock: 50, description: "Procesador Intel Core i7-11700K, 8 núcleos." },
    { id: 22, name: "ASUS TUF Gaming GeForce RTX 3060 Ti", price: 130000, category: "graphics_card", img: "", stock: 25, description: "Placa de video RTX 3060 Ti, ideal para gaming." },
    { id: 23, name: "ASRock B550 Phantom Gaming 4", price: 20000, category: "motherboard", img: "", stock: 40, description: "Motherboard ASRock B550 para procesadores AMD." },
    { id: 24, name: "HyperX Fury 16GB (2x8GB) 3200MHz", price: 19000, category: "memory", img: "", stock: 100, description: "Memoria RAM HyperX Fury de alto rendimiento." },
    { id: 25, name: "Crucial P3 500GB NVMe", price: 13000, category: "storage", img: "", stock: 150, description: "SSD NVMe Crucial P3 de 500GB." },
    { id: 26, name: "EVGA 600W 80 Plus", price: 9000, category: "power_supply", img: "", stock: 70, description: "Fuente de poder EVGA de 600W, eficiente y confiable." },
    { id: 27, name: "Fractal Design Meshify C", price: 18000, category: "case", img: "", stock: 50, description: "Gabinete Fractal Design Meshify C, con excelente flujo de aire." },
    { id: 28, name: "Western Digital Blue 1TB", price: 8000, category: "storage", img: "", stock: 180, description: "Disco Duro WD Blue de 1TB." },
    { id: 29, name: "Deepcool Gammaxx 400", price: 7000, category: "cooling", img: "", stock: 90, description: "Cooler CPU Deepcool Gammaxx 400." },
    { id: 30, name: "Acer R240HY", price: 25000, category: "monitor", img: "", stock: 40, description: "Monitor Acer R240HY de 24 pulgadas." },
    { id: 31, name: "AMD Ryzen 7 5800X", price: 68000, category: "processor", img: "", stock: 30, description: "Procesador AMD Ryzen 7 5800X, 8 núcleos." },
    { id: 32, name: "MSI GeForce GTX 1650", price: 70000, category: "graphics_card", img: "", stock: 35, description: "Placa de video GTX 1650, ideal para juegos en 1080p." },
    { id: 33, name: "Gigabyte B450 AORUS M", price: 18000, category: "motherboard", img: "", stock: 65, description: "Motherboard Gigabyte B450 AORUS para Ryzen." },
    { id: 34, name: "Corsair Vengeance LPX 16GB (2x8GB) 3200MHz", price: 19000, category: "memory", img: "", stock: 80, description: "Memoria RAM Corsair Vengeance LPX de 16GB." },
    { id: 35, name: "ADATA XPG SX8200 Pro 1TB NVMe", price: 22000, category: "storage", img: "", stock: 60, description: "SSD NVMe ADATA XPG SX8200 Pro de 1TB." },
    { id: 36, name: "Corsair RM550x 550W", price: 13000, category: "power_supply", img: "", stock: 60, description: "Fuente de poder Corsair RM550x de 550W, modular." },
    { id: 37, name: "Thermaltake View 71", price: 20000, category: "case", img: "", stock: 45, description: "Gabinete Thermaltake View 71, con vidrio templado." },
    { id: 38, name: "Seagate Barracuda 4TB", price: 18000, category: "storage", img: "", stock: 30, description: "Disco Duro Seagate Barracuda de 4TB." },
    { id: 39, name: "Cooler Master MasterLiquid ML120L", price: 12000, category: "cooling", img: "", stock: 55, description: "Refrigeración líquida Cooler Master ML120L." },
    { id: 40, name: "BenQ GW2480", price: 26000, category: "monitor", img: "", stock: 35, description: "Monitor BenQ GW2480 de 24 pulgadas, sin parpadeo." },
    { id: 41, name: "Intel Core i9-11900K", price: 95000, category: "processor", img: "", stock: 20, description: "Procesador Intel Core i9-11900K, 8 núcleos." },
    { id: 42, name: "MSI Radeon RX 6700 XT", price: 150000, category: "graphics_card", img: "", stock: 15, description: "Placa de video MSI Radeon RX 6700 XT." },
    { id: 43, name: "ASUS ROG Strix B550-F Gaming", price: 30000, category: "motherboard", img: "", stock: 50, description: "Motherboard ASUS ROG Strix B550-F Gaming." },
    { id: 44, name: "G.Skill Trident Z RGB 16GB (2x8GB) 3600MHz", price: 22000, category: "memory", img: "", stock: 40, description: "Memoria RAM G.Skill Trident Z RGB." },
    { id: 45, name: "Samsung 980 1TB NVMe", price: 23000, category: "storage", img: "", stock: 60, description: "SSD NVMe Samsung 980 de 1TB." },
    { id: 46, name: "Thermaltake Toughpower GF1 750W", price: 17000, category: "power_supply", img: "", stock: 25, description: "Fuente de poder Thermaltake Toughpower GF1 de 750W." },
    { id: 47, name: "NZXT H510 Elite", price: 20000, category: "case", img: "", stock: 40, description: "Gabinete NZXT H510 Elite, con panel de vidrio." },
    { id: 48, name: "Western Digital Black 1TB", price: 14000, category: "storage", img: "", stock: 50, description: "Disco Duro WD Black de 1TB, rendimiento superior." },
    { id: 49, name: "Arctic Freezer 34 eSports DUO", price: 12000, category: "cooling", img: "", stock: 30, description: "Cooler CPU Arctic Freezer 34 eSports." },
    { id: 50, name: "ASUS ProArt PA248QV", price: 32000, category: "monitor", img: "", stock: 20, description: "Monitor ASUS ProArt PA248QV, ideal para diseño." },
    { id: 51, name: "AMD Ryzen 9 5900X", price: 95000, category: "processor", img: "", stock: 15, description: "Procesador AMD Ryzen 9 5900X, 12 núcleos." },
    { id: 52, name: "ZOTAC GeForce GTX 1650", price: 65000, category: "graphics_card", img: "", stock: 30, description: "Placa de video ZOTAC GTX 1650." },
    { id: 53, name: "MSI B550M PRO-VDH", price: 16000, category: "motherboard", img: "", stock: 60, description: "Motherboard MSI B550M PRO-VDH." },
    { id: 54, name: "Crucial Ballistix 16GB (2x8GB) 3200MHz", price: 18000, category: "memory", img: "", stock: 75, description: "Memoria RAM Crucial Ballistix." },
    { id: 55, name: "ADATA SU800 512GB SSD", price: 9000, category: "storage", img: "", stock: 100, description: "SSD ADATA SU800 de 512GB." },
    { id: 56, name: "Cooler Master MWE Gold 650W", price: 15000, category: "power_supply", img: "", stock: 50, description: "Fuente de poder Cooler Master MWE Gold de 650W." },
    { id: 57, name: "Phanteks Eclipse P300A", price: 13000, category: "case", img: "", stock: 40, description: "Gabinete Phanteks Eclipse P300A." },
    { id: 58, name: "Seagate FireCuda 2TB SSHD", price: 16000, category: "storage", img: "", stock: 20, description: "Disco Duro Seagate FireCuda de 2TB." },
    { id: 59, name: "Noctua NH-D15", price: 25000, category: "cooling", img: "", stock: 15, description: "Cooler CPU Noctua NH-D15." },
    { id: 60, name: "LG UltraGear 27GL850-B", price: 45000, category: "monitor", img: "", stock: 10, description: "Monitor LG UltraGear de 27 pulgadas." },
    { id: 61, name: "Intel Core i3-10100", price: 19000, category: "processor", img: "", stock: 90, description: "Procesador Intel Core i3-10100." },
    { id: 62, name: "MSI Radeon RX 560", price: 60000, category: "graphics_card", img: "", stock: 40, description: "Placa de video MSI Radeon RX 560." },
    { id: 63, name: "Gigabyte Z490 AORUS ELITE", price: 40000, category: "motherboard", img: "", stock: 25, description: "Motherboard Gigabyte Z490 AORUS ELITE." },
    { id: 64, name: "Corsair Vengeance LPX 32GB (2x16GB) 3200MHz", price: 36000, category: "memory", img: "", stock: 20, description: "Memoria RAM Corsair Vengeance LPX de 32GB." },
    { id: 65, name: "Samsung 860 EVO 1TB SSD", price: 20000, category: "storage", img: "", stock: 30, description: "SSD Samsung 860 EVO de 1TB." },
    { id: 66, name: "EVGA SuperNOVA 750W", price: 18000, category: "power_supply", img: "", stock: 15, description: "Fuente de poder EVGA SuperNOVA 750W." },
    { id: 67, name: "Cooler Master MasterBox NR200", price: 15000, category: "case", img: "", stock: 25, description: "Gabinete Cooler Master NR200." },
    { id: 68, name: "Toshiba 4TB External HDD", price: 14000, category: "storage", img: "", stock: 20, description: "Disco Duro Externo Toshiba de 4TB." },
    { id: 69, name: "Deepcool Gammaxx GT", price: 10000, category: "cooling", img: "", stock: 30, description: "Cooler CPU Deepcool Gammaxx GT." },
    { id: 70, name: "Dell P2419H", price: 27000, category: "monitor", img: "", stock: 15, description: "Monitor Dell P2419H de 24 pulgadas." },
    { id: 71, name: "Intel Core i5-10600K", price: 62000, category: "processor", img: "", stock: 25, description: "Procesador Intel Core i5-10600K." },
    { id: 72, name: "ZOTAC GeForce RTX 2070", price: 120000, category: "graphics_card", img: "", stock: 10, description: "Placa de video ZOTAC GeForce RTX 2070." },
    { id: 73, name: "ASUS ROG Strix Z490-E Gaming", price: 40000, category: "motherboard", img: "", stock: 15, description: "Motherboard ASUS ROG Strix Z490-E Gaming." },
    { id: 74, name: "G.Skill Ripjaws V 32GB (2x16GB) 3600MHz", price: 35000, category: "memory", img: "", stock: 10, description: "Memoria RAM G.Skill Ripjaws V de 32GB." },
    { id: 75, name: "Kingston A2000 1TB NVMe", price: 23000, category: "storage", img: "", stock: 20, description: "SSD NVMe Kingston A2000 de 1TB." },
    { id: 76, name: "Corsair CV650 650W", price: 12000, category: "power_supply", img: "", stock: 25, description: "Fuente de poder Corsair CV650 de 650W." },
    { id: 77, name: "Phanteks Eclipse P400A", price: 16000, category: "case", img: "", stock: 15, description: "Gabinete Phanteks Eclipse P400A." },
    { id: 78, name: "WD Blue 2TB", price: 16000, category: "storage", img: "", stock: 15, description: "Disco Duro WD Blue de 2TB." },
    { id: 79, name: "Cooler Master Hyper 212 Black Edition", price: 9000, category: "cooling", img: "", stock: 30, description: "Cooler CPU Cooler Master Hyper 212 Black Edition." },
    { id: 80, name: "ASUS ProArt PA27AC", price: 65000, category: "monitor", img: "", stock: 5, description: "Monitor ASUS ProArt PA27AC, 27' con HDR." },
    { id: 81, name: "AMD Ryzen 5 3600", price: 42000, category: "processor", img: "", stock: 20, description: "Procesador AMD Ryzen 5 3600, 6 núcleos." },
    { id: 82, name: "Gigabyte AORUS GeForce RTX 3080", price: 250000, category: "graphics_card", img: "", stock: 5, description: "Placa de video AORUS GeForce RTX 3080." },
    { id: 83, name: "MSI MPG B550 Gaming Edge WiFi", price: 25000, category: "motherboard", img: "", stock: 15, description: "Motherboard MSI MPG B550 Gaming Edge WiFi." },
    { id: 84, name: "Corsair Vengeance LPX 64GB (2x32GB) 3200MHz", price: 75000, category: "memory", img: "", stock: 5, description: "Memoria RAM Corsair Vengeance LPX de 64GB." },
    { id: 85, name: "Samsung 970 EVO Plus 2TB NVMe", price: 38000, category: "storage", img: "", stock: 5, description: "SSD NVMe Samsung 970 EVO Plus de 2TB." },
    { id: 86, name: "Cooler Master MWE Gold 850W", price: 20000, category: "power_supply", img: "", stock: 10, description: "Fuente de poder Cooler Master MWE Gold de 850W." },
    { id: 87, name: "Thermaltake Core P3", price: 25000, category: "case", img: "", stock: 5, description: "Gabinete Thermaltake Core P3." },
    { id: 88, name: "Seagate Barracuda 8TB", price: 25000, category: "storage", img: "", stock: 5, description: "Disco Duro Seagate Barracuda de 8TB." },
    { id: 89, name: "Noctua NH-U12S Redux", price: 11000, category: "cooling", img: "", stock: 10, description: "Cooler CPU Noctua NH-U12S Redux." },
    { id: 90, name: "Dell UltraSharp U2720Q", price: 70000, category: "monitor", img: "", stock: 5, description: "Monitor Dell UltraSharp 27' 4K." },
    { id: 91, name: "Intel Core i7-10700K", price: 70000, category: "processor", img: "", stock: 10, description: "Procesador Intel Core i7-10700K." },
    { id: 92, name: "EVGA GeForce RTX 3060", price: 120000, category: "graphics_card", img: "", stock: 5, description: "Placa de video EVGA GeForce RTX 3060." },
    { id: 93, name: "ASRock Z490 Taichi", price: 50000, category: "motherboard", img: "", stock: 5, description: "Motherboard ASRock Z490 Taichi." },
    { id: 94, name: "Crucial Ballistix 32GB (2x16GB) 3600MHz", price: 35000, category: "memory", img: "", stock: 5, description: "Memoria RAM Crucial Ballistix de 32GB." },
    { id: 95, name: "ADATA XPG Gammix S5 1TB NVMe", price: 20000, category: "storage", img: "", stock: 10, description: "SSD NVMe ADATA XPG Gammix S5 de 1TB." },
    { id: 96, name: "Thermaltake Toughpower PF1 850W", price: 23000, category: "power_supply", img: "", stock: 5, description: "Fuente de poder Thermaltake Toughpower PF1 de 850W." },
    { id: 97, name: "Corsair 4000D Airflow", price: 14000, category: "case", img: "", stock: 10, description: "Gabinete Corsair 4000D Airflow." },
    { id: 98, name: "WD Black 4TB", price: 28000, category: "storage", img: "", stock: 5, description: "Disco Duro WD Black de 4TB." },
    { id: 99, name: "Cooler Master MasterLiquid ML240L RGB", price: 18000, category: "cooling", img: "", stock: 5, description: "Refrigeración líquida Cooler Master ML240L RGB." },
    { id: 100, name: "Acer Predator XB273U", price: 70000, category: "monitor", img: "", stock: 5, description: "Monitor Acer Predator XB273U, 27' con 144Hz." }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            const id = Number(productId); 
            resolve(products.find((prod) => prod.id === id))
        }, 1000)
    });
} ;

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
             
            resolve(products.filter((prod) => prod.category === categoryId))
        }, 1000)
    });
} ;