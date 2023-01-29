import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios';
import base64 from 'react-native-base64'
function Inicio({ navigation }) {

    useEffect(()=>{
        getCategory();
    },[])

    const [categories, setCategories] = useState([]);

    const getCategory = async () => {
       try {
        const response = await axios.get('https://los-santos-cars-api.onrender.com/categoria');
        console.log(response.data[0]._id);
       setCategories(response.data);
       } catch (error) {
        console.log("error : ", error);
       }
    }

 
    return (
        <>
            <ScrollView>
                {
                    categories.map((elements)=>(
                        <Card key={elements._id} style={{ borderRadius: 50, marginTop: 10, marginLeft: 8, marginRight: 8, elevation: 10 }} onPress={() => navigation.navigate('ElementoTipo', { tipo: elements.nombre })}>
                        <Card.Cover style={{ borderRadius: 50 }} source={{uri:elements.imagen}} />
                    </Card>
                    ))
                }
            
            </ScrollView>
        </>
    )
}

export default Inicio;