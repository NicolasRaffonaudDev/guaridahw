import React from 'react'

const CartItem = ({ id, name, quantity, price}) => {
  return (
    <article className="flex items-center justify-between p-4 border-b">
        {/* Sección de información */}
        <section>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm">Cantidad: {quantity}</p>
          <p className="text-sm">Precio unitario: ${price}</p>
          <p className="font-bold">Total: ${price * quantity}</p>
        </section>

        {/* Sección de control */}
        <section className="flex gap-2">
          <button onClick={() => onAdd(id)} className="px-2 py-1 bg-green-500 text-white rounded">+</button>
          <button onClick={() => onRemove(id)} className="px-2 py-1 bg-yellow-500 text-white rounded">-</button>
          <button onClick={() => onDelete(id)} className="px-2 py-1 bg-red-500 text-white rounded">Eliminar</button>
        </section>
    </article>
  )
}

export default CartItem