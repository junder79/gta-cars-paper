import React, { useState, useEffect } from 'react';
import { ScrollView, View, FlatList, StyleSheet } from 'react-native';
import { List, Paragraph, Card, DataTable } from 'react-native-paper';
import axios from 'axios';

function DetalleTipo({ route, navigation }) {

    const [imagen, setImagen] = useState(route.params.imagen);
    const [nombre, setNombre] = useState(route.params.nombre);
    const [marca, setMarca] = useState(route.params.marca);
    const [categoria, setCategoria] = useState(route.params.categoria);
    const [velocidad, setVelocidad] = useState(route.params.velocidad);
    const [resistencia, setResistencia] = useState(route.params.resistencia);
    const [descripcion, setDescripcion] = useState(route.params.descripcion);


    return (
        <>
            <View style={styles.contenedor}>
                <ScrollView>
                    <Card style={{ borderRadius: 50, marginLeft: 8, marginRight: 8, elevation: 10, backgroundColor: '#9b0000' }} >
                        <Card.Cover style={{ borderRadius: 50 }} source={{ uri: imagen }} />

                        <Card.Content>

                            <Paragraph style={{color:'white',marginTop:10}}>{descripcion}</Paragraph>
                        </Card.Content>
                    </Card>
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Estadísticas</DataTable.Title>
                            <DataTable.Title numeric></DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row>
                            <DataTable.Cell>Marca</DataTable.Cell>
                            <DataTable.Cell numeric>{marca}</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell>Tipo Vehículo</DataTable.Cell>
                            <DataTable.Cell numeric>{categoria}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Velocidad</DataTable.Cell>
                            <DataTable.Cell numeric>{velocidad}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Resistencia</DataTable.Cell>
                            <DataTable.Cell numeric>{resistencia}</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                </ScrollView>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: '2.5%',
        backgroundColor: "#f1f1f1"
    },
})

export default DetalleTipo;