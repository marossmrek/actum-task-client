import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import '../styles/cart.scss'
import { getAllItems, deleteItem } from '../store/cart/actions'

class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            totalPrice: 0
        }
    }

    componentDidMount() {
        const { getAllItems } = this.props
        getAllItems()
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const { cart } = nextProps
        let newTotalPrice = 0

        if (cart && cart.items && cart.items.length > 0) {
            cart.items.forEach(item => {
                newTotalPrice = newTotalPrice + item.price
            })
        }

        this.setState({
            totalPrice: newTotalPrice
        })
    }

    render() {
        const { cart, deleteItem } = this.props
        const { totalPrice } = this.state

        return (
            cart && (
                <div className="wrapper">
                    <div className="cart">
                        <div className="cart-headline">
                            <p className="cart-text">My Cart</p>
                            {cart.items && cart.items.length === 0 ? <p className="cart-text">is empty</p> : <p className="cart-text">{totalPrice}&#8364;</p>}
                        </div>
                        {
                            cart.items && cart.items.length > 0 &&
                            <ul className="cart-list">
                                {
                                    cart.items.map(item => {
                                        return (
                                            <li key={item.id} id={item.id} className="cart-item">
                                                <span>
                                                    <p className="cart-text">{item.name}</p>
                                                    <br/>
                                                    <p className="cart-text">{item.description}</p>
                                                </span>
                                                <p className="cart-text">{item.price}&#8364;</p>
                                                <span className="delete-button-wrapper" onClick={() => deleteItem(item.id)}>
                                                    <p className="delete-button-icon">&#10005;</p>
                                                </span>
                                            </li>
                                        )

                                    })
                                }
                            </ul>
                        }
                    </div>
                </div>
            )
        )
    }
}

Cart.propTypes = {
    cart: PropTypes.object,
    getAllItems: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}

const mapStateToProps = ({ cart }) => {
    return {
        cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllItems: () => dispatch(getAllItems()),
        deleteItem: (id) => dispatch(deleteItem(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
