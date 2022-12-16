import './Card.styles.scss'
import card_people from '../../images/card_people.svg'
import card_time from '../../images/card_time.svg'
import card_buy from '../../images/card_buy.svg'
import {Button} from "../Button/Button";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export const Card = ({ id, picture, people, time, age, title, price }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className="card">
            <div className="card__top" onClick={() => {navigate(`/item/${id}`)}}>
                <img src={picture} alt="card" />
            </div>
            <div className="card__bottom">
                <div className="card__bottom-description">
                    <div className="card__bottom-description-with-icon">
                        <div className="card__bottom-description-icon">
                            <img src={card_people} alt="people" />
                        </div>
                        <div className="card__bottom-description-text text text--small">
                            {people}
                        </div>
                    </div>
                    <div className="card__bottom-description-with-icon">
                        <div className="card__bottom-description-icon">
                            <img src={card_time} alt="people" />
                        </div>
                        <div className="card__bottom-description-text text text--small">
                            {time}
                        </div>
                    </div>
                    <div className="card__bottom-description-without-icon">
                        <div className="card__bottom-description-text text text--small">
                            {age}
                        </div>
                    </div>
                </div>
                <div className="card__bottom-title text text--medium">
                    {title}
                </div>
                <div className="card__bottom-price">
                    {price} ₽
                </div>
                <div className="card__bottom-buttons">
                    <Button title="В корзину" icon={card_buy} onClick={() => dispatch({type: 'INCREMENT', id: id})} />
                    <Button title="Купить в один клик" />
                </div>
            </div>
        </div>
    )
}