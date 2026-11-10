import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Mis Recetas</Text>
      <Text style={styles.texto}>
        Bienvenido a mi recetario
      </Text>
      <Text style={styles.texto}>
        Aqui puedes agregar y consultar tus recetas
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
  },
  texto: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
});