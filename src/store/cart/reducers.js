import { SET_CART_ITEMS } from './selectors'

const cart = (state = null, { type, data }) => {
    switch(type){
        case SET_CART_ITEMS: {
            return {
                ...state,
                items: data
            }
        }
        default:
            return state
    }
}

export default cart
