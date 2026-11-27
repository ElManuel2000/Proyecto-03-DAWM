import { useEffect, useState } from "react";
import { obtenerReseñas } from "../services/chocolateService";
import type { Chocolate } from "../types/Chocolate";

export default function useFetchData() {

  const [reseñas, setReseñas] = useState<Chocolate[]>([]);

  useEffect(() => {
    
    async function cargarDatos() {

      const datos = await obtenerReseñas();

      setReseñas(datos ? datos : []);
    }

    cargarDatos();

  }, []);

  return reseñas;

}