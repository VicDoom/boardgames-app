import './InputWithSearch.styles.scss'
import {useEffect, useState} from "react";
import {showSearchRecentItems} from "./helpers/showSearchRecentItems";
import {InputSearchResentItem, InputSearchForm} from "./components";

const searchItemValues = [
    'Warhammer 40,000: Chaos Space Marines',
    'На марсе',
    'Broken Realms: Horrek\'s Dreadlance',
    'Таверна Красный дракон',
]

export const InputWithSearch = () => {

    const { isShown, content } = showSearchRecentItems();
    const [searchValue, setSearchValue] = useState('');
    const [areSearchResultsHidden, setAreSearchResultsHidden] = useState(true);
    const [shownValuesId, setShownValuesId] = useState(searchItemValues.map(() => false))

    useEffect(() => {
        const arraySearchItems = [];
        searchItemValues.forEach((element, index) => {
            if (searchValue !== '') {
                setAreSearchResultsHidden(false);
                if (element.toLowerCase().search(searchValue.toLowerCase()) !== -1) {
                    arraySearchItems.push(true)
                } else {
                    arraySearchItems.push(false);
                }
            } else {
                setAreSearchResultsHidden(true);
            }
        })
        arraySearchItems.length === shownValuesId.length && setShownValuesId(arraySearchItems);
        showSearchRecentItems();
    }, [searchValue]);

    return (
        <div className="input_search">
            <InputSearchForm value={searchValue} onChange={setSearchValue} makeResultsHidden={setAreSearchResultsHidden} />
            <div className={`input_search-results ${areSearchResultsHidden && 'input_search-results--hidden'}`}>
                {searchItemValues.map((item, index) => (
                    <div className={`input_search-item ${ !shownValuesId[index] && 'input_search-item--hidden'}`}>{item}</div>
                ))}
                {!shownValuesId.filter(item => item).length && (
                    <div className="input_search-item input_search-item--no-items">Нет данных</div>
                )}
                <InputSearchResentItem content={'Последний поиск:'} isFirst={true} isHidden={!isShown}/>
                <InputSearchResentItem content={content} isFirst={false} isHidden={!isShown} />
            </div>
        </div>
    )
}