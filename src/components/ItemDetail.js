import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.imagen} alt={item.titulo} />
        <div>
          <h3 className="titulo">{item.titulo}</h3>
          <p className="descripcion">{item.descripcion}</p>
          <p className="categoria">Categoría: {item.categoria}</p>
          <p className="precio">${item.precio}</p>
          <div className="cantidad-container">
            <button onClick={handleRestar}>-</button>
            <span className="cantidad">{cantidad}</span>
            <button onClick={handleSumar}>+</button>
          </div>
          <button onClick={() => alert(`Agregado al carrito: ${item.titulo}`)}>
            Agregar al Carrito
          </button>
          <Link to="/">Volver al Catálogo</Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;