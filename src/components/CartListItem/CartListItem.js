import React from 'react'
import { useCartContext } from "../../context/CartContext"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import './CartListItem.scss'

const CartListItem = ({ item }) => {
    const { removeItem } = useCartContext()

    const deleteItem = () => {
        removeItem(item.id)
    }

    return (
        <div className="CartItemContainer">
            <div className="CartItem">
                <img className="CartItem__image" src={item.image} alt={item.title} />
                <div className="CartItem__info">
                    <p className="CartItem__title">{item.title}</p>
                    <p className="CartItem__data">{item.category}</p>
                    <p className="CartItem__data">Size: 9</p>
                    <p className="CartItem__data">Quantity: {item.quantity}</p>
                    <div className="CartItem__icons">
                        <FontAwesomeIcon icon={faTrash} onClick={deleteItem} />
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                </div>
                <p className="CartItem__price">${item.price * item.quantity}</p>
            </div>
            <span className="CartItem__divider" />
        </div>
    )
}

export default CartListItem;