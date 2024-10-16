import {useFocusEffect} from '@react-navigation/native'
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { useCallback, useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native'
import { Product } from '../types';
import { globalStyles } from '../global/styles';


export function ProductsPage() {
    const { addItem } = useCart()
    const [items, setItems] = useState<Product[]>([])
 
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleSearch = (query) => {
      setSearchQuery(query)
      if(query) {
        const filteredData = items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
        setFilteredProducts(filteredData)
      } else {
        setFilteredProducts(items)
      }
    }

    useFocusEffect(
        useCallback(() => {
          axios.get('http://192.168.1.150:3000/products')
            .then((response) => {
              setItems(response.data)
              setFilteredProducts(response.data)
            })
            .catch((error) => {
              console.log('Não foi possível obter a lista de produtos', error)
            });
        }, [])
      );

    function handleAddCart(item) {
        addItem(item)
        alert(`${item.name} adicionado ao carrinho!`)
    }
    
    return (
        <SafeAreaView style={globalStyles.container}>

            <TextInput style={[globalStyles.input, {marginTop: 20, alignSelf:'center'}]} placeholder='Buscar produto...' value={searchQuery} onChangeText={handleSearch}/>

            <FlatList
            data={filteredProducts}
            renderItem={({item}) => (
                <View style={globalStyles.card}>
                     <Image source={{ uri: item.image }} style={globalStyles.cardImage} />
                    <Text style={globalStyles.cardTitle}>{item.name}</Text>
                    <Text style={globalStyles.cardPrice}>R$ {item.price.toFixed(2)}</Text>
                    <TouchableOpacity style={globalStyles.button} onPress={() => handleAddCart(item)}>
                        <Text style={globalStyles.buttonText}>Add to Cart</Text>
                    </TouchableOpacity>

                </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    )
}
