import {Button} from "../../../../components";
import './CartBuyCard.styles.scss'
import {useGetGoodsQuery} from "../../../../api/api";
import React, {useState, useEffect} from "react";

const getCartSum = (data, cart) => {
    return Object.keys(cart)
            .reduce(
                (acc, cur) => {
                    return acc + data.find(item => item.id === +cur).price * +cart[cur]
                }
                , 0
            )
}

export const CartBuyCard = ({ cart }) => {
    const { data } = useGetGoodsQuery({ type: 'all' })
    const [cartSum, setCartSum] = useState(undefined);
    useEffect(() => {
        data && setCartSum(getCartSum(data, cart))
    }, [data, cart])
    return data &&
        (
            <div className="card-buy-card">
                <div className="card-buy-card__sum text text--bold">
                    Сумма: <span> {cartSum} ₽ </span>
                </div>
                <div className="card-buy-card__controls">
                    <Button size="large" title="Оформить" />
                </div>
            </div>
        )
}