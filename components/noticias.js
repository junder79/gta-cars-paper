import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import axios from 'axios';

const ENTRIES1 = [
  {
    title: 'TEST_1',

    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'TEST_2',

    illustration:
      'https://pbs.twimg.com/media/FPLwIgfWUAEBvmw?format=jpg&name=large',
  },
  {
    title: 'Capitalize on an assortment of Business bonuses all month.e',

    illustration:
      'https://pbs.twimg.com/media/FPvx5SmUYBIu-xB?format=jpg&name=large',
  },
  {
    title: 'TEST_2',

    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'TEST_3',

    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];
const {width: screenWidth} = Dimensions.get('window');

const Noticias = (props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);
  const [elementos, setElementos] = useState('');
  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);
  const getData = () => {
    var url =
      'https://gtavehicles.000webhostapp.com/api-rest/public/index.php/api/helicopteros';
  };
  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default Noticias;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: '100%',
    marginTop: 5,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 10,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    height: '20',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
