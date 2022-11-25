import {Card} from "../../../../components";
import './GoodsList.styles.scss'
import {useNavigate} from "react-router-dom";
import {getRandomGoods} from "../../../Item/components";

export const GoodsList = () => {

    const randomGoods = getRandomGoods(4)

    return (
        <div className="screen2 wrapper wrapper--screen wrapper--last">
            <h1 className="screen-title">Успей купить</h1>
            <div className="screen2__cards">
                {randomGoods.map(item => (
                    <Card {...item} />
                ))}
            </div>
        </div>
    )
}