// Juan Manuel Bautista Pulido
// Prueba técnica Galaap

import React from 'react';
import { StyleSheet, Text, View, TextInput, Settings } from 'react-native';

const SettingsScreen = () => {
  return (
    <View>
      <Text style={styles.Title}>Juan Manuel Bautista Pulido</Text>
      <Text style ={styles.Parr}>  jbautistapulido@gmail.com</Text>
      <Text style ={styles.Title}>Linked-In:</Text>
      <Text style ={styles.Parr}> https://www.linkedin.com/in/juan-manuel-bautista-pulido-25a596214/</Text>
      <Text style ={styles.Title}>Mis proyectos</Text>
      <Text style ={styles.Parr}>  https://github.com/Bauti567</Text>
    </View>
  );
}


export default SettingsScreen;

const styles = StyleSheet.create({
  Title: {
    fontWeight: '600',
    fontSize: 15,
    
  },
  Parr:{
    fontWeight: '300',
    fontStyle: 'italic'
  }
});