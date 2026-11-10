import { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ScrollView,
  StyleSheet
} from "react-native";
import { ContextReceta } from "../Contextos/ContextReceta";
import { Receta } from "../modelos/Receta";

export default function AgregarReceta() {

  const { lista, agregar } = useContext(ContextReceta);

  const [nombre, setNombre] = useState("");
  const [ingrediente1, setIngrediente1] = useState("");
  const [ingrediente2, setIngrediente2] = useState("");
  const [ingrediente3, setIngrediente3] = useState("");
  const [ingrediente4, setIngrediente4] = useState("");
  const [ingrediente5, setIngrediente5] = useState("");

  function guardar() {

    if (nombre.trim() === "") {
      Alert.alert("Aviso", "Ingrese el nombre de la receta");
      return;
    }

    const ingredientes: string[] = [];

    if (ingrediente1.trim() !== "") {
      ingredientes.push(ingrediente1);
    }

    if (ingrediente2.trim() !== "") {
      ingredientes.push(ingrediente2);
    }

    if (ingrediente3.trim() !== "") {
      ingredientes.push(ingrediente3);
    }

    if (ingrediente4.trim() !== "") {
      ingredientes.push(ingrediente4);
    }

    if (ingrediente5.trim() !== "") {
      ingredientes.push(ingrediente5);
    }

    if (ingredientes.length === 0) {
      Alert.alert("Aviso", "Ingrese al menos un ingrediente");
      return;
    }

    let numero = 1;

    for (let i = 0; i < lista.length; i++) {
      if (lista[i].id >= numero) {
        numero = lista[i].id + 1;
      }
    }

    const nuevaReceta: Receta = {
      id: numero,
      nombre: nombre,
      ingredientes: ingredientes,
      fecha: new Date().toLocaleDateString()
    };

    agregar(nuevaReceta);

    Alert.alert("Aviso", "Receta agregada correctamente");

    setNombre("");
    setIngrediente1("");
    setIngrediente2("");
    setIngrediente3("");
    setIngrediente4("");
    setIngrediente5("");
  }

  return (
    <ScrollView contentContainerStyle={styles.contenedor}>

      <Text style={styles.titulo}>Agregar Receta</Text>

      <Text>Nombre de la receta</Text>
      <TextInput
        style={styles.entrada}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <Text>Ingredientes</Text>

      <TextInput
        style={styles.entrada}
        placeholder="Ingrediente 1"
        value={ingrediente1}
        onChangeText={setIngrediente1}
      />

      <TextInput
        style={styles.entrada}
        placeholder="Ingrediente 2"
        value={ingrediente2}
        onChangeText={setIngrediente2}
      />

      <TextInput
        style={styles.entrada}
        placeholder="Ingrediente 3"
        value={ingrediente3}
        onChangeText={setIngrediente3}
      />

      <TextInput
        style={styles.entrada}
        placeholder="Ingrediente 4"
        value={ingrediente4}
        onChangeText={setIngrediente4}
      />

      <TextInput
        style={styles.entrada}
        placeholder="Ingrediente 5"
        value={ingrediente5}
        onChangeText={setIngrediente5}
      />

      <Button title="Guardar Receta" onPress={guardar} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    padding: 20
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  entrada: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 15
  }
});