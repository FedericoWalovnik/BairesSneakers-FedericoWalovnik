import React from 'react'
import Skeleton from '@mui/material/Skeleton';

import './Item.scss'

const Item = ({ item, loading }) => {

    return (
        <div className="Item">
            {
                !loading ?
                    <span>
                        <img className="Item__image" src={item.image} alt={item.title} />
                        <div className="Item__info">
                            {
                                item.bestSeller && <p className="Item__best-seller">Best Seller</p>
                            }
                            <p className="Item__title">{item.title}</p>
                            <p className="Item__extra">Category {item.category}</p>
                            <p className="Item__extra">{item.colors} Colors</p>
                            <p className="Item__price">${item.price}</p>
                        </div>
                    </span>
                    : <span>
                        <Skeleton variant="rectangular" animation="wave" className="Item__image Item__image-loading" />
                        <Skeleton variant="text" animation="wave" className="Item__text-loading" />
                        <Skeleton variant="text" animation="wave" className="Item__text-loading" />
                    </span>
            }
        </div>
    )
}

export default Item;