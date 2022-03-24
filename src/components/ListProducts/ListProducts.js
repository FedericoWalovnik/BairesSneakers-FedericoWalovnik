import React, { useState, useEffect } from 'react'
import './ListProducts.scss'

const Navbar = ({ cartItems }) => {
    const mockProducts = [{
        id: 0,
        title: "Nike Air Force 1 '07",
        description: "The glare lives on in the Nike Air Force 1 '07, the basketball icon that puts a fresh spin on the most remembered features: shimmering leather, clean colorways and the perfect amount of sparkle to make you shine. This crisp, pure white finish adds the contrast of the rubber sole for a fresh, versatile look with just the right amount of sparkle.",
        price: 30,
        category: 'Man',
        image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/f66a08b9-211c-43fe-a0cc-d04a732bdc63/calzado-air-force-1-07-L3SMQl.png',
        stock: 1
    },
    {
        id: 1,
        title: "Nike Air Max 90 SE",
        description: "The 'Air Max Running Club' is Nike's fictional track team, bringing '70s inspiration to streetwear staples.Mixing retro fun with fresh flashes, the Nike Air Max 90 SE stays true back to its roots with the iconic waffle outsole, stitched overlays, and classic TPU details at the heel and eyelets. Athletics West-inspired branding celebrates sport, and Max Air cushioning adds comfort to your ride.",
        price: 30,
        category: 'Man',
        image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/8e4b8d8e-7cfa-46fe-91d0-132695796982/calzado-air-max-90-se-knmMzp.png',
        stock: 1
    }]

    const [products, setProducts] = useState([]);

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProducts)
        })
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
        <div className="ListProducts">
            {products.map((product, i) => {
                const { title } = product
                return (
                    <div key={i}>
                        <p>{title}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default Navbar;