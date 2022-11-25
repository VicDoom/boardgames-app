import catalog_pic1 from '../../../../images/screen1_pic1.png';
import catalog_pic2 from '../../../../images/screen1_pic2.png';
import catalog_pic3 from '../../../../images/screen1_pic3.png';
import catalog_pic4 from '../../../../images/screen1_pic4.png';
import catalog_pic5 from '../../../../images/screen1_pic5.png';
import './Catalog.styles.scss'
import {useState} from "react";
import {Modal, Button} from "../../../../components";
import {useNavigate} from "react-router-dom";

export const Catalog = () => {
    const [open, setOpen] = useState(false);
    const openDialog = () => setOpen(true);
    const closeDialog = () => setOpen(false);
    const navigate = useNavigate();
    return (
        <>
            <div className="screen1 wrapper wrapper--screen">
                <h1 className="screen-title">Каталог</h1>
                <div className="screen1-catalog">
                    <div className="catalog-item catalog-item--1" onClick={() => navigate('/catalog/board')}>
                        <img src={catalog_pic1} alt="pic1" />
                        <div className="catalog-item__footer">Настольные игры</div>
                    </div>
                    <div className="catalog-item catalog-item--2" onClick={() => navigate('/catalog/wargame')}>
                        <img src={catalog_pic2} alt="pic2" />
                        <div className="catalog-item__footer">Варгеймы</div>
                    </div>
                    <div className="catalog-item catalog-item--3" onClick={() => navigate('/catalog/painting')}>
                        <img src={catalog_pic3} alt="pic3" />
                        <div className="catalog-item__footer">Краски</div>
                    </div>
                    <div className="catalog-item catalog-item--4" onClick={() => navigate('/catalog/mtg')}>
                        <img src={catalog_pic4} alt="pic4" />
                        <div className="catalog-item__footer">Magic:the Gathering</div>
                    </div>
                    <div className="catalog-item catalog-item--5" onClick={() => navigate('/catalog/all')}>
                        <img src={catalog_pic5} alt="pic5" />
                        <div className="catalog-item__footer">Весь каталог</div>
                    </div>
                </div>
            </div>
            <Modal open={open} onClose={closeDialog}>
                <Button title="Демо-кнопочка" />
            </Modal>
        </>
    )
}