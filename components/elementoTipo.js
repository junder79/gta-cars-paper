import React, {useState, useEffect} from 'react';
import {ScrollView, Text, FlatList} from 'react-native';
import {List, Avatar, ProgressBar, Colors, Searchbar} from 'react-native-paper';
import axios from 'axios';
import ErrorMensajeCarga from './errorMensaje';
import filter from 'lodash.filter';
function ElementoTipo({route, navigation}) {
  const [tipo, setTipo] = useState(route.params.tipo);
  useEffect(() => {
    getData(tipo);
  }, []);
  const [dataCars, setDataCars] = useState('');
  const [estadoCarga, setEstadoCarga] = useState(false);
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => {
    setVisible(false);
    navigation.navigate('Inicio');
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const searchFilterFunction = (text) => {
    // Se verifica que haya texto
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.nombre_vehiculo
          ? item.nombre_vehiculo.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const getData = (tipo) => {
    var tipoVehiculo = tipo.toLowerCase();

    // Limpiar tipoVehiculo antes de enviar a la peticion

    if (tipoVehiculo == 'extraños') {
      tipoVehiculo = 'extranos';
    } else if (tipoVehiculo == 'helicópteros') {
      tipoVehiculo = 'helicopteros';
    } else if (tipoVehiculo == 'vehículos') {
      tipoVehiculo = 'vehiculos';
    } else {
      tipoVehiculo;
    }

    var url =
      'https://gtavehicles.000webhostapp.com/rest/public/api/' + tipoVehiculo;

    axios
      .get(url)
      .then((response) => {
        setDataCars(response.data);
        setEstadoCarga(true);
        setFilteredDataSource(response.data);
        setMasterDataSource(response.data);
      })
      .catch((e) => {
        // Podemos mostrar los errores en la consola
        showDialog();

        setEstadoCarga(false);
      });
  };

  return (
    <>
      {!estadoCarga ? (
        <ProgressBar
          progress={0.5}
          color={Colors.red800}
          indeterminate="true"
        />
      ) : null}
      <ErrorMensajeCarga
        visible={visible}
        hideDialog={hideDialog}></ErrorMensajeCarga>
      <Searchbar
        placeholder="Buscar"
        onChangeText={(text) => searchFilterFunction(text)}
        value={search}
      />
      <FlatList
        data={filteredDataSource}
        renderItem={({item}) => (
          <List.Item
            onPress={() =>
              navigation.navigate('DetalleTipo', {
                imagen: item.imagen_vehiculo,
                nombre: item.nombre_vehiculo,
                marca: item.marca,
                resistencia: item.resistencia,
                velocidad: item.velocidad,
                categoria: item.nombre_categoria,
                descripcion: item.descripcion_vehiculo,
              })
            }
            title={item.nombre_vehiculo}
            description={item.marca}
            left={(props) => (
              <Avatar.Image size={44} source={{uri: item.imagen_vehiculo}} />
            )}
          />
        )}
      />
    </>
  );
}

export default ElementoTipo;
