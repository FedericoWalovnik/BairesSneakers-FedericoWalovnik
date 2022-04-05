import React from 'react'

import './Footer.scss'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer__links">
                <ul>
                    <li className="Footer__title">GIFT CARDS</li>
                    <li className="Footer__title">PROMOTIONS</li>
                    <li className="Footer__title">FIND A STORE</li>
                    <li className="Footer__title">SIGN UP FOR EMAIL</li>
                    <li className="Footer__title">BECOME A MEMBER</li>
                    <li className="Footer__title">NIKE JOURNAL</li>
                    <li className="Footer__title">SEND US FEEDBACK</li>
                </ul>
            </div>
            <div className="Footer__links">
                <p className="Footer__title">GET HELP</p>
                <ul>
                    <li className="Footer__item">Order Status</li>
                    <li className="Footer__item">Shipping and Delivery</li>
                    <li className="Footer__item">Returns</li>
                    <li className="Footer__item">Payment Options</li>
                    <li className="Footer__item">Gift Card Balance</li>
                    <li className="Footer__item">Contact Us</li>
                </ul>
            </div>
            <div className="Footer__links">
                <p className="Footer__title">ABOUT NIKE</p>
                <ul>
                    <li className="Footer__item">News</li>
                    <li className="Footer__item">Careers</li>
                    <li className="Footer__item">Investors</li>
                    <li className="Footer__item">Porpuose</li>
                    <li className="Footer__item">Sustentability</li>
                </ul>
            </div>
            <div className="Footer__copyright">
                <p>Federico Walovnik. Buenos Aires, Argentina. 2022</p>
            </div>
        </div>
    )
}

export default Footer;