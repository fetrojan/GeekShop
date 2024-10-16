import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import {NavigationProp} from '@react-navigation/native'
import { globalStyles } from "../global/styles";

export function Home({navigation}:{navigation:NavigationProp<any>}) {
    
    function navigateToProducts() {
        navigation.navigate('Products')
    }

    function navigateToCart() {
        navigation.navigate('Cart')
    }

    return (
        <View style={globalStyles.containerLog}>
           
            <Image
                source={require('../../assets/logo.png')} 
                style={globalStyles.logo}
            />

            <Text style={globalStyles.title}>Bem-vindo ao GeekShop!</Text>
            <Text style={globalStyles.subtitle}>A melhor loja para geeks</Text>

            <TouchableOpacity style={globalStyles.buttonRow} onPress={() => navigateToCart()}>
                <Icon name="cart-outline" size={24} color="#FFF" />
                <Text style={[globalStyles.buttonText, {marginLeft: 10}]}>Ver Carrinho</Text>
            </TouchableOpacity>

            <TouchableOpacity style={globalStyles.buttonRow} onPress={() => navigateToProducts()}>
                <Icon name="game-controller-outline" size={24} color="#FFF" />
                <Text style={[globalStyles.buttonText, {marginLeft: 10}]}>Ver Produtos</Text>
            </TouchableOpacity>

        </View>
    );
}
