import './Cart.scss';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext"

import Button from '@mui/material/Button';
import CartListItem from '../../components/CartListItem/CartListItem'

const Home = () => {
    const { cartList, totalPrice } = useCartContext()

    return (
        <div className="Cart">
            <h1 className="Cart__title">Cart</h1>
            {
                (cartList.length === 0) ?
                    (
                        <div className="Cart__empty">
                            <p className="Cart__empty-message">There is no items in your cart yet...</p>
                            <Link to='/'>
                                <Button variant="contained" className="Cart__empty-button">Continue Shopping</Button>
                            </Link>
                        </div>
                    ) :
                    (<div className="Cart__not-empty">
                        <div className="Cart__list">
                            {cartList.map((item) => {
                                return (
                                    <CartListItem key={item.id} item={item} />
                                )
                            })}
                        </div>
                        <div className="Cart__summary">
                            <h3 className="Cart__summary-title">Summary</h3>
                            <div className="Cart__total">
                                <p className="Cart__total-title">Total</p>
                                <p className="Cart__total-number">${totalPrice()}</p>
                            </div>
                        </div>
                    </div>
                    )

            }
        </div>
    );
}

export default Home;
