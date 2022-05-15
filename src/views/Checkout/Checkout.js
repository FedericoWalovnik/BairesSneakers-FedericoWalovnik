import { useState, useEffect } from "react";

import { useCartContext } from "../../context/CartContext"
import { useNavigate } from 'react-router-dom';

import { addDoc, collection, getFirestore } from '@firebase/firestore';
import Button from '@mui/material/Button';

import './Checkout.scss';


const Checkout = () => {
    const navigate = useNavigate();

    const { cartList, totalPrice, emptyCart } = useCartContext()
    const [firstEmail, setFirstEmail] = useState('');
    const [secondEmail, setSecondEmail] = useState('');
    const [error, setError] = useState('');

    const handleChangeFirstEmail = e => {
        setFirstEmail(e.target.value)
    }

    const handleChangeSecondEmail = e => {
        setSecondEmail(e.target.value)
    }

    const checkEmail = () => {
        if (firstEmail === secondEmail && firstEmail && secondEmail) {
            setError('The emails match')
        } else {
            setError("The emails don't mach")
        }
    }

    const sendOrder = async () => {
        if (error === 'The emails match') {
            const orderItems = cartList.map(({ description, title, price, quantity }) => {
                return { description, title, price, quantity }
            })

            const order = {
                buyer: { email: firstEmail },
                items: { orderItems },
                total: totalPrice(),
                date: Date()
            }

            const db = getFirestore()
            const ordersCollection = collection(db, "orders")

            emptyCart()

            const orderIdGenerated = await addDoc(ordersCollection, order)
            navigate(`/finish-order/${orderIdGenerated.id}`)
        }
    }

    useEffect(() => {
        sendOrder()
    }, [error]);

    return (
        <div className="Checkout">
            <h1 className="Checkout__title">Checkout</h1>
            <div className="Checkout__form">
                <div className="Checkout__email">
                    <label >Add your email:</label>
                    <input type="email" id="email-input" name="email" onChange={handleChangeFirstEmail} />
                </div>
                <div className="Checkout__email">
                    <label >Repeat email:</label>
                    <input type="email" id="email-input" name="email" onChange={handleChangeSecondEmail} />
                </div>
                <p className="Checkout__error">
                    {error}
                </p>
            </div>
            <Button variant="contained" className="Checkout__empty-button" onClick={checkEmail}>Pay</Button>
        </div>
    );
}

export default Checkout;
