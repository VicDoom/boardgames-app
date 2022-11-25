import {useSelector} from "react-redux";
import {useEffect} from "react";

export const ProviderWrapper = ({ children }) => {
    const cart = useSelector(state => state.cart)
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])
    return <div>{children}</div>
}