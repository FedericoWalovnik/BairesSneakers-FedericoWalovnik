import React from 'react'
import ListProducts from '../ListProducts/ListProducts'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({ title }) => {
    const addToCart = (num) => {
        console.log('agregado al cart', num)
    }

    return (
        <div className="ItemListContainer">
            <h2>{title}</h2>
            {/* <ListProducts /> */}
            <ItemCount stockAvailable={5} addToCart={addToCart} />
        </div>
    )
}

export default ItemListContainer;
