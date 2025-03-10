import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

const useAuth = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const login = async (email, password) => {    
    setError(null);
    setSuccess(false);
    
    useEffect(() => {
      return () => {
        setError(null);
        setSuccess(false);
      };
    }, []);


    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess(true);
    } catch (err) {
      let errorMessage;
      switch (err.code) {
        case 'auth/user-not-found':
          errorMessage = 'Usuario no registrado.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Contraseña incorrecta.';
          break;
        default:
          errorMessage = 'Error al iniciar sesión.';
      }
      setError(errorMessage);
      console.error(err);
    }
  };

  return { login, error, success };
};

export default useAuth;