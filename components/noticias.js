import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Linking
} from 'react-native';
import axios from 'axios';
import { Button,Badge } from 'react-native-paper';


const {width: screenWidth} = Dimensions.get('window');

const Noticias = (props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);
  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    getNoticias();
  }, []);


  const getNoticias = async () =>{
   try {
    const response = await axios.get('https://los-santos-cars-api.onrender.com/noticia');
    setEntries(response.data)
   } catch (error) {
    console.log("Error " , error);
   }
  }

  const openBrowser = async (link)=>{
   try {
    const supported = await Linking.canOpenURL(link);
    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(link);
    } else {
      console.log("error ");
    }
   } catch (error) {
    console.log("error ", error);
   }
  }
  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}  >
        <ParallaxImage
       
          source={{uri: item.imagen}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
         
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.titulo}
        </Text>
       {
        item.date_create ?  <Badge style={{marginBottom:10,fontSize:15}}></Badge> : null
       }
        
       
        <Button  mode='outlined'  onPress={()=>{openBrowser (item.link)}}><MaterialCommunityIcons name="arrow-right" color="black" size={50}  /></Button>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'bold',fontSize:35, marginLeft:35}}>Newswire</Text>
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
    height: '95%',
    marginTop: 10,
   
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 3}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 10,

  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    height: '20',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
