import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const Compras = ({ route, navigation }) => {
  const { lanche } = route.params;

  return (
    <ImageBackground
      source={lanche.image} // Use the same image as the background
      style={styles.backgroundImage}
      blurRadius={5} // Adjust the blur radius as needed
    >
      <View style={styles.container}>
        <View style={styles.card}>
          {/* Your existing content */}
          <Image source={lanche.image} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.title}>{lanche.title}</Text>
            <View style={styles.ingredientsContainer}>
              <Text style={styles.ingredients}>{lanche.ingredients}</Text>
            </View>
            <Text style={styles.price}>Preço: R{lanche.price}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            // Adicione aqui a lógica para finalizar a compra
            // Por exemplo, você pode exibir uma mensagem de sucesso
            alert('Compra finalizada com sucesso!');
            // E depois redirecionar o usuário para a página de lista de produtos
            navigation.navigate('Lanche');
          }}
          style={styles.finalizeButton}
        >
          <Text style={styles.finalizeButtonText}>Finalizar Compra</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    marginBottom: 10,
    padding: 20,
    marginTop: '30%'
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  details: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  ingredientsContainer: {
    backgroundColor: '#444',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
  },
  ingredients: {
    fontSize: 16,
    color: '#FFF',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 10,
  },
  finalizeButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
  },
  finalizeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Compras;
