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