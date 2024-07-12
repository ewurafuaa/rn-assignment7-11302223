import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useCart } from "../Components/CartContext";
import axios from "axios";
import { useState, useEffect } from "react";

const fetchProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    const products = response.data.map(product => ({
      id: product.id,
      title: product.title,
      description: product.description,
      image: { uri: product.image },
      price: product.price.toString(),
    }));
    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

function ProductCard({ product, showDescription }) {
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
      <View>
        <Image source={product.image} style={styles.image} />
        <TouchableOpacity style={styles.addProduct} onPress={addToCart}>
          <Image style={styles.addButton} source={require('../assets/add_circle.png')} />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{product.title}</Text>
      {showDescription && <Text style={styles.description}>{truncateText(product.description, 50)}</Text>}
      <Text style={styles.price}>{product.price}</Text>
    </TouchableOpacity>
  );
}

export default function Products({ showDescription = false }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((products) => setProducts(products));
  }, []);

  return (
    <View style={styles.container}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} showDescription={showDescription} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  card: {
    width: '45%',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 250,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '300',
    marginVertical: 5,
    textAlign: 'left',
  },
  description: {
    fontSize: 14,
    color: '#737373',
    textAlign: 'left',
    fontWeight: '300',
  },
  price: {
    fontSize: 16,
    fontWeight: '300',
    color: '#D18035',
    marginVertical: 5,
    textAlign: 'left',
  },
  addProduct: {
    position: 'absolute',
    bottom: 20,
    right: 10,
  },
  addButton: {
    width: 30,
    height: 30,
  },
});
