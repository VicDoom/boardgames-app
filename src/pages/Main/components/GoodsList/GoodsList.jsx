import {Card} from "../../../../components";
import './GoodsList.styles.scss'
import {useNavigate} from "react-router-dom";
import {GoodsInfo} from "../../../../GoodsInfo.mock";

export const GoodsList = () => {

    const navigate = useNavigate();

    return (
        <div className="screen2 wrapper wrapper--screen wrapper--last">
            <h1 className="screen-title">Успей купить</h1>
            <div className="screen2__cards">
                {GoodsInfo.map(item => (
                    <Card {...item} onClick={() => navigate(`item/${item.id}`)} />
                ))}
            </div>
        </div>
    )
}