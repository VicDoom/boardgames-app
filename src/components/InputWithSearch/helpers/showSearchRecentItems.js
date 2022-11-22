export const showSearchRecentItems = (searchRecentItems) => {
    const lastSearchValue = localStorage.getItem('search');
    // if (lastSearchValue) {
    //     searchRecentItems.forEach(element => {
    //         element.classList.remove('header__search-recent-item--hidden');
    //     });
    //     searchRecentItems[0].style = 'border-top: 1px solid var(--white-color)';
    //     console.log(searchRecentItems[0]);
    //     searchRecentItems[1].innerHTML = lastSearchValue;
    // }
    return { isShown: !!lastSearchValue, content: lastSearchValue }
}