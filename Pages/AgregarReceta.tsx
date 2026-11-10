import { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView
} from "react-native";

import { ContextReceta } from "../Contextos/ContextReceta";

export default function AgregarReceta() {

  const { lista, agregar } = useContext(ContextReceta);

  const [nombre, setNombre] = useState("");
  const [ing1, setIng1] = useState("");
  const [ing2, setIng2] = useState("");
  const [ing3, setIng3] = useState("");
  const [ing4, setIng4] = useState("");
  const [ing5, setIng5] = useState("");

  function guardar() {

    if (nombre.trim() === "") {
      Alert.alert("Aviso", "Ingrese el nombre de la receta");
      return;
    }

    const ingredientes = [
      ing1,
      ing2,
      ing3,
      ing4,
      ing5
    ].filter(ing => ing.trim() !== "");

    if (ingredientes.length === 0) {
      Alert.alert("Aviso", "Ingrese al menos un ingrediente");
      return;
    }

    const nuevaReceta = {
      id: lista.length === 0
        ? 1
        : Math.max(...lista.map(receta => receta.id)) + 1,
      nombre: nombre,
      ingredientes: ingredientes,
      fecha: new Date().toLocaleDateString()
    };

    agregar(nuevaReceta);

    Alert.alert("Correcto", "Receta guardada");

    setNombre("");
    setIng1("");
    setIng2("");
    setIng3("");
    setIng4("");
    setIng5("");
  }

  return (
    <ScrollView contentContainerStyle={styles.contenedor}>

      <Text style={styles.titulo}>Agregar Receta</Text>

      <Text>Nombre de la receta</Text>
      <TextInput
        style={styles.entrada}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Nombre"
      />

      <Text>Ingrediente 1</Text>
      <TextInput
        style={styles.entrada}
        value={ing1}
        onChangeText={setIng1}
        placeholder="Ingrediente 1"
      />

      <Text>Ingrediente 2</Text>
      <TextInput
        style={styles.entrada}
        value={ing2}
        onChangeText={setIng2}
        placeholder="Ingrediente 2"
      />

      <Text>Ingrediente 3</Text>
      <TextInput
        style={styles.entrada}
        value={ing3}
        onChangeText={setIng3}
        placeholder="Ingrediente 3"
      />

      <Text>Ingrediente 4</Text>
      <TextInput
        style={styles.entrada}
        value={ing4}
        onChangeText={setIng4}
        placeholder="Ingrediente 4"
      />

      <Text>Ingrediente 5</Text>
      <TextInput
        style={styles.entrada}
        value={ing5}
        onChangeText={setIng5}
        placeholder="Ingrediente 5"
      />

      <Button title="Guardar Receta" onPress={guardar} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    padding: 20,
  },
  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  entrada: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 5,
  },
});