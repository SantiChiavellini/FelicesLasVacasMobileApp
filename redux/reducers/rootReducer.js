import productsReducer from '../reducers/productsReducer'
const { combineReducers } = require('redux')

const rootReducer = combineReducers({
    productsRed: productsReducer
})

export default rootReducer