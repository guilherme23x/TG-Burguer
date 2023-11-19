import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Sistema
import Login from './Sistema/Login';
import Cadastro from './Sistema/Cadastro';
import Senha from './Sistema/Senha';
import Usuario from './Sistema/Usuario';
import Mapa from './Sistema/Mapa';
// Páginas
import Lanche from './Paginas/Lanche';
import Bebidas from './Paginas/Bebidas';
import Porcoes from './Paginas/Porcoes';
import Compras from './Paginas/Compras';
import ComprasBebidas from './Paginas/ComprasBebidas';
import Quantidade from './Paginas/Quantidade';

const Stack = createStackNavigator();

export default function Navagacao() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Sistema */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Quantidade"
          component={Quantidade}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Senha"
          component={Senha}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Usuario"
          component={Usuario}
          options={{ headerShown: false }}
        />
        {/* Páginas */}
        <Stack.Screen
          name="Lanche"
          component={Lanche}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Bebidas"
          component={Bebidas}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Compras"
          component={Compras}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Porcoes"
          component={Porcoes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Mapa"
          component={Mapa}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ComprasBebidas"
          component={ComprasBebidas}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
