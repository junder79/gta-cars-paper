import React, { useState, useEffect } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { List, Paragraph , Card, DataTable } from 'react-native-paper';
import axios from 'axios';

function DetalleTipo({ route, navigation }) {

    const [imagen, setImagen] = useState(route.params.imagen);
    const [nombre, setNombre] = useState(route.params.nombre);
    const [marca, setMarca] = useState(route.params.marca);
    const [categoria, setCategoria] = useState(route.params.categoria);
    const [velocidad, setVelocidad] = useState(route.params.velocidad);
    const [resistencia, setResistencia] = useState(route.params.resistencia);
    const [descripcion, setDescripcion] = useState(route.params.descripcion);
    // const { marca } = route.params.marca;

    console.log(nombre);

    return (
        <>
            <Card >
                <Card.Cover style={{ borderRadius: 50, marginLeft: 5, marginRight: 5, marginBottom: 5 }} source={{ uri: imagen }} />
                <Paragraph>{descripcion}</Paragraph>
            </Card>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Estadíticas</DataTable.Title>
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
        </>
    )
}

export default DetalleTipo;