import { useState } from "react";
import { Receta } from "../modelos/Receta";
import { ContextReceta } from "../Contextos/ContextReceta";
import NavegacionComponents from "../components/NavegacionComponents";

export default function RecetaProviders() {

  const [lista, setLista] = useState<Receta[]>([]);

  function agregar(receta: Receta) {
    setLista([...lista, receta]);
  }

  function eliminar(id: number) {
    setLista(lista.filter(receta => receta.id !== id));
  }

  return (
    <ContextReceta.Provider value={{ lista, agregar, eliminar }}>
      <NavegacionComponents />
    </ContextReceta.Provider>
  );
}