import {createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from '@redux-saga/core'
import rootsaga from './rootsaga'



const products = (state=[], action) => {
    switch(action.type){
        case "ADD_TO_PRODUCTS_SUCCESS":
            return action.payload
        default:
            return state
    }
}
const cart = (state=[], action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return [
                ...state,
                action.payload
            ]
        case "REMOVE_TO_CART":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

const rootReducer =  combineReducers({
    products,
    cart
})
const sagaMiddle = createSagaMiddleware()
export const store = createStore(rootReducer, applyMiddleware(sagaMiddle, logger));

sagaMiddle.run(rootsaga)