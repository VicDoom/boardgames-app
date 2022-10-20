import {Header} from "../../components/Header/Header";
import {Menu} from "./components/Menu/Menu";
import {Catalog} from "./components/Catalog/Catalog";
import {GoodsList} from "./components/GoodsList/GoodsList";
import {Footer} from "../../components/Footer/Footer";

export const Main = () => {
    return (
        <>
            <Header />
            <Menu />
            <Catalog />
            <GoodsList />
            <Footer />
        </>
    )
}