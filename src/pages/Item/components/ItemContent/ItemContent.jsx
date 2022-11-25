import {CardBuy} from "../CardBuy";
import {Tabs} from '../Tabs'
import './ItemContent.styles.scss'
import {Card} from "../../../../components";
import {GoodsInfo} from "../../../../GoodsInfo.mock";
import {useNavigate} from "react-router-dom";

export const getRandomGoods = (number, exceptNumber = null) =>
    GoodsInfo
        .filter(item => item.id !== exceptNumber)
        .sort(() => 0.5 - Math.random())
        .slice(0, number);

export const ItemContent = ({ id }) => {
    const { age, people, picture, price, time, title, description, characteristics } = GoodsInfo.find((item) => item.id === +id);
    const recommend = getRandomGoods(2, +id);
    const navigate = useNavigate();
    return (
        <div className="item-content wrapper wrapper--item">
            <h1 className="item-content--title">
                { title }
            </h1>
            <div className="item-content-divider">
                <div className="item-content-info">
                    <div className="item-content--picture">
                        <img src={picture} alt="card" />
                    </div>
                    <Tabs name="item-content-tab" titles={['Описание', 'Характеристики']} contents={[description, characteristics]} />
                </div>
                <div className="item-content-buy">
                    <CardBuy id={id} people={people} time={time} age={age} price={price} />
                    <h6 className="text text--bold">С этим товаром покупают</h6>
                    <Card {...recommend[0]} />
                    <Card {...recommend[1]} />
                </div>
            </div>
        </div>
    )
}