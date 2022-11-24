import './CartItem.styles.scss'
import {GoodsInfo} from "../../../../GoodsInfo.mock";
import DeleteIcon from "../../../../images/icon-delete-24.svg";
import {useDispatch} from "react-redux";

export const CartItem = ({ id, amount }) => {
    const dispatch = useDispatch()
    return (
        <div className="cart-item">
            <div className="cart-item__picture">
                <img src={GoodsInfo[id].picture} alt="pic1"/>
            </div>
            <div className="cart-item__title text text--bold">
                {GoodsInfo[id].title}
            </div>
            <div className="cart-item__price text text--bold">
                {GoodsInfo[id].price} ₽
            </div>
            <div className="cart-item__amount-controls text text--bold">
                <div className="cart-item__amount-decrease" onClick={() => dispatch({ type: 'DECREMENT', id })}>-</div>
                <div className="cart-item__amount-number">{amount}</div>
                <div className="cart-item__amount-increase" onClick={() => dispatch({ type: 'INCREMENT', id })}>+</div>
            </div>
            <div className="cart-item__delete-control" onClick={() => dispatch({ type: 'DELETE', id })}>
                <img src={DeleteIcon} alt=""/>
            </div>
        </div>
    )
}