import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Certifique-se de ter o pacote de ícones instalado

const windowHeight = Dimensions.get('window').height;

const ProductScreen = ({ navigation }) => {
  const [quantity, setQuantity] = useState(1);
  const productName = 'Clássico Americano';
  const ingredients =
    '180g de carne bovina, Pão de hambúrguer com gergelim, Alface, tomate e cebola, Queijo cheddar, Molho';
  const price = '$25,00';

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuyButtonPress = () => {
    // Lógica para processar a compra
    console.log('Compra realizada!');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../Imagens/bu.jpg')}
        style={styles.productImage}
      />
      <View style={styles.productImageContainer}>
        <Text style={styles.quantity}>Quantidade</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={handleDecreaseQuantity}>
            <AntDesign name="caretleft" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={handleIncreaseQuantity}>
            <AntDesign name="caretright" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.productInfoContainer}>
        <Text style={styles.productName}>{productName}</Text>
        <Text style={styles.ingredients}>{ingredients}</Text>
        <View style={styles.priceAndButtonContainer}>
          <Text style={styles.price}>{price}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Lanche')}>
            <Text style={styles.adicionar}>Adicionar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Compra')}
          style={styles.botaocompra}>
          <Text style={styles.botaotexto}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 5,
  },
  productImageContainer: {
    width: '80%',
    height: '10%',
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#303030',
    marginBottom: 20,
  },
  productImage: {
    width: '100%',
    height: windowHeight * 0.3,
    alignSelf: 'center',
    borderRadius: 15,
    bottom: '2%',
  },
  productInfoContainer: {
    borderRadius: 20,
    width: '100%',
    height: '45%',
    top: 20,
    padding: 20,
  },
  productName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'white',
  },
  ingredients: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
    color: 'white',
  },
  priceAndButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 15,
    color: 'white',
  },
  botaocompra: {
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    textAlign: 'center',
    top: '5%'
  },
  botaotexto: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  adicionar: {
    fontSize: 25,
    color: 'white',
    borderBottomWidth: 5,
  },
});

export default ProductScreen;
