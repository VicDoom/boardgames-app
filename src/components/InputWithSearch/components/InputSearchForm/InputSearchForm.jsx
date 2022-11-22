import {showSearchRecentItems} from "../../helpers/showSearchRecentItems";

export const InputSearchForm = ({value, onChange, makeResultsHidden}) => {

    const onClickButton = () => {
        localStorage.setItem('search', value);
        showSearchRecentItems();
    }

    return (
        <form action="#">
            <input
                type="text"
                className="input_search-input"
                placeholder="Найти игру..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onBlur={() => makeResultsHidden(true)}
            />
            <button type="submit" className="input_search-button" onClick={() => onClickButton()}>search</button>
        </form>
    )
}