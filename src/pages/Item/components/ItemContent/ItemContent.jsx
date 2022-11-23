import {CardBuy} from "../CardBuy";
import {Tabs} from '../Tabs'
import './ItemContent.styles.scss'
import {Card} from "../../../../components";
import {GoodsInfo} from "../../../Main/components/GoodsList/GoodsList";
import {useNavigate} from "react-router-dom";

const getRandomGoods = (number, exceptNumber) =>
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
                    <CardBuy people={people} time={time} age={age} price={price} />
                    <h6 className="text text--bold">С этим товаром покупают</h6>
                    <Card {...recommend[0]} onClick={() => navigate(`/item/${recommend[0].id}`)} />
                    <Card {...recommend[1]} onClick={() => navigate(`/item/${recommend[1].id}`)} />
                </div>
            </div>
        </div>
    )
}