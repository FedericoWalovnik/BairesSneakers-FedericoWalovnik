import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import './ItemCount.scss'

const ItemCount = ({ stockAvailable, addToCart }) => {
    const [itemsSelected, setItemsSelected] = useState(0);

    const modifyItemsSelected = (operation) => {
        const newItemsSelected = operation === 'remove' ? itemsSelected - 1 : itemsSelected + 1
        if (newItemsSelected >= 0 && newItemsSelected <= stockAvailable) {
            setItemsSelected(newItemsSelected)
        }
    }

    const handleAddToCart = () => {
        if(itemsSelected > 0){
            addToCart(itemsSelected)
            setItemsSelected(0)
        }
    }

    const isStockAvailable = () => {
        return !stockAvailable > 0
    }

    return (
        <div className="ItemCount">
            <div className="ItemCount__counter">
                <Button className="ItemCount__icon" onClick={() => modifyItemsSelected('remove')}>
                    <FontAwesomeIcon icon={faMinus} />
                </Button>
                <h3>{itemsSelected}</h3>
                <Button className="ItemCount__icon" onClick={() => modifyItemsSelected('add')}>
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </div>
            <Button className="ItemCount__to-cart" variant="contained" onClick={handleAddToCart} disabled={isStockAvailable()}>Add to cart</Button>
        </div>
    )
}

export default ItemCount