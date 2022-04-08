import React from 'react'
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import './ItemCount.scss'

const ItemCount = ({ itemsSelected, stockAvailable, modifyItemsSelected, addToCart }) => {

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
            {/* <Button className="ItemCount__to-cart" variant="outlined" onClick={addToCart} disabled={isStockAvailable()}>Add to cart</Button> */}
        </div>
    )
}

export default ItemCount