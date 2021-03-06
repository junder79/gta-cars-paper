
import React from 'react';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';

// Componentes
import Inicio from './components/inicio';
import Noticias from './components/noticias';
import ElementoTipo from './components/elementoTipo';
import DetalleTipo from './components/detalleTipo';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();


// Funcion de conjuntos de pantallas
function InicioStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Inicio" component={Inicio}/>
      <HomeStack.Screen name="ElementoTipo" component={ElementoTipo} options={({ route }) => ({ headerTitle: route.params.tipo })} />
      <HomeStack.Screen name="DetalleTipo" component={DetalleTipo} options={({ route }) => ({ headerTitle: route.params.nombre })}  />
    </HomeStack.Navigator>
  );
}

export default function App() {




  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Inicio" activeColor="#f0edf6"
          inactiveColor="#000a12" 
          barStyle={{ backgroundColor: '#b71c1c' }}
          >
          <Tab.Screen name="Inicio" component={InicioStackScreen} options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }} />
          <Tab.Screen name="Noticias" component={Noticias} options={{
            tabBarLabel: 'Noticias',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell-alert" color={color} size={26} />
            ),
          }} />

        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

