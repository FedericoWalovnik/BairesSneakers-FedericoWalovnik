import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

import ListItems from '../ListItems/ListItems'

import './ItemListContainer.scss'

const ItemListContainer = ({ title }) => {
    const { categoryId } = useParams()

    useEffect(() => {
        console.log('recived category: ', categoryId)
    }, [categoryId]);


    return (
        <div className="ItemListContainer">
            <ListItems categoryId={categoryId} />
        </div>
    )
}

export default ItemListContainer;
