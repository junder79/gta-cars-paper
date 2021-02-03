import React, { useState, useEffect } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { List, Avatar, ProgressBar, Colors } from 'react-native-paper';
import axios from 'axios';

function ElementoTipo({ route, navigation }) {
    const [tipo, setTipo] = useState(route.params.tipo);
    useEffect(() => {
        getData(tipo);
    }, []);
    const [dataCars, setDataCars] = useState('');
    const [estadoCarga, setEstadoCarga] = useState(false);
    const getData = (tipo) => {
        var tipo = tipo.toLowerCase();
        axios.get('https://gtavehicles.000webhostapp.com/api/api-autos.php')
            .then(response => {

                setDataCars(response.data);
                setEstadoCarga(true);
            })
            .catch(e => {
                // Podemos mostrar los errores en la consola
                console.log(e);
                setEstadoCarga(false)
            })
    }

    return (
        <>
            {
                !estadoCarga ?
                    <ProgressBar progress={0.5} color={Colors.red800} indeterminate="true" /> : null
            }
            <FlatList data={dataCars}
                renderItem={({ item }) => (
                    <List.Item
                        onPress={() => navigation.navigate('DetalleTipo', { imagen: item.imagen_vehiculo, nombre: item.nombre_vehiculo, marca: item.marca, resistencia: item.resistencia, velocidad: item.velocidad, categoria: item.nombre_categoria, descripcion: item.descripcion_vehiculo })}
                        title={item.nombre_vehiculo}
                        description={item.marca}
                        left={props => <Avatar.Image size={44} source={{ uri: item.imagen_vehiculo }} />}
                    />
                )}
            />
        </>
    )
}

export default ElementoTipo;