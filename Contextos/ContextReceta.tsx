import { createContext } from "react";
import { Receta } from "../modelos/Receta";

export const ContextReceta = createContext({
  lista: [] as Receta[],
  agregar: (receta: Receta) => {},
  eliminar: (id: number) => {},
  recetaSeleccionada: null as Receta | null,
  seleccionarReceta: (receta: Receta | null) => {}
});