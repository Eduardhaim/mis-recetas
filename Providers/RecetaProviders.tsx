import { useState } from "react";
import { Receta } from "../modelos/Receta";
import { ContextReceta } from "../Contextos/ContextReceta";
import NavegacionComponents from "../components/NavegacionComponents";

export default function RecetaProviders() {

  const [lista, setLista] = useState<Receta[]>([]);
  const [recetaSeleccionada, setRecetaSeleccionada] = useState<Receta | null>(null);

  function agregar(receta: Receta) {
    setLista([...lista, receta]);
  }

  function eliminar(id: number) {
    const nuevaLista: Receta[] = [];

    for (let i = 0; i < lista.length; i++) {
      if (lista[i].id !== id) {
        nuevaLista.push(lista[i]);
      }
    }

    setLista(nuevaLista);

    if (recetaSeleccionada !== null && recetaSeleccionada.id === id) {
      setRecetaSeleccionada(null);
    }
  }

  function seleccionarReceta(receta: Receta | null) {
    setRecetaSeleccionada(receta);
  }

  return (
    <ContextReceta.Provider
      value={{
        lista,
        agregar,
        eliminar,
        recetaSeleccionada,
        seleccionarReceta
      }}
    >
      <NavegacionComponents />
    </ContextReceta.Provider>
  );
}