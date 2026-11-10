import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Pages/Home";
import AgregarReceta from "../Pages/AgregarReceta";
import ListaRecetas from "../Pages/ListaRecetas";
import DetalleReceta from "../Pages/DetalleReceta";

const Tab = createBottomTabNavigator();

export default function NavegacionComponents() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={Home} />
        <Tab.Screen name="Agregar" component={AgregarReceta} />
        <Tab.Screen name="Lista" component={ListaRecetas} />
        <Tab.Screen name="Detalle" component={DetalleReceta} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}