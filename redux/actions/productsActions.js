import axios from "axios"
/* import auxiliares from '../../shared/auxiliares' */

const productsActions = {
    getProducts: () => {
        return async (dispatch, getState) => {
            
            const res = await axios.get("http://a16e1d0b6f68.ngrok.io/api/items")
            console.log(res,'Algo para que sepa que es la respuesta')
            dispatch({
                type: 'GET_PRODUCTS_USER',
                payload: res.data.products,
            })
        
        }
    },
    getProductById: (idProduct) => {
        return async (dispfatch, getState) => {
            const res = await axios.get("http://a16e1d0b6f68.ngrok.io/api/items/"+idProduct)
            
            dispatch({
                type: "GET_PRODUCT"
            })
            return res.data.response.product
        }
    },
    addToCart: (product, quantity) =>{
        return async (dispatch, getState) =>{
            dispatch({
                type: "ADD_TO_CART",
                payload: {
                    quantity,
                    product
                }
            })
        }
    },
    addProducts:(productId) =>{
        return async (dispatch, getState) =>{
            dispatch({
                type: "UP_QUANTITY",
                payload: productId
            })
        }
    },
    removeProducts:(productId) =>{
        return async (dispatch, getState) =>{
            dispatch({
                type: "DOWN_QUANTITY",
                payload: productId
            })
        }
    },
    deleteProducts:(productId) =>{
        return async (dispatch, getState) =>{
            dispatch({
                type: "DELETE_PRODUCT",
                payload: productId
            })
        }
    },
    forcedCart:() =>{
        return async (dispatch, getState) =>{
            dispatch({
                type: "FORCE_CART"
            })
        }
    }
}

export default productsActions