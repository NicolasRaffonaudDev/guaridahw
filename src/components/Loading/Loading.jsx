import React from 'react'
import { FaSpinner } from 'react-icons/fa';

const Loading = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center bg-light">
      <FaSpinner 
        className="text-primary mb-4" 
        style={{ fontSize: "5rem", animation: "spin 1s linear infinite" }} 
      />
      <h1 className="text-primary">Cargando...</h1>
    </div>
  );
};

export default Loading