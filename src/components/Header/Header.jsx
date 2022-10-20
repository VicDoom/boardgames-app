import '../../App.scss';
import './Header.styles.scss';
import logo_pic from "../../images/header_logo.svg"
import phone_pic from "../../images/header_phone.svg"
export const Header = () => {
    return (
        <header className="header wrapper wrapper--header">
            <div className="header__logo">
                <img className="header__logo-icon" src={logo_pic} alt="dice" />
                    <h1 className="header__logo-text">
                        aBoard games
                    </h1>
            </div>
            <div className="header__search">
                <form action="#">
                    <input type="text" className="header__search-input" placeholder="Найти игру..." />
                        <button type="submit" className="header__search-button">search</button>
                </form>
                <div className="header__search-results header__search-results--hidden">
                    <div className="header__search-item">Warhammer 40,000: Chaos Space Marines</div>
                    <div className="header__search-item">На марсе</div>
                    <div className="header__search-item">Broken Realms: Horrek's Dreadlance</div>
                    <div className="header__search-item">Таверна Красный дракон</div>
                    <div className="header__search-item header__search-item--no-items">Нет данных</div>
                    <div className="header__search-recent-item header__search-recent-item--hidden">Последний поиск:
                    </div>
                    <div className="header__search-recent-item header__search-recent-item--hidden" />
                </div>
            </div>
            <div className="header__phone">
                <div className="header__phone-icon">
                    <img className="header__phone-icon" src={phone_pic} alt="phone" />
                </div>
                <h6 className="header__phone-number">+7 (800) 555-35-35</h6>
            </div>
            <div className="header__profile">
                <button className="header__profile-signin">
                    <svg width="30" height="29" viewBox="0 0 30 29" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15 0.695312C12.9545 0.695312 11.3565 1.43942 10.206 2.92765C9.0554 4.41587 8.48011 6.31827 8.48011 8.63485C8.46591 11.513 9.40341 13.7945 11.2926 15.4793C11.5341 15.7039 11.6193 15.9917 11.5483 16.3427L11.0582 17.3536C10.902 17.6906 10.6712 17.9538 10.3658 18.1433C10.0604 18.3329 9.41761 18.6031 8.4375 18.9541C8.39489 18.9682 7.49645 19.256 5.74219 19.8176C3.98793 20.3792 3.05398 20.6881 2.94034 20.7442C1.74716 21.2356 0.965909 21.7481 0.596591 22.2816C0.198864 23.1661 0 25.4055 0 28.9997H30C30 25.4055 29.8011 23.1661 29.4034 22.2816C29.0341 21.7481 28.2528 21.2356 27.0597 20.7442C26.946 20.6881 26.0121 20.3792 24.2578 19.8176C22.5036 19.256 21.6051 18.9682 21.5625 18.9541C20.5824 18.6031 19.9396 18.3329 19.6342 18.1433C19.3288 17.9538 19.098 17.6906 18.9418 17.3536L18.4517 16.3427C18.3807 15.9917 18.4659 15.7039 18.7074 15.4793C20.5966 13.7945 21.5341 11.513 21.5199 8.63485C21.5199 6.31827 20.9446 4.41587 19.794 2.92765C18.6435 1.43942 17.0455 0.695312 15 0.695312Z"/>
                    </svg>
                </button>
                <button className="header__profile-cart">
                    <svg width="35" height="35" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M30.741 10.2082C30.489 9.77161 30.1282 9.40778 29.6937 9.15219C29.2592 8.89661 28.7659 8.75799 28.2618 8.74988H9.59518L8.74935 5.45405C8.66389 5.13589 8.47323 4.85605 8.20842 4.66009C7.94361 4.46413 7.62025 4.3636 7.29102 4.37488H4.37435C3.98757 4.37488 3.61664 4.52852 3.34315 4.80201C3.06966 5.07551 2.91602 5.44644 2.91602 5.83321C2.91602 6.21999 3.06966 6.59092 3.34315 6.86441C3.61664 7.1379 3.98757 7.29155 4.37435 7.29155H6.18268L10.2077 22.254C10.2931 22.5722 10.4838 22.852 10.7486 23.048C11.0134 23.244 11.3368 23.3445 11.666 23.3332H24.791C25.0603 23.3324 25.3241 23.257 25.5532 23.1154C25.7823 22.9739 25.9677 22.7716 26.0889 22.5311L30.8723 12.9645C31.0796 12.5299 31.1761 12.0508 31.1532 11.5698C31.1303 11.0889 30.9887 10.6211 30.741 10.2082Z"
                            fill="white"/>
                        <path
                            d="M10.9375 30.625C12.1456 30.625 13.125 29.6456 13.125 28.4375C13.125 27.2294 12.1456 26.25 10.9375 26.25C9.72938 26.25 8.75 27.2294 8.75 28.4375C8.75 29.6456 9.72938 30.625 10.9375 30.625Z"
                            fill="white"/>
                        <path
                            d="M25.5195 30.625C26.7277 30.625 27.707 29.6456 27.707 28.4375C27.707 27.2294 26.7277 26.25 25.5195 26.25C24.3114 26.25 23.332 27.2294 23.332 28.4375C23.332 29.6456 24.3114 30.625 25.5195 30.625Z"
                            fill="white"/>
                    </svg>
                </button>
            </div>
        </header>
    )
}