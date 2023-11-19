import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
          style={styles.imagem}
          source={require('../Imagens/login.jpeg')}
        />
      </View>
      <Text style={styles.titulo}>Recuperar Senha</Text>
      <Text style={styles.subtitulo}>Recupere para continuar</Text>
      <Text style={styles.titleinput}> Email </Text>
      <TextInput style={styles.input}></TextInput>
      <TouchableOpacity
        onPress={() => navigation.navigate('Lanche')}
        style={{ alignItems: 'center', marginTop: 20, borderRadius: 25 }}>
        <Text style={styles.botao}>Recuperar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: '15%',
    backgroundColor: '#121212',
    flex: 1,
    paddingBottom: '80%',
  },
  imagem: {
    justifyContent: 'center',
    width: '100%',
    height: '80%',
    alignSelf: 'center',
    borderRadius: 15,
  },
  img: {
    padding: '2%',
  },
  titulo: {
    marginLeft: '10%',
    fontSize: 30,
    fontFamily: 'Jost_900Black',
    color: 'white',
  },
  subtitulo: {
    marginLeft: '10%',
    fontSize: 20,
    fontFamily: 'Jost_900Black',
    color: 'grey',
    top: 10,
  },
  input: {
    left: '10%',
    width: '80%',
    fontSize: 18,
    top: '2%',
    borderBottomColor: '#000000',
    borderBottomWidth: 2,
    color: 'white',
  },
  titleinput: {
    marginTop: '10%',
    marginLeft: '10%',
    fontSize: 18,
    fontFamily: 'bold',
    color: 'white',
  },
  botao: {
    fontSize: 20,
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: 'orange',
    width: '70%',
    alignItems: 'center',
    height: 50,
    top: '50%',
    color: 'black',
    padding: '3%',
  },
});
