// Juan Manuel Bautista Pulido
// Prueba técnica Galaap

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchDataFromApis();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: "Buscar usuario",
        onChangeText: (text) => {
          searchFilterFunction(text);
        },
      }
    });
  }, [navigation]);

  const fetchDataFromApis = async () => {

      try {
        const response = await fetch("https://galapplist.free.beeceptor.com");
        if (!response.ok) {
          throw new Error("Error en la respuesta de la API");
        }
        const data = await response.json();
        setData(data);
        setFilteredData(data);
      } catch (error) {
        console.log("Error al obtener datos:", error.message);
      }
};
  

  const fetchData = async () => {
    try {
      const response = await axios.get(
        ' https://639c781616d1763ab14ae929.mockapi.io/test/front-end/lista'
      );
      if (response.status === 200) {
        // Verificar que la respuesta tenga un estado exitoso (200)
        try {
          const jsonData = JSON.parse(response.data);
          setData(jsonData);
          setFilteredData(jsonData);
        } catch (error) {
          console.log('Error al analizar JSON:', error);
        }
      } else {
        console.log('Error en la respuesta de la API:', response.status);
      }
    } catch (error) {
      console.log('Error al obtener los datos:', error);
    }
  };
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = data.filter(item => {
        const itemData = item.nombre ? item.nombre.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <ScrollView>
      <Text style={styles.textFriends}>Dentro de este panel verás la info de tus usuarios!</Text>
      <Text style={styles.Parrafo}>What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
      scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ips
      </Text>
      {
        filteredData.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <View>
              <Text style={styles.textName}>{item.nombre} {item.apellido}</Text>
            </View>
          </View>
        ))
      }
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  textFriends: {
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 10,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  Parrafo: {
    fontWeight: '300',
    padding: 20,
    
  },  
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
  textName: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: "600",
  },
});