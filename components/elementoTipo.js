import React, {useState, useEffect} from 'react';
import {ScrollView, Text, FlatList} from 'react-native';
import {List, Avatar, ProgressBar, Colors, Searchbar} from 'react-native-paper';
import axios from 'axios';
import ErrorMensajeCarga from './errorMensaje';
import filter from 'lodash.filter';
function ElementoTipo({route, navigation}) {
  const [tipo, setTipo] = useState(route.params.tipo);
  useEffect(() => {
    getVehicleSpecific(tipo);
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
        const itemData = item.nombre
          ? item.nombre.toUpperCase()
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


  const getVehicleSpecific = async(tipo) => {
     try {
      const response = await axios.get('https://los-santos-cars-api.onrender.com/categoria/'+tipo);
      setDataCars(response.data);
      setEstadoCarga(true);
      setFilteredDataSource(response.data);
      setMasterDataSource(response.data);
     } catch (error) {
      showDialog();
      setEstadoCarga(false);
      console.log("Error: ", error); 
     }  
  }

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
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <List.Item
            onPress={() =>
              navigation.navigate('DetalleTipo', {
                imagen: item.imagen,
                nombre: item.nombre,
                marca: item.marca,
                resistencia: item.resistencia,
                velocidad: item.velocidad,
                categoria: item.tipoVehiculo,
                descripcion: item.descripcion,
              })
            }
            title={item.nombre}
            description={item.descripcion}
            key={item._id}
            left={(props) => (
              <Avatar.Image size={44} source={{uri: item.imagen}} />
            )}
          />
        )}
      />
    </>
  );
}

export default ElementoTipo;
