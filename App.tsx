import { SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, Text, View } from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons'

import { Home } from './src/pages/Home';
import { ProductsPage } from './src/pages/ProductsPage';
import { CartPage } from './src/pages/CartPage';

import { CartProvider, useCart } from './src/context/CartContext';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import { Login } from './src/pages/Login';


const Drawer = createDrawerNavigator()

export default function App() {
  return (
    
      <AuthProvider>
        <CartProvider>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </CartProvider>
      </AuthProvider>

  );
}

const Navigation = () => {

  const { user } = useAuth()

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

      <Drawer.Screen name="Home" component={Home} options={{headerRight: () => <View style={styles.row}><Icon name="person-circle-outline" size={28} color="#F5F5F5" style={styles.cart}/>{user ? <Text style={styles.headerText}>Logout</Text> : <Text style={styles.headerText}>Login</Text>}</View>}}/>

      <Drawer.Screen name="Products" component={ProductsPage} options={{headerRight: () => <CartIconWithNavigation/>}}/>

      <Drawer.Screen name="Cart" component={CartPage} />
    </Drawer.Navigator> 
    </>
  )
}

const CartIconWithNavigation = () => {
  const navigation = useNavigation()
  const { getTotalItems } = useCart()

  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => navigation.navigate('Cart')}
    >
      <Icon name="cart-outline" size={24} color="#F5F5F5"/>
      <Text style={styles.cartCount}>{getTotalItems()}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cart:{
    marginRight: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20
  },
  headerText: {
    color: '#F5F5F5'
  },
  cartCount: {
    marginLeft: 4,
    fontSize: 16,
    color: '#F5F5F5',
    fontWeight: 'bold',
  },
});
