import { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Alert,
  StyleSheet
} from "react-native";
import { useNavigation, NavigationProp, ParamListBase } from "@react-navigation/native";
import { ContextReceta } from "../Contextos/ContextReceta";

export default function ListaRecetas() {

  const { lista, eliminar, seleccionarReceta } = useContext(ContextReceta);
  const [numero, setNumero] = useState("");

  const navegacion = useNavigation<NavigationProp<ParamListBase>>();

  function buscar() {

    let encontrada = false;

    for (let i = 0; i < lista.length; i++) {
      if (lista[i].id === Number(numero) && numero.trim() !== "") {
        seleccionarReceta(lista[i]);
        encontrada = true;
      }
    }

    if (encontrada) {
      navegacion.navigate("Detalle");
      setNumero("");
    } else {
      Alert.alert("Aviso", "No se encontró la receta");
    }
  }

  function borrar(id: number) {
    eliminar(id);
    Alert.alert("Aviso", "Receta eliminada");
  }

  return (
    <View style={styles.contenedor}>

      <Text style={styles.titulo}>Lista de Recetas</Text>

      <Text>Ingrese el número de la receta</Text>

      <TextInput
        style={styles.entrada}
        placeholder="Número de receta"
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
      />

      <Button title="Buscar Receta" onPress={buscar} />

      {lista.length === 0 && (
        <Text style={styles.texto}>No hay recetas registradas</Text>
      )}

      <FlatList
        style={styles.lista}
        data={lista}
        keyExtractor={(item) => item.id.toString()}
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
    marginTop: 10,
    marginBottom: 10
  },
  lista: {
    marginTop: 20
  },
  receta: {
    padding: 15,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },
  texto: {
    marginTop: 20
  }
});