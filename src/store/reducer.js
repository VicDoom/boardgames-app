import {defaultState} from "./state";

export const CartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, cart: { ...state.cart, [action.id]: state.cart[action.id] ? state.cart[action.id] + 1 : 1 }}
        case 'DECREMENT':
            if (state.cart[action.id] > 1) {
                return {...state, cart: { ...state.cart, [action.id]: state.cart[action.id] ? state.cart[action.id] - 1 : 1 }}
            } else {
                console.log('here');
                delete state.cart[action.id]
                return {...state, cart: { ...state.cart }}
            }
        case 'DELETE': {
            delete state.cart[action.id]
            return {...state, cart: { ...state.cart }}
        }
        default:
            return state
    }
}