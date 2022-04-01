import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

import './ItemDetailContainer.scss';


const ItemDetailContainer = () => {
    const mockProduct = {
        id: 1,
        title: "Nike Space Hippie 01",
        price: 130,
        category: 'Man',
        bestSeller: true,
        sustainable: true,
        description: "Space Hippie is a story of recycled waste. The Space Hippie 01 combines a ventilated Space Waste Yarn upper with an ultra-soft Crater Foam midsole for a futuristic look that feels as light as mountain air. Its sleek, athletic-inspired design features an embroidered Swoosh design and a unique lacing system that's produced in less time. Made with at least 50% recycled materials, this shoe seeks to save the world and make your dreams come true.",
        images: ['https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cd3e67d9-d245-4907-958e-4f0667f0ccf9/calzado-space-hippie-01-14Tq8r.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a6724b1c-635d-4b0e-b23c-670607da46cd/calzado-space-hippie-01-14Tq8r.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1af72010-7aef-426d-9d0e-775cc38e0151/calzado-space-hippie-01-14Tq8r.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e235b3d7-c29b-4bd3-a85a-5bdfbb1ae136/calzado-space-hippie-01-14Tq8r.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/cffea8ed-bdcf-4a32-bd23-ddc7cf19ee3c/calzado-space-hippie-01-14Tq8r.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c7801020-ebdc-4890-928f-4f97245761bf/calzado-space-hippie-01-14Tq8r.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a155e4ba-1183-40f7-92c9-666e369b2b33/calzado-space-hippie-01-14Tq8r.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/60e26cc6-dc68-4888-8b3a-186cf576a047/calzado-space-hippie-01-14Tq8r.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8e842037-1e28-45f3-bc99-099d2fcb1e79/calzado-space-hippie-01-14Tq8r.png',
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a0fa9eba-2fd5-4b12-bb26-a4c813618ad1/calzado-space-hippie-01-14Tq8r.png'],
        stock: 1
    }

    const [product, setProduct] = useState([]);

    const getProduct = async () => {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockProduct)
            }, 2000);
        })
        const result = await promise
        return result
    }

    const setMockProducts = async () => {
        try {
            const product = await getProduct()
            setProduct(product)
        } catch {
            console.error('error prossesing the products')
        }
    }

    useEffect(() => {
        setMockProducts()
    }, []);

    return (
        <div className="ItemDetailContainer">
            {product.id ? <ItemDetail details={product} /> : <ItemDetail loading={true} />}
        </div >
    )
}

export default ItemDetailContainer;