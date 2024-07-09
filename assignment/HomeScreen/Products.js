import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useCart } from "../Others/CartContext";
import axios from "axios";
import React, { useState, useEffect } from "react";

const fetchProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

function ProductCard({ product }) {
  const navigation = useNavigation();
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const navigateToDetail = () => {
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <TouchableOpacity onPress={navigateToDetail} style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <TouchableOpacity style={styles.addProduct} onPress={addToCart}>
        <Image style={styles.addButton} source={require('../assets/add_circle.png')}></Image>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <View style={styles.container}>
      {products.map(product => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 33,
    bottom: 4,
  },
  card: {
    width: '45%',
    marginBottom: -40,
    padding: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    right: 20,
  },
  image: {
    width: 180,
    height: 250,
  },
  name: {
    fontSize: 18,
    fontWeight: '300',
    marginVertical: 5,
    textAlign: 'left',
    left: 4,
  },
  description: {
    fontSize: 14,
    color: '#737373',
    textAlign: 'left',
    left: 4,
    bottom: 3,
    fontWeight: '300',
  },
  price: {
    fontSize: 16,
    fontWeight: '300',
    color: '#D18035',
    marginVertical: 5,
    textAlign: 'left',
    left: 4,
    bottom: 5,
  },
  addButton: {
    width: 30,
    height: 30,
    bottom: 132,
    left: 145,
  },
});
