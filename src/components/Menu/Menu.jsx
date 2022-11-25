import {useEffect} from "react";
import './Menu.styles.scss'
import {useNavigate} from "react-router-dom";

export const Menu = () => {

    const navigate = useNavigate();

    useEffect(
        () => {
            const marker = document.querySelector('.menu__marker');
            const menuElements = document.querySelectorAll('.menu__element');

            const setMarker = (e) => {
                marker.style.left = `${e.offsetLeft}px`;
                marker.style.width = `${e.offsetWidth}px`;
            }

            menuElements.forEach(element => {
                element.addEventListener('mouseover', (e) => {
                    setMarker(e.target);
                })
            })
        }, []
    )

    return (
        <div className="menu wrapper">
            <div className="menu__container">
                <div className="menu__marker" />
                <div className="menu__element text text--bold" onClick={() => navigate('/catalog/all')}>Каталог</div>
                <div className="menu__element text text--bold">Успей купить</div>
                <div className="menu__element text text--bold">Мероприятия</div>
                <div className="menu__element text text--bold" onClick={() => navigate('/about')}>Контакты</div>
            </div>
        </div>
    )
}