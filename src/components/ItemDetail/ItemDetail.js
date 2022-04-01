import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';

import './ItemDetail.scss';


const ItemDetail = ({ details, loading }) => {
    const sizes = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13]

    return (
        <div className="ItemDetail__container">
            {
                !loading ?
                    <div className="ItemDetail">
                        <div className="ItemDetail__gallery">
                            {
                                details.images.map((image, i) => {
                                    return (<img key={i} src={image} alt='' />)
                                })
                            }
                        </div>
                        <div className="ItemDetail__info">
                            {details.sustainable && <p className="ItemDetail__sustainable">Sustainable materials</p>}
                            <h1 className="ItemDetail__title">{details.title}</h1>
                            <p className="ItemDetail__price">${details.price}</p>
                            <div className="ItemDetail__sizes">
                                <p className="ItemDetail__sizes-title">Select your size</p>
                                <div className="ItemDetail__sizes-list">
                                    {
                                        sizes.map((size, i) => {
                                            return (
                                                <div key={i} className="ItemDetail__size">
                                                    {size}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="ItemDetail__actions">
                                <Button variant="contained" className="ItemDetail__button">Add to shopping bag</Button>
                                <Button variant="outlined" className="ItemDetail__button">Add to favorites</Button>
                            </div>
                            <p className="ItemDetail__description">{details.description}</p>
                        </div>
                    </div>
                    :
                    <div className="ItemDetail">
                        <div className="ItemDetail__gallery">
                            <Skeleton variant="rectangular" animation="wave" className="ItemDetail__image-loading" />
                            <Skeleton variant="rectangular" animation="wave" className="ItemDetail__image-loading" />
                            <Skeleton variant="rectangular" animation="wave" className="ItemDetail__image-loading" />
                            <Skeleton variant="rectangular" animation="wave" className="ItemDetail__image-loading" />
                        </div>
                        <div className="ItemDetail__info">
                            <Skeleton variant="text" animation="wave" className="ItemDetail__text-loading" />
                            <Skeleton variant="text" animation="wave" className="ItemDetail__title-loading" />

                            <Skeleton variant="rectangular" animation="wave" className="ItemDetail__size-loading" />

                            <Skeleton variant="rectangular" animation="wave" className="ItemDetail__button-loading" />
                            <Skeleton variant="rectangular" animation="wave" className="ItemDetail__button-loading" />
                        </div>
                    </div>
            }
        </div >
    )
}

export default ItemDetail;