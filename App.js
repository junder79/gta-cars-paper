import React, {useState, useEffect} from 'react';
import {Provider as PaperProvider, Appbar} from 'react-native-paper';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import OneSignal from 'react-native-onesignal'; // Import package from node modules
import axios from 'axios';

// Componentes
import Inicio from './components/inicio';
import Noticias from './components/noticias';
import ElementoTipo from './components/elementoTipo';
import DetalleTipo from './components/detalleTipo';
import Favorite from './components/favorite';
const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();

// Funcion de conjuntos de pantallas
function InicioStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Los Santos Cars" component={Inicio} />
      <HomeStack.Screen
        name="ElementoTipo"
        component={ElementoTipo}
        options={({route}) => ({headerTitle: route.params.tipo})}
      />
      <HomeStack.Screen
        name="DetalleTipo"
        component={DetalleTipo}
        options={({route}) => ({headerTitle: route.params.nombre})}
      />
    </HomeStack.Navigator>
  );
}

export default function App() {
  /* O N E S I G N A L   S E T U P */
  OneSignal.setAppId('a536bcd2-ac09-4800-93bd-c816baaa357e');
  OneSignal.setLogLevel(6, 0);
  OneSignal.setRequiresUserPrivacyConsent(false);
  OneSignal.promptForPushNotificationsWithUserResponse((response) => {
    this.OSLog('Prompt response:', response);
  });

  useEffect(() => {
    getStatusNavbar();
  }, []);

  const [noticias, setNoticias] = useState('');
  const getStatusNavbar = () => {
    console.log('entro a la funcion');
    var url =
      'https://gtavehicles.000webhostapp.com/api-rest/public/index.php/api/noticias';

    axios
      .get(url)
      .then((response) => {
        console.log('datos ' + response.data[0].estadoOpciones);
        setNoticias(response.data[0].estadoOpciones);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Inicio"
          activeColor="#f0edf6"
          inactiveColor="#000a12"
          barStyle={{backgroundColor: '#b71c1c'}}>
          <Tab.Screen
            name="Home"
            component={InicioStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="News"
            component={Noticias}
            options={{
              tabBarLabel: 'News',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons
                  name="bell-alert"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          {noticias != 2 ? (
            <Tab.Screen
              name="Favorite"
              component={Favorite}
              options={{
                tabBarLabel: 'Favorite',
                tabBarIcon: ({color}) => (
                  <MaterialCommunityIcons
                    name="heart"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />
          ) : null}
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
