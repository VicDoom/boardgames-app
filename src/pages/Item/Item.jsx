import {Menu, Footer, Header} from "../../components";
import {ItemContent} from "./components/ItemContent/ItemContent";
import {useParams} from "react-router-dom";

export const Item = () => {
    const { id } = useParams();
    return (
        <>
            <Header />
            <Menu />
            <ItemContent id={id} />
            <Footer />
        </>
    )
}