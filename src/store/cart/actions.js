import axios from 'axios'

import { SET_CART_ITEMS } from './selectors'

const API_URL = 'https://actum-task-api.herokuapp.com' // without set up the .env file

export function getAllItems() {
    return (dispatch) => {
        axios.get(API_URL).then(({ data }) => {
            dispatch({ type: SET_CART_ITEMS, data })
        }).catch(error => {
            console.log(error) // without error handling
        })
    }
}

export function deleteItem(id) {
    return (dispatch) => {
        axios.delete(`${API_URL}/${id}`).then(({ data }) => {
            dispatch({ type: SET_CART_ITEMS, data })
        }).catch(error => {
            console.log(error) // without error handling
        })
    }
}
