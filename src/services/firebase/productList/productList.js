import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "..";


const products = [
    { name: "Intel Core i5-12400", price: 149899, category: "processor", img: "https://pcboost.co.uk/wp-content/uploads/2022/08/1.jpg", stock: 120, description: "Procesador Intel Core i5-12400 de 6 núcleos." },
    { name: "NVIDIA GeForce RTX 3060", price: 419899, category: "graphics_card", img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6439/6439402cv1d.jpg", stock: 50, description: "Placa de Video NVIDIA GeForce RTX 3060 con 12GB de VRAM." },
    { name: "ASUS ROG Strix B550-F", price: 259799, category: "motherboard", img: "https://hard-digital.com.ar/public/files/Motherboard%20Asus%20Rog%20Strix%20B550-F%20Gaming%20Wifi%20Am4/2.jpg", stock: 80, description: "Motherboard ASUS ROG Strix B550-F con soporte para Ryzen." },
    { name: "Corsair Vengeance 16GB (2x8GB) 3200MHz", price: 66899, category: "memory", img: "https://www.xt-pc.com.ar/img/productos/4/MEM1732.jpg", stock: 200, description: "Memoria RAM Corsair Vengeance de 16GB en kit de 2." },
    { name: "Kingston A2000 500GB NVMe", price: 55899, category: "storage", img: "https://spacegamer.com.ar/img/Public/1058-producto-proyecto-111-b2dd9bf4395b523fc916052208177996-1024-1024-2842.jpg", stock: 150, description: "SSD NVMe Kingston A2000 de 500GB para cargas rápidas." },
    { name: "Corsair CV550 550W", price: 81399, category: "power_supply", img: "https://hard-digital.com.ar/public/files/Fuente%20Corsair%20550w%20Cv550%2080%20Plus%20Bronze%20Negro/5.jpg", stock: 100, description: "Fuente de poder Corsair CV550 de 550W." },
    { name: "Cooler Master MasterBox Q300L", price: 70359, category: "case", img: "https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-8841701.jpg", stock: 75, description: "Gabinete Cooler Master MasterBox Q300L, compacto y eficiente." },
    { name: "Seagate Barracuda 1TB", price: 59899, category: "storage", img: "https://www.venex.com.ar/products_images/1586464173_disc1.jpg", stock: 200, description: "Disco Duro Seagate Barracuda de 1TB." },
    { name: "Corsair H100i", price: 185499, category: "cooling", img: "https://katech.com.ar/wp-content/uploads/x1-1166.jpg", stock: 30, description: "Refrigeración líquida Corsair H100i para alto rendimiento." },
    { name: "LG 24' Full HD", price: 109899, category: "monitor", img: "https://http2.mlstatic.com/D_NQ_NP_644655-MLA50496998865_062022-O.webp", stock: 60, description: "Monitor LG de 24 pulgadas con resolución Full HD." },
    { name: "AMD Ryzen 5 5600X", price: 187299, category: "processor", img: "https://i0.wp.com/www.fullysilentpcs.com/wp-content/uploads/2017/07/AMD-Ryzen-5-5600X.png?fit=888%2C888&ssl=1", stock: 90, description: "Procesador AMD Ryzen 5 5600X, 6 núcleos." },
    { name: "Gigabyte GeForce GTX 1660 Super", price: 689299, category: "graphics_card", img: "https://static.gigabyte.com/StaticFile/Image/Global/5199322bf829fbf25710f1ebddd23742/Product/23929/png/500", stock: 45, description: "Placa de video GTX 1660 Super, ideal para juegos." },
    { name: "MSI B450M PRO-VDH MAX", price: 93699, category: "motherboard", img: "https://http2.mlstatic.com/D_NQ_NP_885555-MLA42788838982_072020-O.webp", stock: 70, description: "Motherboard MSI B450M para procesadores AMD." },
    { name: "G.Skill Ripjaws V 16GB (2x8GB) 3200MHz", price: 67399, category: "memory", img: "https://www.shoppingexpress.com.au/assets/full/F4-3200C16D-16GVKB.jpg?20210318055301", stock: 180, description: "Memoria RAM G.Skill de alto rendimiento." },
    { name: "Samsung 970 EVO Plus 1TB NVMe", price: 167499, category: "storage", img: "https://techmartunbox.com/wp-content/uploads/2019/09/mz-v7s1t0bw-image-01-600x600-300x300.jpg", stock: 120, description: "SSD NVMe Samsung 970 EVO Plus de 1TB." },
    { name: "Thermaltake Smart RGB 600W", price: 87799, category: "power_supply", img: "https://fullh4rd.com.ar/img/productos/26/fuente-600w-thermaltake-smart-rgb-80-plus-white-0.jpg", stock: 80, description: "Fuente de poder Thermaltake RGB de 600W." },
    { name: "NZXT H510", price: 97299, category: "case", img: "https://http2.mlstatic.com/D_Q_NP_2X_800360-MLB32849446156_112019-T.webp", stock: 65, description: "Gabinete NZXT H510, elegante y funcional." },
    { name: "Toshiba DT01ACA200 2TB", price: 67299, category: "storage", img: "https://http2.mlstatic.com/D_NQ_NP_649104-MLA79327383899_092024-O.webp", stock: 140, description: "Disco Duro Toshiba de 2TB." },
    { name: "Cooler Master Hyper 212", price: 87699, category: "cooling", img: "https://www.precio-calidad.com.ar/wp-content/uploads/2020/02/Hyper-212-Black-Edition-RGB-1.jpg", stock: 60, description: "Cooler CPU Cooler Master Hyper 212." },
    { name: "Dell UltraSharp U2415", price: 187399, category: "monitor", img: "https://m.media-amazon.com/images/I/614DL2XX4aL._AC_SL1280_.jpg", stock: 30, description: "Monitor Dell UltraSharp 24' con gran precisión de color." },
    { name: "Intel Core i7-11700K", price: 498299, category: "processor", img: "https://acdn.mitiendanube.com/stores/002/787/742/products/423881-139da8ba814cf9ae9516805741996515-1024-1024.jpg", stock: 50, description: "Procesador Intel Core i7-11700K, 8 núcleos." },
    { name: "ASUS TUF Gaming GeForce RTX 3060 Ti", price: 801799, category: "graphics_card", img: "https://dlcdnwebimgs.asus.com/gain/ab20b970-c683-4be5-b3ca-ad0f5f759beb/", stock: 25, description: "Placa de video RTX 3060 Ti, ideal para gaming." },
    { name: "ASRock B550 Phantom Gaming 4", price: 134599, category: "motherboard", img: "https://pg.asrock.com/mb/photo/B550%20Phantom%20Gaming%204(L2).png", stock: 40, description: "Motherboard ASRock B550 para procesadores AMD." },
    { name: "HyperX Fury 16GB (2x8GB) 3200MHz", price: 71299, category: "memory", img: "https://racgamers.com/cdn/shop/products/71jj7ve67ql._ac_sx522_b2709548-3b20-4fb9-a5af-b66eb2aaabdb.jpg?v=1663690819", stock: 100, description: "Memoria RAM HyperX Fury de alto rendimiento." },
    { name: "Crucial P3 500GB NVMe", price: 47799, category: "storage", img: "https://goldentechstore.com.ar/wp-content/uploads/DIS116-jpg.webp", stock: 150, description: "SSD NVMe Crucial P3 de 500GB." },
    { name: "EVGA 600W 80 Plus", price: 117899, category: "power_supply", img: "https://thetechcrew.uy/wp-content/uploads/2020/11/fuente-evga-600w-w1-80-plus-nnet-52027-35.jpg", stock: 70, description: "Fuente de poder EVGA de 600W, eficiente y confiable." },
    { name: "Fractal Design Meshify C", price: 239489, category: "case", img: "https://http2.mlstatic.com/D_NQ_NP_624827-MLA31115432747_062019-O.webp", stock: 50, description: "Gabinete Fractal Design Meshify C, con excelente flujo de aire." },
    { name: "Western Digital Blue 1TB", price: 52799, category: "storage", img: "https://www.redinfo.com.ar/web/image/product.template/24681/image", stock: 180, description: "Disco Duro WD Blue de 1TB." },
    { name: "Deepcool Gammaxx 400", price: 67499, category: "cooling", img: "https://cdn.deepcool.com/public/ProductFile/DEEPCOOL/Cooling/CPUAirCoolers/GAMMAXX_400_Blue/Gallery/800X800/02.jpg?fm=webp&q=60", stock: 90, description: "Cooler CPU Deepcool Gammaxx 400." },
    { name: "Acer R240HY", price: 161299, category: "monitor", img: "https://m.media-amazon.com/images/I/91K9SyGiyzL.jpg", stock: 40, description: "Monitor Acer R240HY de 24 pulgadas." },
    { name: "AMD Ryzen 7 5800X", price: 187499, category: "processor", img: "https://mexx-img-2019.s3.amazonaws.com/39168_2.jpeg", stock: 30, description: "Procesador AMD Ryzen 7 5800X, 8 núcleos." },
    { name: "MSI GeForce GTX 1650", price: 312799, category: "graphics_card", img: "https://www.invidcomputers.com/images/000000000041570984860GTX-1650-D6-VENTUS-XS-OCV3.png", stock: 35, description: "Placa de video GTX 1650, ideal para juegos en 1080p." },
    { name: "Gigabyte B450 AORUS M", price: 143299, category: "motherboard", img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/48/1951443/2.jpg?2193", stock: 65, description: "Motherboard Gigabyte B450 AORUS para Ryzen." },
    { name: "Corsair Vengeance LPX 16GB (2x8GB) 3200MHz", price: 138799, category: "memory", img: "https://www.deffo.com.ar/wp-content/uploads/2023/08/VENGEANCE-LPX-x2-1.jpg", stock: 80, description: "Memoria RAM Corsair Vengeance LPX de 16GB." },
    { name: "ADATA XPG SX8200 Pro 1TB NVMe", price: 229899, category: "storage", img: "https://http2.mlstatic.com/D_NQ_NP_835255-MLA31045011699_062019-O.webp", stock: 60, description: "SSD NVMe ADATA XPG SX8200 Pro de 1TB." },
    { name: "Corsair RM550x 550W", price: 104899, category: "power_supply", img: "https://http2.mlstatic.com/D_NQ_NP_802919-MLA29932841393_042019-O.webp", stock: 60, description: "Fuente de poder Corsair RM550x de 550W, modular." },
    { name: "Thermaltake View 71", price: 879399, category: "case", img: "https://www.compu-santafe.com.ar/productos/get-imagen/10667", stock: 45, description: "Gabinete Thermaltake View 71, con vidrio templado." },
    { name: "Seagate Barracuda 4TB", price: 127899, category: "storage", img: "https://images.watercoolinguk.co.uk/images/product_images/large/193/seagate-barracuda-hdd-sata-6g-5400rpm-25-inch-4tb-hdsg-081-64161-1.jpg", stock: 30, description: "Disco Duro Seagate Barracuda de 4TB." },
    { name: "Cooler Master MasterLiquid ML120L", price: 89199, category: "cooling", img: "https://acdn.mitiendanube.com/stores/001/474/949/products/mlw-d12m-a18pc-r2-11-2bee1557d9ef8af70016335018388706-640-0.png", stock: 55, description: "Refrigeración líquida Cooler Master ML120L." },
    { name: "BenQ GW2480", price: 183499, category: "monitor", img: "https://www.rodo.com.ar/media/catalog/product/cache/855090a5c67e45b26c9e0d345e7592dc/3/5/351955_monitor_benq__2.jpg", stock: 35, description: "Monitor BenQ GW2480 de 24 pulgadas, sin parpadeo." },
    { name: "Intel Core i9-11900K", price: 729499, category: "processor", img: "https://acdn.mitiendanube.com/stores/854/212/products/procesador-intel-core-i9-11900k-11va-gen-8-core1-644510c75214796e2116233452469925-1024-1024.jpg", stock: 20, description: "Procesador Intel Core i9-11900K, 8 núcleos." },
    { name: "MSI Radeon RX 6700 XT", price: 387499, category: "graphics_card", img: "https://asset.msi.com/resize/image/global/product/product_1614764833bb51be34b688a9249846f4e4c4b1b06b.png62405b38c58fe0f07fcef2367d8a9ba1/600.png", stock: 15, description: "Placa de video MSI Radeon RX 6700 XT." },
    { name: "ASUS ROG Strix B550-F Gaming", price: 316499, category: "motherboard", img: "https://gorilagames.com/img/Public/1019-producto-motherboard-asus-rog-strix-b550-f-gaming-wifi-4-1127.jpg", stock: 50, description: "Motherboard ASUS ROG Strix B550-F Gaming." },
    { name: "G.Skill Trident Z RGB 16GB (2x8GB) 3600MHz", price: 123499, category: "memory", img: "https://www.necxus.com.ar/products_image/27442/1000x1000_1.jpg", stock: 40, description: "Memoria RAM G.Skill Trident Z RGB." },
    { name: "Samsung 980 1TB NVMe", price: 177499, category: "storage", img: "https://notebookcentre.am/wa-data/public/shop/products/28/39/3928/images/16715/16715.750@2x.jpg", stock: 60, description: "SSD NVMe Samsung 980 de 1TB." },
    { name: "Thermaltake Toughpower GF1 750W", price: 197699, category: "power_supply", img: "https://mla-s1-p.mlstatic.com/783921-MLA49785500609_042022-F.jpg", stock: 25, description: "Fuente de poder Thermaltake Toughpower GF1 de 750W." },
    { name: "NZXT H510 Elite", price: 737699, category: "case", img: "https://mcegamer.com/wp-content/uploads/2020/12/CA-H510E-W1-1.jpg", stock: 40, description: "Gabinete NZXT H510 Elite, con panel de vidrio." },
    { name: "Western Digital Black 1TB", price: 138499, category: "storage", img: "https://www.deffo.com.ar/wp-content/uploads/2020/08/WD1003FZEX-3.jpg", stock: 50, description: "Disco Duro WD Black de 1TB, rendimiento superior." },
    { name: "Arctic Freezer 34 eSports DUO", price: 184599, category: "cooling", img: "https://http2.mlstatic.com/D_NQ_NP_762815-MLA72986815168_112023-O.webp", stock: 30, description: "Cooler CPU Arctic Freezer 34 eSports." },
    { name: "ASUS ProArt PA248QV", price: 609799, category: "monitor", img: "https://jcmagazine.com/wp-content/uploads/2020/04/asus-proart.jpg", stock: 20, description: "Monitor ASUS ProArt PA248QV, ideal para diseño." },
    { name: "AMD Ryzen 9 5900X", price: 447699, category: "processor", img: "https://www.xt-pc.com.ar/img/productos/1/CPU572.jpg", stock: 15, description: "Procesador AMD Ryzen 9 5900X, 12 núcleos." },
    { name: "ZOTAC GeForce GTX 1650", price: 283499, category: "graphics_card", img: "https://www.dateks.lv/images/pic/1200/1200/706/1570.jpg", stock: 30, description: "Placa de video ZOTAC GTX 1650." },
    { name: "MSI B550M PRO-VDH", price: 134399, category: "motherboard", img: "https://mexx-img-2019.s3.amazonaws.com/44047_1.jpeg", stock: 60, description: "Motherboard MSI B550M PRO-VDH." },
    { name: "Crucial Ballistix 16GB (2x8GB) 3200MHz", price: 88699, category: "memory", img: "https://http2.mlstatic.com/D_NQ_NP_880612-MLA44824295029_022021-O.webp", stock: 75, description: "Memoria RAM Crucial Ballistix." },
    { name: "ADATA SU800 512GB SSD", price: 258699, category: "storage", img: "https://http2.mlstatic.com/D_NQ_NP_294025-MLA25348382627_022017-O.webp", stock: 100, description: "SSD ADATA SU800 de 512GB." },
    { name: "Cooler Master MWE Gold 650W", price: 127699, category: "power_supply", img: "https://http2.mlstatic.com/D_NQ_NP_862371-MLA53195542064_012023-O.webp", stock: 50, description: "Fuente de poder Cooler Master MWE Gold de 650W." },
    { name: "Phanteks Eclipse P300A", price: 78699, category: "case", img: "https://http2.mlstatic.com/D_NQ_NP_995423-MLU79066095914_092024-O.webp", stock: 40, description: "Gabinete Phanteks Eclipse P300A." },
    { name: "Seagate FireCuda 2TB SSHD", price: 121399, category: "storage", img: "https://m.media-amazon.com/images/I/71lWfuDR-uL.jpg", stock: 20, description: "Disco Duro Seagate FireCuda de 2TB." },
    { name: "Noctua NH-D15", price: 257399, category: "cooling", img: "https://http2.mlstatic.com/D_NQ_NP_844296-MLA77977308041_072024-O.webp", stock: 15, description: "Cooler CPU Noctua NH-D15." },
    { name: "LG UltraGear 27GL850-B", price: 313699, category: "monitor", img: "https://www.lg.com/content/dam/channel/wcms/es/images/monitores/27gl850-b_aeu_eees_es_c/27gl850-01.jpg", stock: 10, description: "Monitor LG UltraGear de 27 pulgadas." },
    { name: "Intel Core i3-10100", price: 152399, category: "processor", img: "https://lezamapc.com.ar/17789-large_default/microprocesador-intel-core-i3-10100-cometlake-s1200.jpg", stock: 90, description: "Procesador Intel Core i3-10100." },
    { name: "MSI Radeon RX 560", price: 127499, category: "graphics_card", img: "https://asset.msi.com/resize/image/global/product/product_7_20170426172637_590067cd250b2.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png", stock: 40, description: "Placa de video MSI Radeon RX 560." },
    { name: "Gigabyte Z490 AORUS ELITE", price: 351299, category: "motherboard", img: "https://static.gigabyte.com/StaticFile/Image/Global/5256932cb75d565e83a3c3d3e19efa64/Product/24970", stock: 25, description: "Motherboard Gigabyte Z490 AORUS ELITE." },
    { name: "Corsair Vengeance LPX 32GB (2x16GB) 3200MHz", price: 125699, category: "memory", img: "https://www.xt-pc.com.ar/img/productos/4/MEM1738.jpg", stock: 20, description: "Memoria RAM Corsair Vengeance LPX de 32GB." },
    { name: "Samsung 860 EVO 1TB SSD", price: 183599, category: "storage", img: "https://image-us.samsung.com/SamsungUS/home/computing/memory-and-storage/solid-state-drives/pdp/mz-76e1t0b/MZ-76E1T0BW_2.jpg?$product-details-jpg$", stock: 30, description: "SSD Samsung 860 EVO de 1TB." },
    { name: "EVGA SuperNOVA 750W", price: 389699, category: "power_supply", img: "https://media.ldlc.com/bo/images/fiches/Alimentation/evga/evga_supernova_gt_001.jpg", stock: 15, description: "Fuente de poder EVGA SuperNOVA 750W." },
    { name: "Cooler Master MasterBox NR200", price: 122399, category: "case", img: "https://http2.mlstatic.com/D_NQ_NP_728131-MLU75585748888_042024-O.webp", stock: 25, description: "Gabinete Cooler Master NR200." },
    { name: "Toshiba 4TB External HDD", price: 157899, category: "storage", img: "https://www.e-retail.com/wp-content/uploads/2023/02/anas-HDTB510EK3AB-2.jpg", stock: 20, description: "Disco Duro Externo Toshiba de 4TB." },
    { name: "Deepcool Gammaxx GT", price: 77699, category: "cooling", img: "https://cdn.deepcool.com/public/ProductFile/DEEPCOOL/Cooling/CPUAirCoolers/GAMMAXX_GT_ARGB/Gallery/800X800/01.jpg?fm=webp&q=60", stock: 30, description: "Cooler CPU Deepcool Gammaxx GT." },
    { name: "Dell P2419H", price: 419399, category: "monitor", img: "https://images.fravega.com/f1000/9cf6f9f2b57c387773f6f701cd2cd7dc.jpg", stock: 15, description: "Monitor Dell P2419H de 24 pulgadas." },
    { name: "Intel Core i5-10600K", price: 396699, category: "processor", img: "https://http2.mlstatic.com/D_NQ_NP_830013-MLU72677139535_112023-O.webp", stock: 25, description: "Procesador Intel Core i5-10600K." },
    { name: "ZOTAC GeForce RTX 2070", price: 287699, category: "graphics_card", img: "https://http2.mlstatic.com/D_754122-MLA78299733878_082024-C.jpg", stock: 10, description: "Placa de video ZOTAC GeForce RTX 2070." },
    { name: "ASUS ROG Strix Z490-E Gaming", price: 377699, category: "motherboard", img: "https://xtremegames.com.ar/wp-content/uploads/2023/02/customization-front-1-600x575.png", stock: 15, description: "Motherboard ASUS ROG Strix Z490-E Gaming." },
    { name: "G.Skill Ripjaws V 32GB (2x16GB) 3600MHz", price: 176399, category: "memory", img: "https://http2.mlstatic.com/D_977383-MLA77115310516_062024-C.jpg", stock: 10, description: "Memoria RAM G.Skill Ripjaws V de 32GB." },
    { name: "Kingston A2000 1TB NVMe", price: 126199, category: "storage", img: "https://s.alicdn.com/@sc04/kf/H2e296ad58a474f4fa9f7f63d01c5522bJ.jpg_720x720q50.jpg", stock: 20, description: "SSD NVMe Kingston A2000 de 1TB." },
    { name: "Corsair CV650 650W", price: 127699, category: "power_supply", img: "https://www.precio-calidad.com.ar/wp-content/uploads/2021/10/Corsair-CV650-650W-6-800x800.jpg", stock: 25, description: "Fuente de poder Corsair CV650 de 650W." },
    { name: "Phanteks Eclipse P400A", price: 367499, category: "case", img: "https://farlink.com.ar/wp-content/uploads/2021/10/P400A001png-1.png", stock: 15, description: "Gabinete Phanteks Eclipse P400A." },
    { name: "WD Blue 2TB", price: 88969, category: "storage", img: "https://wallnet.com.ar/wp-content/uploads/2022/03/HD-Western-Digital-2TB-SATA-III-64Mb-BLUE0.jpg", stock: 15, description: "Disco Duro WD Blue de 2TB." },
    { name: "Cooler Master Hyper 212 Black Edition", price: 53699, category: "cooling", img: "https://hardloots.com.ar/wp-content/uploads/2023/07/1914-cooler-master-hyper-212-rgb-black-edition-ventilador-cpu.jpg", stock: 30, description: "Cooler CPU Cooler Master Hyper 212 Black Edition." },
    { name: "ASUS ProArt PA27AC", price: 569699, category: "monitor", img: "https://www.softcom.co.id/wp-content/uploads/2020/06/PA27AC-3-600x600.jpg", stock: 5, description: "Monitor ASUS ProArt PA27AC, 27' con HDR." },
    { name: "AMD Ryzen 5 3600", price: 98699, category: "processor", img: "https://http2.mlstatic.com/D_NQ_NP_730795-MLU70005543490_062023-O.webp", stock: 20, description: "Procesador AMD Ryzen 5 3600, 6 núcleos." },
    { name: "Gigabyte AORUS GeForce RTX 3080", price: 467699, category: "graphics_card", img: "https://www.pchouse.com.bd/image/cache/catalog/AAAAA%20EID%20BANNAR/174/gigabyte-rtx-3080-ti-master-graphics-card-1-600x500h.png.webp", stock: 5, description: "Placa de video AORUS GeForce RTX 3080." },
    { name: "MSI MPG B550 Gaming Edge WiFi", price: 268699, category: "motherboard", img: "https://asset.msi.com/resize/image/global/product/product_6_20200603173652_5ed76f343312c.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png", stock: 15, description: "Motherboard MSI MPG B550 Gaming Edge WiFi." },
    { name: "Corsair Vengeance LPX 64GB (2x32GB) 3200MHz", price: 189699, category: "memory", img: "https://www.asusbymacman.es/16128-large_default/corsair-vengeance-lpx-64gb-2x32gb-ddr4-3200mhz-memoria-ram.jpg", stock: 5, description: "Memoria RAM Corsair Vengeance LPX de 64GB." },
    { name: "Samsung 970 EVO Plus 2TB NVMe", price: 167699, category: "storage", img: "https://http2.mlstatic.com/D_NQ_NP_938777-MLA77729981890_072024-O.webp", stock: 5, description: "SSD NVMe Samsung 970 EVO Plus de 2TB." },
    { name: "Cooler Master MWE Gold 850W", price: 288699, category: "power_supply", img: "https://gztienda.com.ar/img/Public/1116-producto-mwe-gold-850-v2-full-modular-1200x630-8195.jpg", stock: 10, description: "Fuente de poder Cooler Master MWE Gold de 850W." },
    { name: "Thermaltake Core P3", price: 389699, category: "case", img: "https://www.simm.com.ar/Temp/App_WebSite/App_PictureFiles/Items/841163002490_800.jpg", stock: 5, description: "Gabinete Thermaltake Core P3." },
    { name: "Seagate Barracuda 8TB", price: 289699, category: "storage", img: "https://http2.mlstatic.com/D_Q_NP_957634-MLA41517560063_042020-O.webp", stock: 5, description: "Disco Duro Seagate Barracuda de 8TB." },
    { name: "Noctua NH-U12S Redux", price: 152299, category: "cooling", img: "https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-9199201.jpg", stock: 10, description: "Cooler CPU Noctua NH-U12S Redux." },
    { name: "Dell UltraSharp U2720Q", price: 779699, category: "monitor", img: "https://www.driversupport.com/wp-content/uploads/2024/05/KB-Dell-UltraSharp-U2720Q-1.jpg", stock: 5, description: "Monitor Dell UltraSharp 27' 4K." },
    { name: "Intel Core i7-10700K", price: 473599, category: "processor", img: "https://www.mink.com.ar/qloud/ryr/fotos/22498-0.jpg", stock: 10, description: "Procesador Intel Core i7-10700K." },
    { name: "EVGA GeForce RTX 3060", price: 394399, category: "graphics_card", img: "https://http2.mlstatic.com/D_NQ_NP_876648-MLA48926774285_012022-O.webp", stock: 5, description: "Placa de video EVGA GeForce RTX 3060." },
    { name: "ASRock Z490 Taichi", price: 419699, category: "motherboard", img: "https://media.ldlc.com/r1600/ld/products/00/05/99/47/LD0005994703.jpg", stock: 5, description: "Motherboard ASRock Z490 Taichi." },
    { name: "Crucial Ballistix 32GB (2x16GB) 3600MHz", price: 93499, category: "memory", img: "https://i0.wp.com/compunilestore.com/wp-content/uploads/2021/12/mecc-269_mecc_269_01.jpg?resize=600%2C600&ssl=1", stock: 5, description: "Memoria RAM Crucial Ballistix de 32GB." },
    { name: "ADATA XPG Gammix S5 1TB NVMe", price: 77499, category: "storage", img: "https://fullh4rd.com.ar/img/productos/12/hd-ssd-1tb-adata-xpg-gammix-s5-m2-nvme-0.jpg", stock: 10, description: "SSD NVMe ADATA XPG Gammix S5 de 1TB." },
    { name: "Thermaltake Toughpower PF1 850W", price: 218699, category: "power_supply", img: "https://www.tradeinn.com/f/13824/138242115_4/thermaltake-toughpower-pf1-850w-modular-power-supply.webp", stock: 5, description: "Fuente de poder Thermaltake Toughpower PF1 de 850W." },
    { name: "Corsair 4000D Airflow", price: 173599, category: "case", img: "https://fullh4rd.com.ar/img/productos/6/gabinete-corsair-4000d-airflow-tg-white-0.jpg", stock: 10, description: "Gabinete Corsair 4000D Airflow." },
    { name: "WD Black 4TB", price: 319399, category: "storage", img: "https://www.tecafrica.co.za/cdn/shop/products/WD4005FZBX-1_2b48cf68-074c-432c-bc26-aa59e1b1c05c.jpg?v=1657537840", stock: 5, description: "Disco Duro WD Black de 4TB." },
    { name: "Cooler Master MasterLiquid ML240L RGB", price: 128699, category: "cooling", img: "https://m.media-amazon.com/images/I/61g3UkYPnmL._SL1500_.jpg", stock: 5, description: "Refrigeración líquida Cooler Master ML240L RGB." },
    { name: "Acer Predator XB273U", price: 879699, category: "monitor", img: "https://lcdn.mediagalaxy.ro/resize/media/catalog/product/x/b/2bd48d28d1c32adea0e55139a4e6434a/xb273u_v3_3_805b2d22.jpg", stock: 5, description: "Monitor Acer Predator XB273U, 27' con 144Hz." }
];

export const seedProducts = async () => {
    const collectionRef = collection(db, "products");

    for (const product of products) {
        // Verificar si el producto ya existe en la base de datos
        const q = query(collectionRef, where("name", "==", product.name)); // Usamos "name" como campo único
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            // Si no existe, agregamos el producto
            try {
                const docRef = await addDoc(collectionRef, product);
                console.log("Producto añadido con ID:", docRef.id);
            } catch (error) {
                console.error("Error añadiendo el producto:", error);
            }
        } else {
            console.log(`Producto "${product.name}" ya existe en Firestore, no se sube nuevamente.`);
        }
    }

    console.log("Todos los productos han sido revisados y cargados.");
};

// FUNCION PARA SUBIRLO DESDE LA LOGICA DE APP

import { seedProducts } from "../../productList/productList";

    /* FUNCION PARA PUSHEAR ARRAYS A MI COLECCION DE FIRESTORE */
   useEffect(() => {
      const uploadProducts = async () => {
        try {
          console.log("Cargando productos a Firestore...");
          await seedProducts();
          console.log("Productos cargados exitosamente.");
        } catch (error) {
          console.error("Error al cargar productos:", error);
        }
      };
      uploadProducts();
    }, []);