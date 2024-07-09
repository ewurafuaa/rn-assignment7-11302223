import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header({ toggleSidebar }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleSidebar}>
        <Image style={styles.menu} source={require('../assets/Menu.png')} />
      </TouchableOpacity>

      <View>
        <Image style={styles.logo} source={require('../assets/Logo.png')} />
      </View>

      <View style={styles.iconsContainer}>
        <Image style={styles.search} source={require('../assets/Search.png')} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cart')}>
          <Image style={styles.shoppingBag} source={require('../assets/shoppingBag.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
    flexDirection: 'row',
    borderColor: 'black',
    width: '100%',
  },
  menu: {
    width: 30,
    height: 33,
  },
  logo: {
    width: 99,
    height: 40,
    left: 21,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  shoppingBag: {
    width: 30,
    height: 30,
  },
  button: {
    position: 'relative',
  },
});
