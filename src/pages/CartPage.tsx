import { Image, Text, TouchableOpacity, View } from "react-native"
import { globalStyles } from "../global/styles"
import { useCart } from "../context/CartContext"
import { ScrollView } from "react-native-gesture-handler"

export function CartPage() {

    const { items, removeItem, getTotalItems, valorTotal} = useCart()

    const renderProduct = (item) => {
        return <View style={globalStyles.card}>
                <Image source={{ uri: item.image }} style={globalStyles.cardImage} />
                <Text style={globalStyles.cardTitle}>{item.name}</Text>
                <Text style={globalStyles.cardPrice}>R$ {item.price.toFixed(2)}</Text>
                <TouchableOpacity style={globalStyles.buttonRemove} onPress={() => removeItem(item.id)}>
                    <Text style={globalStyles.buttonText}>Remove</Text>
                </TouchableOpacity>
            </View>
    }

    return (
        <ScrollView style={globalStyles.container}>
            {getTotalItems() === 0 && <Text style={globalStyles.buttonText}>Não existem itens no carrinho</Text>}
            {items.map(item => {
                return renderProduct(item)
            })}
            <Text style={globalStyles.buttonText}>Valor Total: {valorTotal()}</Text>
            
        </ScrollView>
    )
}