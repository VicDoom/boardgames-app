import {Card} from "../../../../components";
import card_1 from '../../../../images/card_1.png';
import card_2 from '../../../../images/card_2.png';
import card_3 from '../../../../images/card_3.png';
import card_4 from '../../../../images/card_4.png';
import './GoodsList.styles.scss'

export const GoodsList = () => {
    return (
        <div className="screen2 wrapper wrapper--screen wrapper--last">
            <h1 className="screen-title">Успей купить</h1>
            <div className="screen2__cards">
                <Card picture={card_1} age="18+" people="2-4" price="3657 ₽" time="30-60" title="Warhammer 40,000: Chaos Space Marines" />
                <Card picture={card_2} age="18+" people="2-4" price="3657 ₽" time="30-60" title="На марсе" />
                <Card picture={card_3} age="18+" people="2-4" price="3657 ₽" time="30-60" title="Broken Realms: Horrek's Dreadlance" />
                <Card picture={card_4} age="18+" people="2-4" price="3657 ₽" time="30-60" title="Таверна Красный дракон" />
            </div>
        </div>
    )
}