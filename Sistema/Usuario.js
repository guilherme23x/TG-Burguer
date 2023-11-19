import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Usuario({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Lanche')}>
        <Ionicons
          name="arrow-back-circle-outline"
          size={50}
          color="white"
          style={styles.perfil}
        />
      </TouchableOpacity>
      <Text style={textStyles.title}> Sobre o usuário </Text>
      <Text style={textStyles.label}> Nome </Text>
      <Text style={textStyles.info}> Guilherme Gomes da Silva </Text>
      <Text style={textStyles.label}> CPF </Text>
      <Text style={textStyles.info}> 1111111111 </Text>
      <Text style={textStyles.label}> Email </Text>
      <Text style={textStyles.info}> fgGWQK3g8848 </Text>
      <Text style={textStyles.label}> Rua </Text>
      <Text style={textStyles.info}> Bá </Text>
      <Text style={textStyles.label}> Bairro </Text>
      <Text style={textStyles.info}> Info </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Editar')}
        style={styles.editButton}>
        <Text style={textStyles.buttonText}> Editar Informações </Text>
      </TouchableOpacity>
    </View>
  );
}

const textStyles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    marginLeft: '10%',
    fontSize: 30,
    fontFamily: 'Jost_900Black',
    marginTop: '20%',
    color: 'white',
  },
  label: {
    marginTop: '10%',
    marginLeft: '10%',
    fontSize: 18,
    fontFamily: 'bold',
    color: 'white',
  },
  info: {
    left: '10%',
    width: '80%',
    fontSize: 18,
    top: '2%',
    borderBottomColor: '#000000',
    borderBottomWidth: 2,
    color: 'grey',
  },
  buttonText: {
    fontSize: 20,
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: '#243835',
    width: '70%',
    alignItems: 'center',
    height: 50,
    color: 'white',
    padding: '3%',
  },
});

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: '#121212',
    flex: 1,
  },
  perfil: {
    top: '60%',
    left: '10%',
  },
  editButton: {
    alignItems: 'center',
    top: 50,
    borderRadius: 30,
  },
});
