import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Item from '../Item/Item'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

import './ListItems.scss'

const ListItem = ({ categoryId }) => {
    const mockProducts = {
        men: {
            title: "Men's shoes",
            items: [
                {
                    id: 0,
                    title: "Nike Air Force 1 '07",
                    price: 130,
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
                },
                {
                    id: 8,
                    title: "Nike Air Max 270",
                    price: 160,
                    category: 'Man',
                    bestSeller: true,
                    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cc3a56f0-764b-43d3-a0d5-3c33bc2fef3b/air-max-270-mens-shoes-KkLcGR.png',
                    stock: 1
                }
            ],
        },
        women: {
            title: "Women's shoes",
            items: [
                {
                    id: 0,
                    title: "Nike Air Force 1 '07",
                    price: 100,
                    category: 'Women',
                    bestSeller: false,
                    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/28862ef5-d0f9-488c-9d37-702cd834ea2f/air-force-1-07-womens-shoes-GCkPzr.png',
                    stock: 1
                },
                {
                    id: 1,
                    title: "Nike Blazer Mid '77 Vintage",
                    price: 100,
                    category: 'Women',
                    bestSeller: true,
                    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3bdcf8a1-b301-4444-8dfd-92601bbf42ac/blazer-mid-77-vintage-womens-shoes-25h71W.png',
                    stock: 1
                },
                {
                    id: 2,
                    title: "Nike Air Max 90",
                    price: 130,
                    category: 'Women',
                    bestSeller: false,
                    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f290a47-4b76-4a10-865c-49d4cec0a7af/air-max-90-womens-shoes-g5nqKN.png',
                    stock: 1
                },
                {
                    id: 3,
                    title: "Nike Air Max 97",
                    price: 175,
                    category: 'Women',
                    bestSeller: false,
                    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b0cbe8ce-64f3-43ed-86b9-a18edfbecc6f/air-max-97-womens-shoe-Fr6rM4.png',
                    stock: 1
                },
                {
                    id: 4,
                    title: "Nike Air Zoom Zoom Pegasus 38",
                    price: 120,
                    category: 'Women',
                    bestSeller: true,
                    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c21744d4-7cc5-43c8-b03a-df0d9687684e/air-zoom-pegasus-38-womens-road-running-shoes-gg8GBK.png',
                    stock: 1
                },
                {
                    id: 5,
                    title: "Nike ZoomX Invencible Run Flyknit",
                    price: 180,
                    category: 'Women',
                    bestSeller: true,
                    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/03dd4545-cc8f-4037-9dec-46009c32af3c/zoomx-invincible-run-flyknit-womens-road-running-shoes-kVqSJ8.png',
                    stock: 1
                },
                {
                    id: 6,
                    title: "Nike Air Max Dawn",
                    price: 100,
                    category: 'Women',
                    bestSeller: true,
                    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cde5f1ef-4af6-4576-8ab7-7c6285be048d/air-max-dawn-womens-shoes-224mWf.png',
                    stock: 1
                },
                {
                    id: 7,
                    title: "Nike Air Max 270",
                    price: 170,
                    category: 'Women',
                    bestSeller: true,
                    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d088b1ce-36dd-4307-aa26-7cad6471ae6b/air-max-270-womens-shoes-Pgb94t.png',
                    stock: 1
                }
            ]
        },
        sale: {
            title: "Sale shoes",
            items: [
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
                },
                {
                    id: 8,
                    title: "Nike Air Max 270",
                    price: 160,
                    category: 'Man',
                    bestSeller: true,
                    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cc3a56f0-764b-43d3-a0d5-3c33bc2fef3b/air-max-270-mens-shoes-KkLcGR.png',
                    stock: 1
                }
            ]
        },
        new: {
            title: "New entries",
            items: [
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
                },
                {
                    id: 8,
                    title: "Nike Air Max 270",
                    price: 160,
                    category: 'Man',
                    bestSeller: true,
                    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cc3a56f0-764b-43d3-a0d5-3c33bc2fef3b/air-max-270-mens-shoes-KkLcGR.png',
                    stock: 1
                }
            ]
        },
        kids: {
            title: "Kids shoes",
            items: [
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
                },
                {
                    id: 8,
                    title: "Nike Air Max 270",
                    price: 160,
                    category: 'Man',
                    bestSeller: true,
                    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cc3a56f0-764b-43d3-a0d5-3c33bc2fef3b/air-max-270-mens-shoes-KkLcGR.png',
                    stock: 1
                }
            ]
        }
    }

    const loadingItemsPLaceholder = () => {
        const items = []
        for (let i = 0; i < 12; i++) {
            items.push(<Item loading={true} key={i} />);
        }
        return items
    };

    const [products, setProducts] = useState([]);
    const [categoryTitle, setCategoryTitle] = useState([]);


    const getProducts = async () => {
        const db = getFirestore()
        const itemsCollection = query(collection(db, "ItemsList"), where('category', '==', categoryId))

        const productsRequest = await getDocs(itemsCollection)
        const products = productsRequest.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

        return products
    }

    const setMockProducts = async () => {
        try {
            setCategoryTitle(categoryId)
            const products = await getProducts()
            setProducts(products)
        } catch {
            console.error('error prossesing the products')
        }
    }

    useEffect(() => {
        setProducts([])
        setMockProducts()
    }, [categoryId]);

    return (
        <div className="ListItems">
            <h2 className="ListItems__title">{categoryTitle}</h2>
            <div className="ListItems__list">
                {products.length <= 0 &&
                    loadingItemsPLaceholder()
                }
                {products.map((product, i) => {
                    return (
                        <Link to={`/product/${product.id}`} key={i} className="ListItems__item-container">
                            <Item item={product} />
                        </Link>
                    )
                })}
            </div>

        </div>
    )
}

export default ListItem;