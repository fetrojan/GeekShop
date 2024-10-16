import { createContext, useContext, useState, ReactNode } from 'react'
import { CartContextType, CartProviderProps, Product } from '../types';


// Criando o contexto com um valor inicial como undefined
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({children}: CartProviderProps) => {
    const [items, setItems] = useState<Product[]>([])

    function getTotalItems() {
        return items.length
    }

    function addItem(item: Product) {
        setItems((prev) => [...prev, item])
    }

    function removeItem(id: number) {
        setItems((prevItems) => prevItems.filter(item => item.id !== id))
    }
    function valorTotal() {
        const total = items.reduce((acc, product) => { return acc + product.price }, 0)
        return total
    }

    function clearCart(){
        setItems([])
    }

    return (
        <CartContext.Provider value={{ items, getTotalItems, addItem, removeItem, valorTotal, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)