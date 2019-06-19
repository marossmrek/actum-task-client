import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Cart from './components/Cart'
import store from './store'

ReactDOM.render(<Provider store={store}><Cart /></Provider>, document.getElementById('root'))

