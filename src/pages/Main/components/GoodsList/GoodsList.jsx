import {Card} from "../../../../components";
import './GoodsList.styles.scss'
import {getRandomGoods} from "../../../Item/components";
import {useGetGoodsQuery} from "../../../../api/api";
import {useEffect, useState} from "react";

export const GoodsList = () => {

    const goodsQuery = useGetGoodsQuery({ type: 'board' })
    const [randomGoods, setRandomGoods] = useState(getRandomGoods(goodsQuery.data, 4))

    useEffect(() => {
        setRandomGoods(getRandomGoods(goodsQuery.data, 4))
    }, [goodsQuery.isSuccess])

    return (goodsQuery && (
            <div className="screen2 wrapper wrapper--screen wrapper--last">
                <h1 className="screen-title">Успей купить</h1>
                <div className="screen2__cards">
                    {randomGoods.map(item => (
                        <Card {...item} />
                    ))}
                </div>
            </div>
    ))
}