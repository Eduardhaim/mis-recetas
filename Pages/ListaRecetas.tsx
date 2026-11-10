import { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  Alert
} from "react-native";

import { ContextReceta } from "../Contextos/ContextReceta";

export default function ListaRecetas() {

  const { lista, eliminar } = useContext(ContextReceta);

  function borrar(id: number) {
    eliminar(id);
    Alert.alert("Aviso", "Receta eliminada");
  }

  return (
    <View style={styles.contenedor}>

      <Text style={styles.titulo}>Lista de Recetas</Text>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <Text>No hay recetas guardadas</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.receta}>

            <Text style={styles.nombre}>
              {item.id}. {item.nombre}
            </Text>

            <Text>Fecha: {item.fecha}</Text>

            <Button
              title="Eliminar"
              onPress={() => borrar(item.id)}
            />

          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  receta: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});