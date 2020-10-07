import axios from "axios"

const productsActions = {
    getProducts: () => {
        return async (dispatch, getState) => {
            
            const res = await axios.get("http://92b8ae9c0640.ngrok.io/api/items")
            
            dispatch({
                type: 'GET_PRODUCTS_USER',
                payload: res.data.products,
            })
            return res.data.products
        }
    },
    getProductById: (idProduct) => {
        return async (dispatch, getState) => {
            const res = await axios.get("http://92b8ae9c0640.ngrok.io/api/items/"+idProduct)
            
            dispatch({
                type: "GET_PRODUCT"
            })
            return res.data.response.product
        }
    },
    addToCart: (product) =>{
        return async (dispatch, getState) =>{
            
            dispatch({
                type: "ADD_TO_CART",
                
                payload: {
                    quantity: product.quantity,
                    product: product.product
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
    },
    deleteAllProducts:()=>{
        return async(dispatch, getState)=>{
            dispatch({
                type:"DELETE_CART"
            })
        }
    },
    confirm:(products, token) =>{
        return async (dispatch, getState)=>{
            
            const res = await axios.post("http://92b8ae9c0640.ngrok.io/api/shopConfirm/",products
            , {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch({
                type:"DELETE_CART"
            }) 
            
        }
    }
}

export default productsActions