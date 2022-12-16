import {Card} from "../../../../components";
import './CatalogContent.styles.scss'
import {useGetGoodsQuery} from "../../../../api/api";

export const typeMap = {
    'board': 'Настольные игры',
    'wargame': 'Варгеймы',
    'mtg': 'Magic The Gathering',
    'painting': 'Краски',
    'all': 'Весь каталог',
}

export const CatalogContent = ({ type }) => {
    const goodsQuery = useGetGoodsQuery({type})
    return (
        <div className="catalog-page wrapper wrapper--screen">
            <h1 className="catalog-page__title">
                { typeMap[type] }
            </h1>
            <div className="catalog-page__goods">
                {goodsQuery.data
                    && goodsQuery.data
                        .filter(item => item.type === type || type === 'all')
                        .map(item => (
                            <Card {...item} />
                            )
                        )
                }
            </div>
        </div>
    )
}