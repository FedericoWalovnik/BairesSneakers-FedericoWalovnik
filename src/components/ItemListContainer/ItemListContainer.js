import React from 'react'
import ListProducts from '../ListProducts/ListProducts'
import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.scss'

const Navbar = ({ title }) => {

    return (
        <div className="ItemListContainer">
            <h2>{title}</h2>
            <ListProducts />
            <ItemCount stockAvailable={2} addToCart={() => console.log('agregado al cart')} />
        </div>
    )
}

export default Navbar;