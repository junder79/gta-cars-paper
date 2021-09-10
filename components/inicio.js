import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
function Inicio({ navigation }) {

    return (
        <>
            <ScrollView>
                <Card style={{ borderRadius: 50, marginTop: 10, marginLeft: 8, marginRight: 8, elevation: 10 }} onPress={() => navigation.navigate('ElementoTipo', { tipo: 'Vehículos' })}>
                    <Card.Cover style={{ borderRadius: 50 }} source={{uri:'https://gtavehicles.000webhostapp.com/gta_images_banner/get_banner_images.php?tipo=cars'}} />
                </Card>
                <Card style={{ borderRadius: 50, marginTop: 10, marginLeft: 8, marginRight: 8, elevation: 10 }} onPress={() => navigation.navigate('ElementoTipo', { tipo: 'Aviones' })} >
                    <Card.Cover style={{ borderRadius: 50 }} source={{uri:'https://gtavehicles.000webhostapp.com/gta_images_banner/get_banner_images.php?tipo=aircraft'}} />
                </Card>
                <Card style={{ borderRadius: 50, marginTop: 10, marginLeft: 8, marginRight: 8, elevation: 10 }} onPress={() => navigation.navigate('ElementoTipo', { tipo: 'Botes' })} >
                    <Card.Cover style={{ borderRadius: 50 }} source={{uri:'https://gtavehicles.000webhostapp.com/gta_images_banner/get_banner_images.php?tipo=boats'}} />
                </Card>
                <Card style={{ borderRadius: 50, marginTop: 10, marginLeft: 8, marginRight: 8, elevation: 10 }} onPress={() => navigation.navigate('ElementoTipo', { tipo: 'Motos' })} >
                    <Card.Cover style={{ borderRadius: 50 }} source={{uri:'https://gtavehicles.000webhostapp.com/gta_images_banner/get_banner_images.php?tipo=motorcycles'}} />
                </Card>
                <Card style={{ borderRadius: 50, marginTop: 10, marginLeft: 8, marginRight: 8, elevation: 10 }} onPress={() => navigation.navigate('ElementoTipo', { tipo: 'Helicópteros' })} >
                    <Card.Cover style={{ borderRadius: 50 }} source={{uri:'https://gtavehicles.000webhostapp.com/gta_images_banner/get_banner_images.php?tipo=helicopters'}} />
                </Card>
                <Card style={{ borderRadius: 50, marginTop: 10, marginLeft: 8, marginRight: 8, elevation: 10, marginBottom: 10 }} onPress={() => navigation.navigate('ElementoTipo', { tipo: 'Extraños' })} >
                    <Card.Cover style={{ borderRadius: 50 }} source={{uri:'https://gtavehicles.000webhostapp.com/gta_images_banner/get_banner_images.php?tipo=strange'}} />

                </Card>
            </ScrollView>
        </>
    )
}

export default Inicio;