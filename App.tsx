import { SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, Text } from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Home } from './src/pages/Home';
import { ProductsPage } from './src/pages/ProductsPage';
import { CartPage } from './src/pages/CartPage';


const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const Navigation = () => {

  return (
    <>
    <Drawer.Navigator initialRouteName='Home'>

      <Drawer.Screen name="Home" component={Home} />

      <Drawer.Screen name="Products" component={ProductsPage} />

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
});
