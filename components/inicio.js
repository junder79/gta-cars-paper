import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
function Inicio({ navigation }) {

    return (
        <>
            <ScrollView>
                <Card style={{ borderRadius: 40, marginTop: 10 }}  onPress={() => navigation.navigate('ElementoTipo',{tipo:'Vehiculo' })}>

                    <Card.Content>
                        <Title>Autos</Title>
                    </Card.Content>
                    <Card.Cover style={{ borderRadius: 50, marginTop: 10 }} source={{ uri: 'https://cdn.mos.cms.futurecdn.net/5LhxxdfQGHYQhc2uHVqjxG-1200-80.jpg' }} />

                </Card>
                <Card style={{ borderRadius: 40, marginTop: 10 }} onPress={() => navigation.navigate('ElementoTipo',{tipo:'Aviones'})} >

                    <Card.Content>
                        <Title>Aviones</Title>
                    </Card.Content>
                    <Card.Cover style={{ borderRadius: 50, marginTop: 10 }} source={{ uri: 'https://assets.gamepur.com/wp-content/uploads/2020/09/23163456/Screenshot_86.jpg' }} />

                </Card>
                <Card style={{ borderRadius: 40, marginTop: 10 }} onPress={() => navigation.navigate('ElementoTipo',{tipo:'Botes'})} >

                    <Card.Content>
                        <Title>Botes</Title>
                    </Card.Content>
                    <Card.Cover style={{ borderRadius: 50, marginTop: 10 }} source={{ uri: 'https://cdn.vox-cdn.com/thumbor/k5TP76weFAWmXlNHFVrfGUR1XWM=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21727335/image006.jpg' }} />

                </Card>
                <Card style={{ borderRadius: 40, marginTop: 10 }} onPress={() => navigation.navigate('ElementoTipo',{tipo:'Motos'})} >

                    <Card.Content>
                        <Title>Motos</Title>
                    </Card.Content>
                    <Card.Cover style={{ borderRadius: 50, marginTop: 10 }} source={{ uri: 'https://gamespot1.cbsistatic.com/uploads/original/1197/11970954/3138323-actual_1475585230.jpg' }} />

                </Card>
                <Card style={{ borderRadius: 40, marginTop: 10 }} onPress={() => navigation.navigate('ElementoTipo',{tipo:'Extranos'})} >

                    <Card.Content>
                        <Title>Extraños</Title>
                    </Card.Content>
                    <Card.Cover style={{ borderRadius: 50, marginTop: 10 }} source={{ uri: 'https://static0.hotcarsimages.com/wordpress/wp-content/uploads/2018/05/VapidClownVan-GTAWiki.png?q=50&fit=crop&w=740&h=416' }} />

                </Card>
            </ScrollView>
        </>
    )
}

export default Inicio;