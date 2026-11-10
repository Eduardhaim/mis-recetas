import { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { ContextReceta } from "../Contextos/ContextReceta";

export default function DetalleReceta() {

  const { recetaSeleccionada } = useContext(ContextReceta);

  if (recetaSeleccionada === null) {
    return (
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Detalle de Receta</Text>
        <Text>Primero busque una receta en la lista</Text>
      </View>
    );
  }

  return (
    <View style={styles.contenedor}>

      <Text style={styles.titulo}>Detalle de Receta</Text>

      <Text style={styles.nombre}>
        {recetaSeleccionada.nombre}
      </Text>

      <Text>Número: {recetaSeleccionada.id}</Text>

      <Text>Fecha: {recetaSeleccionada.fecha}</Text>

      <Text style={styles.subtitulo}>Ingredientes:</Text>

      <FlatList
        data={recetaSeleccionada.ingredientes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.ingrediente}>{item}</Text>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  nombre: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10
  },
  ingrediente: {
    fontSize: 16,
    marginBottom: 8
  }
});