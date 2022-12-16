import './CartContent.styles.scss'
import {CartItem, CartBuyCard} from "../../components";
import {useSelector} from "react-redux";

export const CartContent = () => {
    const cart = useSelector(state => state.cart.cart)

    return (
        <div className="cart wrapper wrapper--screen">
            <h1 className="cart__title">Корзина</h1>
            <div className="cart__content">
                <div className="cart__content-list">
                    {Object.keys(cart).map(id => (
                        <CartItem id={id} amount={cart[id]} />
                    ))}
                    {Object.keys(cart).length === 0 && 'Пока что в корзине пусто :('}
                </div>
                <div className="cart__content-buy">
                    <CartBuyCard cart={cart} />
                </div>
            </div>
        </div>
    )
}