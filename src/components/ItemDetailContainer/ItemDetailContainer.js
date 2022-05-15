import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

import { doc, getDoc, getFirestore } from 'firebase/firestore'

import ItemDetail from '../ItemDetail/ItemDetail';

import './ItemDetailContainer.scss';


const ItemDetailContainer = () => {
    const navigate = useNavigate();
    const { productId } = useParams()
    const [product, setProduct] = useState([]);

    const getProduct = async () => {
        const db = getFirestore()

        const itemsRef = doc(db, "ItemsList", productId)
        const itemRequest = await getDoc(itemsRef)
        const result = itemRequest.exists() ? itemRequest.data() : ''

        return result
    }

    const setProducts = async () => {
        try {
            const product = await getProduct()
            !product ? navigate("/notFound") : setProduct(product)
        } catch {
            console.error('error prossesing the products')
        }
    }

    useEffect(() => {
        setProducts()
    }, []);

    return (
        <div className="ItemDetailContainer">
            {product.image ? <ItemDetail details={{ id: productId, ...product }} /> : <ItemDetail loading={true} />}
        </div >
    )
}

export default ItemDetailContainer;