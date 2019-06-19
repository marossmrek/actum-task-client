import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import cartReducer from './cart/reducers'

const store = createStore(combineReducers({ cart: cartReducer }),
    compose(
        applyMiddleware(thunk)
    )
)

export default store
