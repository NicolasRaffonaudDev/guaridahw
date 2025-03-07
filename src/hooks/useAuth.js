import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

const useAuth = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const login = async (email, password) => {
    setError(null);
    setSuccess(false);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess(true);
    } catch (err) {
      setError("Error al iniciar sesión. Revisa tus credenciales.");
      console.error(err);
    }
  };

  return { login, error, success };
};

export default useAuth;