import {Button} from "../../../../components";
import {GoodsInfo} from "../../../../GoodsInfo.mock";
import './CartBuyCard.styles.scss'

const getCartSum = (cart) => {
    return Object.keys(cart)
            .reduce(
                (acc, cur) => {
                    console.log(GoodsInfo.find(item => item.id === +cur).price);
                    return acc + GoodsInfo.find(item => item.id === +cur).price * +cart[cur]
                }
                , 0
            )
}

export const CartBuyCard = ({ cart }) => {
    const cartSum = getCartSum(cart);
    return (
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