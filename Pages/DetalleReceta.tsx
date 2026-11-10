import { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert
} from "react-native";

import { ContextReceta } from "../Contextos/ContextReceta";
import { Receta } from "../modelos/Receta";

export default function DetalleReceta() {

  const { lista } = useContext(ContextReceta);

  const [numero, setNumero] = useState("");
  const [receta, setReceta] = useState<Receta | null>(null);

  function buscar() {

    if (numero.trim() === "") {
      Alert.alert("Aviso", "Ingrese el numero de la receta");
      return;
    }

    const encontrada = lista.find(
      item => item.id === Number(numero)
    );

    if (encontrada) {
      setReceta(encontrada);
    } else {
      setReceta(null);
      Alert.alert("Aviso", "Receta no encontrada");
    }
  }

  return (
    <View style={styles.contenedor}>

      <Text style={styles.titulo}>Buscar Receta</Text>

      <Text>Numero de receta</Text>

      <TextInput
        style={styles.entrada}
        placeholder="Ingrese el numero"
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
      />

      <Button title="Buscar" onPress={buscar} />

      {receta && (
        <View style={styles.detalle}>

          <Text style={styles.nombre}>
            {receta.nombre}
          </Text>

          <Text>Numero: {receta.id}</Text>

          <Text>Fecha: {receta.fecha}</Text>

          <Text style={styles.subtitulo}>Ingredientes:</Text>

          {receta.ingredientes.map((ingrediente, index) => (
            <Text key={index}>
              {index + 1}. {ingrediente}
            </Text>
          ))}

        </View>
      )}

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
  entrada: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  detalle: {
    marginTop: 25,
    padding: 15,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
  nombre: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
  },
});