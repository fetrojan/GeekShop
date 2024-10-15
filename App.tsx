import { SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, Text } from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons'

import { Home } from './src/pages/Home';
import { ProductsPage } from './src/pages/ProductsPage';
import { CartPage } from './src/pages/CartPage';

import { CartProvider } from './src/context/CartContext';


const Drawer = createDrawerNavigator()

export default function App() {
  return (
    
      <CartProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </CartProvider>

  );
}

const Navigation = () => {

  return (
    <>
       <Drawer.Navigator
        initialRouteName="Products"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2C2E43',
          },
          headerTintColor: '#F5F5F5', 
          drawerStyle: {
            backgroundColor: '#2C2E43',
          },
          drawerActiveTintColor: '#4CAF50',
          drawerInactiveTintColor: '#F5F5F5',
        }}
      >

      <Drawer.Screen name="Home" component={Home} />

      <Drawer.Screen name="Products" component={ProductsPage} options={{headerRight: () => <Icon name="cart-outline" size={28} color="#F5F5F5" style={styles.cart}/>}}/>

      <Drawer.Screen name="Cart" component={CartPage} />
    </Drawer.Navigator>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cart:{
    marginRight: 10
  }
});
