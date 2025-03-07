import { useEffect, useState } from "react";

const ItemCount = ({ stock, onCountChange }) => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        if (count > stock) {
            setCount(stock);
            onCountChange(stock);
        }
    }, [stock]); // <-- Escuchar cambios en stock

    const increment = () => {
        if (count < stock) {  // Incrementa solo si count es menor que stock
            setCount(prev => {
                const newCount = prev + 1;
                onCountChange(newCount);
                return newCount;
            });
        }
    };

    const decrement = () => {
        if (count > 1) {  // Decrementa solo si count es mayor que 1
            setCount(prev => {
                const newCount = prev - 1;
                onCountChange(newCount);
                return newCount;
            });
        }
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-outline-secondary btn-sm rounded-circle" data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Disminuir cantidad" type="button" onClick={decrement} disabled={count <= 1}>
                    <i className="fa fa-minus"></i>
                </button>
                <p className="m-0 mx-2" style={{ fontSize: '1rem' }}>{count}</p>
                <button className="btn btn-outline-secondary btn-sm rounded-circle" data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Aumentar cantidad" type="button" onClick={increment} disabled={count >= stock}>
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        </div>
    );
};

export default ItemCount;
