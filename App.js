import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ListasProvider } from './contexto/ListasContexto';
import TelaInicial from './telas/TelaInicial';
import TelaItensLista from './telas/TelaItensLista';
import TelaListasPendentes from './telas/TelaListasPendentes';
import TelaListasConcluidas from './telas/TelaListasConcluidas';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function StackPrincipal() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Listas" component={TelaInicial} />
      <Stack.Screen name="Itens da Lista" component={TelaItensLista} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <ListasProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Minhas Listas" component={StackPrincipal} />
          <Drawer.Screen name="Pendentes" component={TelaListasPendentes} />
          <Drawer.Screen name="Concluídas" component={TelaListasConcluidas} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ListasProvider>
  );
}
