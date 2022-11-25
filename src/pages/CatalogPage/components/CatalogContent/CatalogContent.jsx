import {GoodsInfo} from "../../../../GoodsInfo.mock";
import {Card} from "../../../../components";
import './CatalogContent.styles.scss'

export const typeMap = {
    'board': 'Настольные игры',
    'wargame': 'Варгеймы',
    'mtg': 'Magic The Gathering',
    'painting': 'Краски',
    'all': 'Весь каталог',
}

export const CatalogContent = ({ type }) => {
    return (
        <div className="catalog-page wrapper wrapper--screen">
            <h1 className="catalog-page__title">
                { typeMap[type] }
            </h1>
            <div className="catalog-page__goods">
                {GoodsInfo
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