import { Image, Text, TouchableOpacity, View } from "react-native"
import { globalStyles } from "../global/styles"
import { useCart } from "../context/CartContext"
import { ScrollView } from "react-native-gesture-handler"

export function CartPage() {

    const { items, removeItem, getTotalItems, valorTotal} = useCart()

    const renderProduct = (item) => {
        return <View style={globalStyles.cartContainer} key={item.id}>
                <Image source={{ uri: item.image }} style={globalStyles.cartImage} />
                <View style={globalStyles.cartDetails}>
                    <Text style={globalStyles.cardTitle}>{item.name}</Text>
                    <Text style={globalStyles.cardPrice}>R$ {item.price.toFixed(2)}</Text>
                </View>
                <TouchableOpacity style={globalStyles.buttonRemove} onPress={() => removeItem(item.id)}>
                    <Text style={globalStyles.buttonText}>Remove</Text>
                </TouchableOpacity>
            </View>
    }

    return (
        <View style={globalStyles.containerCart}>

            <ScrollView style={globalStyles.scrollContainer}>
                {getTotalItems() === 0 && <Text style={globalStyles.subtitle}>Não existem itens no carrinho</Text>}
                {items.map(item => {
                    return renderProduct(item)
                })}
            </ScrollView>
            <View style={globalStyles.footer}>
                <Text style={[globalStyles.buttonText, {marginBottom:10}]}>Total a Pagar: {valorTotal()}</Text>
                <TouchableOpacity style={globalStyles.checkoutButton}>
                    <Text style={globalStyles.checkoutText}>Finalizar Compra</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}