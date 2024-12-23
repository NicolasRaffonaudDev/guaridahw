import { useState } from "react"

const ItemCount = ({ stock, onCountChange }) => {
    const [count, setCount] = useState(1);

    const increment = () => {
        if (count < stock) {
            setCount(prev => {
                const newCount = prev + 1;
                onCountChange(newCount);
                return newCount;
            });
        }
    };

    const decrement = () => {
        if (count > 1) {
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
                <button className="btn btn-outline-secondary btn-sm rounded-circle" type="button" onClick={decrement}>
                    <i className="fa fa-minus"></i>
                </button>
                <p className="m-0 mx-2" style={{ fontSize: '1rem' }}>{count}</p>
                <button className="btn btn-outline-secondary btn-sm rounded-circle" type="button" onClick={increment}>
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        </div>
    );
}

export default ItemCount;