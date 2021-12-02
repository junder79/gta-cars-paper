import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  ProgressBar,
  Colors,
} from 'react-native-paper';
import axios from 'axios';
import globalEstilos from '../styles/estilos';
function Noticias() {
  useEffect(() => {
    getNovedades();
  }, []);

  const LeftContent = (props) => <Avatar.Icon {...props} icon="bell-alert" />;
  const [dataNovedades, setDataNovedades] = useState('');
  const [estadoCarga, setEstadoCarga] = useState(false);
  const getNovedades = () => {
    axios
      .get(
        'https://gtavehicles.000webhostapp.com/rest/public/api/notificaciones',
      )
      .then((response) => {
        setDataNovedades(response.data);
        setEstadoCarga(true);
      })
      .catch((e) => {
        // Podemos mostrar los errores en la consola

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
      <View>
        <FlatList
          data={dataNovedades}
          renderItem={({item}) => (
            <Card style={globalEstilos.contenedorNoticias}>
              <Card.Title title="Novedades" left={LeftContent} />

              <Card.Cover source={{uri: item.imagen_url}} />
              <Card.Content>
                <Title>{item.mensaje}</Title>
                <Paragraph>{item.descripcion}</Paragraph>
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </>
  );
}

export default Noticias;
