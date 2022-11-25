import {Header, Menu, Footer} from "../../components";
import {CatalogContent} from "./components";
import {useParams} from "react-router-dom";

export const CatalogPage = () => {
    const { type } = useParams()
    return (
        <>
            <Header />
            <Menu />
            <CatalogContent type={type} />
            <Footer />
        </>
    )
}