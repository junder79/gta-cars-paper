import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
function Inicio({ navigation }) {

    return (
        <>
            <ScrollView>
                <Card style={{ borderRadius: 50, marginTop: 10, marginLeft: 8, marginRight: 8, elevation: 10 }} onPress={() => navigation.navigate('ElementoTipo', { tipo: 'Vehiculo' })}>
                    <Card.Cover style={{ borderRadius: 50 }} source={require('../src/img/auto.jpg')} />
                </Card>
                <Card style={{ borderRadius: 50, marginTop: 10, marginLeft: 8, marginRight: 8, elevation: 10 }} onPress={() => navigation.navigate('ElementoTipo', { tipo: 'Aviones' })} >
                    <Card.Cover style={{ borderRadius: 50 }} source={require('../src/img/avion.jpg')} />
                </Card>
                <Card style={{ borderRadius: 50, marginTop: 10, marginLeft: 8, marginRight: 8, elevation: 10 }} onPress={() => navigation.navigate('ElementoTipo', { tipo: 'Botes' })} >
                    <Card.Cover style={{ borderRadius: 50 }} source={require('../src/img/bote.jpg')} />
                </Card>
                <Card style={{ borderRadius: 50, marginTop: 10, marginLeft: 8, marginRight: 8, elevation: 10 }} onPress={() => navigation.navigate('ElementoTipo', { tipo: 'Motos' })} >
                    <Card.Cover style={{ borderRadius: 50 }} source={require('../src/img/moto.jpg')} />
                </Card>
                <Card style={{ borderRadius: 50, marginTop: 10, marginLeft: 8, marginRight: 8, elevation: 10, marginBottom: 10 }} onPress={() => navigation.navigate('ElementoTipo', { tipo: 'Extranos' })} >
                    <Card.Cover style={{ borderRadius: 50 }} source={require('../src/img/extrano.jpg')} />

                </Card>
            </ScrollView>
        </>
    )
}

export default Inicio;