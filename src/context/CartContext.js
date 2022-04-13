import { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export function useCartContext() { return useContext(CartContext) };

export const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const modifyCartList = (newValue) => {
        setCartList(newValue);
    }

    function addItem(item) {
        if (isInCart(item.id)) {
            const product = cartList.find((product) => product.id === item.id);
            const { quantity } = product;

            product.quantity = item.quantity + quantity;
            const newCart = [...cartList];
            modifyCartList(newCart);
        } else {
            modifyCartList([...cartList, item])
        }
    }

    const removeItem = (itemId) => {
        modifyCartList(cartList.filter(product => product.id !== itemId));
    }

    function emptyCart() {
        modifyCartList([]);
    }

    const isInCart = (itemId) => {
        return cartList.some(product => product.id === itemId)
    }

    const totalPrice = () => {
        return cartList.reduce((acum, item) => acum = acum + (item.price * item.quantity), 0)
    }

    const countItemsInCart = () => {
        return cartList.length
    }

    return <CartContext.Provider value={{
        cartList,
        addItem,
        emptyCart,
        removeItem,
        totalPrice,
        countItemsInCart
    }}>
        {children}
    </CartContext.Provider>
}
