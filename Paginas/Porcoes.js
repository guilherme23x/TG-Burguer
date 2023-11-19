import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  StyleSheet,
  TextInput,
} from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import porcoesData from './PorcoesData'; // Importe os dados dos lanches

const windowWidth = Dimensions.get('window').width;

const Porcoes = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Usuario')}>
          <FontAwesome5 name="bars" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.appName}>SP Burger</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Mapa')}>
          <Ionicons name="location" size={35} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBar}>
        <FontAwesome5
          style={styles.searchIcon}
          name="search"
          size={20}
          color="#fff"
        />
        <TextInput
          placeholder="Pesquisar"
          placeholderTextColor="#fff"
          style={styles.searchInput}
        />
      </View>
      <FlatList
        data={porcoesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('ComprasBebidas', { bebidas: item })}
                style={styles.buyButton}>
                <Text style={styles.buyButtonText}>Comprar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <View style={styles.categoryButtons}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Lanche')}
          style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Lanche</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Bebidas')}
          style={[styles.categoryButton, styles.activeCategoryButton]}>
          <Text style={styles.categoryButtonText}>Bebidas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Porcoes')}
          style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Porções</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 20,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: windowWidth * 0.05,
    paddingVertical: windowWidth * 0.08,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    flex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    marginHorizontal: windowWidth * 0.05,
    marginVertical: windowWidth * 0.02,
    padding: windowWidth * 0.03,
  },
  searchIcon: {
    marginRight: 10,
    fontSize: 20,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
  },
  itemContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    padding: windowWidth * 0.04,
    marginBottom: windowWidth * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    borderRadius: 10,
    marginRight: windowWidth * 0.03,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  itemIngredients: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 8,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 8,
  },
  buyButton: {
    alignSelf: 'flex-end',
    marginTop: 8,
    backgroundColor: '#FF6347',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  categoryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.05,
    marginBottom: windowWidth * 0.08,
  },
  categoryButton: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
  activeCategoryButton: {
    backgroundColor: 'black',
  },
  categoryButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Porcoes;
