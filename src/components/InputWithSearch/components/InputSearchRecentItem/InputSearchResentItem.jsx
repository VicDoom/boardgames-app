export const InputSearchResentItem = ({content, isFirst ,isHidden}) => {
    return (
        <div
            className=
                {`input_search-recent-item ${isFirst && 'input_search-recent-item--first'} ${isHidden && 'input_search-recent-item--hidden'}`}
        >
            {content}
        </div>
    )
}