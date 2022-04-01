import React, { useState, useEffect } from 'react'
import Item from '../Item/Item'

import './ListItems.scss'

const ListItem = () => {
    const mockProducts = [
        {
            id: 0,
            title: "Nike Air Force 1 '07",
            price: 30,
            category: 'Man',
            bestSeller: false,
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/752efdf6-b2b7-47fc-b137-5a70b5dd9423/air-force-1-07-mens-shoes-L3SMQl.png',
            stock: 1
        },
        {
            id: 1,
            title: "Nike Air Max 90 SE",
            price: 30,
            category: 'Man',
            bestSeller: true,
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/274730e5-ff54-4ae4-b71e-9999ab72e06d/air-max-90-se-mens-shoes-knmMzp.png',
            stock: 1
        },
        {
            id: 2,
            title: "Nike Air VaporMax 2021 FK",
            price: 210,
            category: 'Man',
            bestSeller: false,
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9daa7cfe-eb20-48c9-b5bc-14d47f39a458/air-vapormax-2021-fk-mens-shoes-NpTfFz.png',
            stock: 1
        },
        {
            id: 3,
            title: "Nike Air Max 90",
            price: 130,
            category: 'Man',
            bestSeller: false,
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bhwrvokud9flh34cchb8/air-max-90-mens-shoes-6n3vKB.png',
            stock: 1
        },
        {
            id: 4,
            title: "Nike Air VaporMax Plus",
            price: 210,
            category: 'Man',
            bestSeller: false,
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u6w7hqga4172ieosf48b/air-vapormax-plus-mens-shoes-nC0dzF.png',
            stock: 1
        },
        {
            id: 5,
            title: "Nike Air Zoom Pegasus 38 A.I.R. Jordan Moss",
            price: 130,
            category: 'Man',
            bestSeller: false,
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7df0215c-35cf-4fb3-a93e-0a71b8073b3b/air-zoom-pegasus-38-air-jordan-moss-mens-road-running-shoes-lq7PZZ.png',
            stock: 1
        },
        {
            id: 6,
            title: "Nike Pegasus Trail 3 GORE-TEX",
            price: 170,
            category: 'Man',
            bestSeller: true,
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/caa25160-c0bb-439f-97e6-28832414b8a9/pegasus-trail-3-gore-tex-mens-waterproof-trail-running-shoes-HG005k.png',
            stock: 1
        },
        {
            id: 7,
            title: "Nike Blazer Mid '77 Vintage",
            price: 100,
            category: 'Man',
            bestSeller: true,
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/389b709e-5102-4e55-aa5d-07099b500831/blazer-mid-77-vintage-mens-shoes-nw30B2.png',
            stock: 1
        }
        ,
        {
            id: 7,
            title: "Nike Air Max 270",
            price: 160,
            category: 'Man',
            bestSeller: true,
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cc3a56f0-764b-43d3-a0d5-3c33bc2fef3b/air-max-270-mens-shoes-KkLcGR.png',
            stock: 1
        }
    ]

    const loadingItemsPLaceholder = () => {
        const items = []
        for (let i = 0; i < 12; i++) {
            items.push(<Item loading={true} key={i} />);
        }
        return items
    };

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockProducts)
            }, 2000);
        })
        const result = await promise
        return result
    }

    const setMockProducts = async () => {
        try {
            const products = await getProducts()
            setProducts(products)
        } catch {
            console.error('error prossesing the products')
        }
    }

    useEffect(() => {
        setMockProducts()
    }, []);

    return (
        <div className="ListItems">
            {products.length <= 0 &&
                loadingItemsPLaceholder()
            }
            {products.map((product, i) => {
                return (
                    <Item key={i} item={product} />
                )
            })}

        </div>
    )
}

export default ListItem;