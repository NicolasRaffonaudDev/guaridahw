import { useEffect, useState } from "react";
import { getProductById } from "../services/firebase/firestore/products";

const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cache, setCache] = useState({});

  useEffect(() => {
    let isMounted = true;
    if (cache[productId]) {
    setProduct(cache[productId]);
    return;
  }
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(productId);
        if (isMounted)
        setProduct(productData);
      } catch (err) {
        if (isMounted)
        setError(err);
      } finally {
        if (isMounted)
        setLoading(false);
      }
    };

    if (cache[productId]) {
      setProduct(cache[productId]);
      return;
    }
    
    fetchProduct();
    return () => { isMounted = false };
  }, [productId]);

  return { product, loading, error };
};

export default useProduct;