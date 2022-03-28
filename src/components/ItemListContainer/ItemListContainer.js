import React from 'react'
import ListItems from '../ListItems/ListItems'
import ItemCount from '../ItemCount/ItemCount'

import './ItemListContainer.scss'

const ItemListContainer = ({ title }) => {
    const addToCart = (num) => {
        console.log('agregado al cart', num)
    }

    return (
        <div className="ItemListContainer">
            <h2 className="ItemListContainer__title">{title}</h2>
            <ListItems />
            <ItemCount stockAvailable={5} addToCart={addToCart} />
        </div>
    )
}

export default ItemListContainer;
