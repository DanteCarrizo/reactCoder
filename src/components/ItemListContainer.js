import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        const productosFiltrados = id
          ? res.filter((producto) => producto.categoria === id)
          : res;

        setProductos(productosFiltrados);
      })
      .catch((error) => {
        console.error("Error al obtener los datos: ", error);
      });
  }, [id]);

  return <ItemList productos={productos} />;
};

export default ItemListContainer;
