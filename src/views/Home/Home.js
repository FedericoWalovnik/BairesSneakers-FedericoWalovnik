import './Home.scss';
import SimpleCard from '../../components/SimpleCard/SimpleCard'
import Item from '../../components/Item/Item'

const Home = () => {
    const cards = [
        {
            image: 'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_953,c_limit/965f33b5-ce1b-4a23-82b5-0c39c7f603df/nike-just-do-it.jpg',
            title: 'Style Your Air',
            redirectLink: '/product/L9fa4cIwlR1Ju8WP52Be',
            action: 'Shop'
        },
        {
            image: 'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_738,c_limit/7165e42f-248a-4dca-ae1f-f4c813940e3a/nike-just-do-it.jpg',
            title: 'Shoes Always $100 & Under',
            redirectLink: '/product/2',
            action: 'Shop'
        },
        {
            image: 'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1824,c_limit/4a631c64-48cc-4a62-85c5-5e5c4ba92ad1/nike-just-do-it.jpg',
            title: 'Festival Favs',
            description: 'Bring the heat in fire fits ready to dance all day and night',
            redirectLink: '/category/Man',
            action: 'Shop'
        },
        {
            image: 'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1824,c_limit/a8176390-6e6e-441c-86e4-a449080f6e3a/nike-just-do-it.jpg',
            title: 'Get in on the Madness',
            description: 'Rep your school during the biggest tournament',
            redirectLink: '/category/Man',
            action: 'Shop'
        }
    ]

    const popularItems =
        [
            {
                id: 'L9fa4cIwlR1Ju8WP52Be',
                title: "Nike Air Force 1 '07",
                price: 30,
                category: 'Man',
                bestSeller: false,
                image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/752efdf6-b2b7-47fc-b137-5a70b5dd9423/air-force-1-07-mens-shoes-L3SMQl.png',
                stock: 1
            },
            {
                id: 'PdcBvyp5XPWKPhoGfS6r',
                title: "Nike Air Max 90 SE",
                price: 30,
                category: 'Man',
                bestSeller: false,
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
        ]

    return (
        <div className="Home">
            <div className="Home__section">
                <h2 className="Home__title">Selected for Festival Season</h2>
                <SimpleCard className="Home__card" props={cards[2]} />
            </div>
            <div className="Home__feature-footwear Home__section">
                <h2 className="Home__title">Featured Footwear</h2>
                <div className="Home__cards">
                    <SimpleCard className="Home__card" props={cards[0]} />
                    <SimpleCard className="Home__card" props={cards[1]} />
                </div>
            </div>
            <div className="Home__section">
                <h2 className="Home__title">Popular Right Now</h2>
                <div className="Home__cards">
                    {
                        popularItems.map((item) => {
                            return (
                                <span className="Home__item" key={item.id}>
                                    <Item item={item} />
                                </span>
                            )
                        })
                    }
                </div>
            </div>
            <div className="Home__section">
                <h2 className="Home__title">College Basketball Fan Gear</h2>
                <SimpleCard className="Home__card" props={cards[3]} />
            </div>
        </div>
    );
}

export default Home;
