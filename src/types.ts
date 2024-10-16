import { ReactNode } from "react";

export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
  }

// Definindo a tipagem para o contexto do carrinho
export interface CartContextType {
    items: Product[];
    getTotalItems: () => number;
    addItem: (item: Product) => void;
    removeItem: (id: number) => void;
    valorTotal: () => number;
    clearCart: () => void;
  }

export interface CartProviderProps {
    children: ReactNode;
}

export interface AuthContextType {
  user: boolean
  login: (username: string, password: string) => void;
  logout: () => void
}

export interface AuthProviderProps {
  children: ReactNode;
}