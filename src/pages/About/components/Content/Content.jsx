import pic1 from '../../images/image-1.png'
import pic2 from '../../images/image-2.png'
import pic3 from '../../images/image-3.png'
import pic4 from '../../images/image-4.png'
import './Content.styles.scss'

export const Content = () => {
    return (
        <div className="about-content wrapper">
            <h1>О центре</h1>
            <div className="about-content-blocks">
                <div className="about-content-block">
                    <div className="about-content-block__info">
                        <h5 className="about-content-block__info-title">
                            Наша миссия
                        </h5>
                        <div className="about-content-block__info-text text text--medium">
                            Разнообразный и богатый опыт укрепление и развитие структуры в значительной степени обуславливает создание модели развития. Разнообразный и богатый опыт консультация с широким активом позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке новых предложений. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание новых предложений.
                        </div>
                    </div>
                    <div className="about-content-block__picture">
                        <img src={pic1} alt="pic1"/>
                    </div>
                    <div className="about-content-block__picture">
                        <img src={pic2} alt="pic2"/>
                    </div>
                </div>
                <div className="about-content-block about-content-block--2">
                    <div className="about-content-block__picture">
                        <img src={pic3} alt="pic1"/>
                    </div>
                    <div className="about-content-block__picture">
                        <img src={pic4} alt="pic2"/>
                    </div>
                    <div className="about-content-block__info">
                        <h5 className="about-content-block__info-title">
                            Наши мероприятия
                        </h5>
                        <div className="about-content-block__info-text text text--medium">
                            Не следует, однако забывать, что укрепление и развитие структуры представляет собой интересный эксперимент проверки модели развития. С другой стороны реализация намеченных плановых заданий в значительной степени обуславливает создание систем массового участия.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}