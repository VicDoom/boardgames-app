import card_1 from '../../../../images/card_1.png';
import card_2 from '../../../../images/card_2.png';
import card_3 from '../../../../images/card_3.png';
import {CardBuy} from "../CardBuy";
import {Tabs} from '../Tabs/Tabs'
import './ItemContent.styles.scss'
import {Card} from "../../../../components";

export const ItemContent = () => {
    return (
        <div className="item-content wrapper wrapper--item">
            <h1 className="item-content--title">
                Дженга
            </h1>
            <div className="item-content-divider">
                <div className="item-content-info">
                    <div className="item-content--picture">
                        <img src={card_1} alt="card" />
                    </div>
                    <Tabs name="item-content-tab" titles={['Описание', 'Характеристики']} contents={['описание', 'характеристика']} />
                </div>
                <div className="item-content-buy">
                    <CardBuy people="2-6" time="30-60" age="6+" price="3567 ₽" />
                    <h6 className="text text--bold">С этим товаром покупают</h6>
                    <Card picture={card_2} title="Broken Realms: Horrek's Dreadlance" people="2-4" age="18+" time="60-80" />
                    <Card picture={card_3} title="Broken Realms: Horrek's Dreadlance" people="2-4" age="18+" time="60-80" />
                </div>
            </div>
        </div>
    )
}