import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Carousel from 'react-native-snap-carousel';
function favorite() {
  useEffect(() => {
    getNovedades();
  }, []);
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
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('favoritos');
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };
  const SECTIONS = [
    {
      title: 'Newswhhire',
      horizontal: true,
      data: [
        {
          key: '1',
          text: 'Item text 1',
          uri: 'https://picsum.photos/id/1/200',
        },
        {
          key: '2',
          text: 'Item text 2',
          uri: 'https://picsum.photos/id/10/200',
        },

        {
          key: '3',
          text: 'Item text 3',
          uri: 'https://picsum.photos/id/1002/200',
        },
        {
          key: '4',
          text: 'Item text 4',
          uri: 'https://picsum.photos/id/1006/200',
        },
        {
          key: '5',
          text: 'Item text 5',
          uri: 'https://picsum.photos/id/1008/200',
        },
      ],
    },
  ];

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const ListItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Image
          source={{
            uri: item.uri,
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
        />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        {/* <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <Item title={item} />}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        /> */}
        {/*   <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={}
          renderItem={({item}) => <Item title={item} />}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        /> */}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 24,
  },
  itemPhoto: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
  },
});
export default favorite;
