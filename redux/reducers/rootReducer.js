import productsReducer from '../reducers/productsReducer'
import usersReducer from './userReducer'
const { combineReducers } = require('redux')

const rootReducer = combineReducers({
    productsRed: productsReducer,
    usersRed: usersReducer
})

export default rootReducer