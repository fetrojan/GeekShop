import {useFocusEffect} from '@react-navigation/native'
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { useState } from 'react';


export function ProductsPage() {
    const [items, setItems] = useState([])
 
    useFocusEffect(() => {
        axios.get('http://localhost:3000/products')
        .then((response) => {
            setItems(response.data)
        })
        .catch((error) => {
            console.log('Não foi possível obter a lista de produtos', error)
        })
    })
    
    return (
        <></>
    )
}