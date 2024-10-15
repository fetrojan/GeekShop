import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

export function Home() {
    return (
        <View style={styles.container}>
           
            <Image
                source={require('../../assets/logo.png')} 
                style={styles.logo}
            />

            <Text style={styles.title}>Bem-vindo ao GeekShop!</Text>
            <Text style={styles.subtitle}>A melhor loja para geeks</Text>

            <TouchableOpacity style={styles.button}>
                <Icon name="cart-outline" size={24} color="#FFF" />
                <Text style={styles.buttonText}>Ver Carrinho</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Icon name="game-controller-outline" size={24} color="#FFF" />
                <Text style={styles.buttonText}>Ver Produtos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Icon name="person-circle-outline" size={24} color="#FFF" />
                <Text style={styles.buttonText}>Minha Conta</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E1E2C',
        padding: 20,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
        borderRadius: 75,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        color: '#CCC',
        marginBottom: 30,
        textAlign: 'center',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 10,
        marginVertical: 10,
        width: '80%',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        marginLeft: 10,
    },
});
