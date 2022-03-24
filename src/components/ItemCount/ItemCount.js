import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import './ItemCount.scss'

const ItemCount = ({ stockAvailable, addToCart }) => {
    const [itemsSelected, setItemsSelected] = useState(0);

    const modifyItemsSelected = (operation) => {
        const newItemsSelected = operation === 'remove' ? itemsSelected - 1 : itemsSelected + 1
        if (newItemsSelected >= 0) {
            setItemsSelected(newItemsSelected)
        }
    }

    const handleAddToCart = () => {
        if (itemsSelected <= stockAvailable && itemsSelected > 0) {
            addToCart()
        } else {
            console.warn('There are not enough products to add to the cart!')
        }
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
            <Button className="ItemCount__to-cart" variant="contained" onClick={handleAddToCart}>Add to cart</Button>
        </div>
    )
}

export default ItemCount