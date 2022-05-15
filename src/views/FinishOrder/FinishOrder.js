import './FinishOrder.scss';
import { useParams } from 'react-router-dom';

const FinishOrder = () => {
    const { orderId } = useParams()

    return (
        <div className="FinishOrder">
            <h1 className="FinishOrder__title">Order Sent</h1>
            <p>Your order code is: <span>{orderId}</span></p>
        </div>
    );
}

export default FinishOrder;
