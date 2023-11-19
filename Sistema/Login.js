import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.imagem} source={require('../Imagens/login.jpeg')} />
      <Text style={styles.titulo}>Bem - Vindo(a)!</Text>
      <Text style={styles.subtitulo}>Logue para continuar</Text>
      <Text style={styles.titleinput}>Email</Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.titleinput}>Senha</Text>
      <TextInput style={styles.input}></TextInput>
      <TouchableOpacity
        onPress={() => navigation.navigate('Lanche')}
        style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Cadastro')}
        style={[styles.button, { backgroundColor: 'orange' }]}>
        <Text style={[styles.buttonText, { color: 'black' }]}>Cadastrar-se</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Senha')}>
        <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: '20%',
    backgroundColor: '#121212',
    flex: 1,
  },
  imagem: {
    width: '100%',
    height: windowHeight * 0.3,
    alignSelf: 'center',
    borderRadius: 15,
  },
  titulo: {
    marginLeft: '10%',
    fontSize: windowWidth * 0.07,
    fontFamily: 'Jost_900Black',
    color: 'white',
    marginTop: windowHeight * 0.02,
  },
  subtitulo: {
    marginLeft: '10%',
    fontSize: windowWidth * 0.05,
    fontFamily: 'Jost_900Black',
    color: 'grey',
    marginTop: 5,
  },
  input: {
    left: '10%',
    width: '80%',
    fontSize: windowWidth * 0.05,
    color: 'white',
    borderBottomColor: '#000000',
    borderBottomWidth: 2,
    marginTop: 5,
  },
  titleinput: {
    marginLeft: '10%',
    fontSize: windowWidth * 0.04,
    fontFamily: 'bold',
    color: 'white',
    marginTop: windowHeight * 0.03,
  },
  button: {
    alignItems: 'center',
    marginTop: windowHeight * 0.05,
    borderRadius: 25,
    backgroundColor: 'black',
    width: '70%',
    alignSelf: 'center',
    height: 50,
    justifyContent: 'center',
    padding: '3%',
  },
  buttonText: {
    fontSize: windowWidth * 0.05,
    color: 'white',
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: windowHeight * 0.03,
    fontSize: windowWidth * 0.05,
    fontFamily: 'bold',
    color: 'grey',
  },
});
