import './CartItem.styles.scss'
import DeleteIcon from "../../../../images/icon-delete-24.svg";
import {useDispatch} from "react-redux";
import {useGetGoodsQuery} from "../../../../api/api";
import {useEffect, useState} from "react";

export const CartItem = ({ id, amount }) => {
    const dispatch = useDispatch()
    const { data, isSuccess } = useGetGoodsQuery({ type: 'all' });
    const [good, setGood] = useState(data && data.find(item => item.id === +id))

    useEffect(() => {
        if (data) {
            setGood(data.find(item => item.id === +id))
        }
    }, [data, isSuccess])

    console.log(good);

    return isSuccess && good &&
        (
            <div className="cart-item">
                <div className="cart-item__picture">
                    <img src={good.picture} alt="pic1"/>
                </div>
                <div className="cart-item__title text text--bold">
                    {good.title}
                </div>
                <div className="cart-item__price text text--bold">
                    {good.price} ₽
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