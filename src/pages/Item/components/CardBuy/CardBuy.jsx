import card_people from "../../../../images/card_people.svg";
import card_time from "../../../../images/card_time.svg";
import './CardBuy.styles.scss'
import {Button} from "../../../../components";
import {useDispatch} from "react-redux";

export const CardBuy = ({id, people, time, age, price}) => {
    const dispatch = useDispatch();
    return (
        <div className="card-buy">
            <div className="card-buy-info">
                <div className="card-buy-info-with-icon">
                    <div className="card-buy-info-icon">
                        <img src={card_people} alt="people"/>
                    </div>
                    <div className="card-buy-info-text text">
                        {people}
                    </div>
                </div>
                <div className="card-buy-info-with-icon">
                    <div className="card-buy-info-icon">
                        <img src={card_time} alt="people"/>
                    </div>
                    <div className="card-buy-info-text text">
                        {time}
                    </div>
                </div>
                <div className="card-buy-info-without-icon">
                    <div className="card-buy-info-text text">
                        {age}
                    </div>
                </div>
            </div>
            <div className="card-buy-price">
                {price} ₽
            </div>
            <div className="card-buy-controls">
                <Button title="В корзину" onClick={() => dispatch({ type: 'INCREMENT', id })} />
                <Button title="Купить в один клик" />
            </div>
        </div>
    )
}