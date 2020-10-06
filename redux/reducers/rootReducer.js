/* import usersReducer from '../reducers/usersReducer' */
/* import adminReducer from '../reducers/adminReducer' */
import productsReducer from '../reducers/productsReducer'
import usersReducer from './userReducer'
const { combineReducers } = require('redux')

const rootReducer = combineReducers({
    usersRed: usersReducer,
    /*adminRed: adminReducer, */
    productsRed: productsReducer
})

export default rootReducer