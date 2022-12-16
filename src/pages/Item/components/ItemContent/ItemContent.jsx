import {CardBuy} from "../CardBuy";
import {Tabs} from '../Tabs'
import './ItemContent.styles.scss'
import {Card} from "../../../../components";
import {useNavigate, useParams} from "react-router-dom";
import {useGetGoodsQuery} from "../../../../api/api";
import {useEffect, useState} from "react";

export const getRandomGoods = (goods, number, exceptNumber = null) => {
    return goods ?
        goods
            .filter(item => item.id !== exceptNumber)
            .sort(() => 0.5 - Math.random())
            .slice(0, number)
        : []
}

export const ItemContent = () => {
    const { id } = useParams();
    const goodsQuery = useGetGoodsQuery({ type: 'board' })
    const [good, setGood] = useState(goodsQuery.data && goodsQuery.data.find((item) => item.id === +id));
    const [recommend, setRecommend] = useState(getRandomGoods(goodsQuery.data, 2, +id));
    const navigate = useNavigate();
    useEffect(() => {
        if (goodsQuery.isSuccess) {
            setRecommend(getRandomGoods(goodsQuery.data, 2, +id))
        }
        if (goodsQuery.data) {
            setGood(goodsQuery.data.find((item) => item.id === +id))
        }
    }, [goodsQuery, id])
    return (good && (
        <div className="item-content wrapper wrapper--item">
            <h1 className="item-content--title">
                { good.title }
            </h1>
            <div className="item-content-divider">
                <div className="item-content-info">
                    <div className="item-content--picture">
                        <img src={good.picture} alt="card" />
                    </div>
                    <Tabs name="item-content-tab" titles={['Описание', 'Характеристики']} contents={[good.description, good.characteristics]} />
                </div>
                <div className="item-content-buy">
                    <CardBuy id={id} people={good.people} time={good.time} age={good.age} price={good.price} />
                    <h6 className="text text--bold">С этим товаром покупают</h6>
                    {recommend.length && <Card {...recommend[0]} />}
                    {recommend.length && <Card {...recommend[1]} />}
                </div>
            </div>
        </div>)
    )
}