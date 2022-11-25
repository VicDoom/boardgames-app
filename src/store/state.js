export const defaultState = {
    cart: JSON.parse(localStorage.getItem('cart')) || {},
}