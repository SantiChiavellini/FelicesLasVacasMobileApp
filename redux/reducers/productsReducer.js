import  AsyncStorage  from "@react-native-community/async-storage"

const initialState = {
    products: [],
    cartProducts: []
}



const productsReducer = (state = initialState, action) => {
    
    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('cart', value)
        }catch(e){
            console.log(e)
        }
    }


    switch (action.type) {
        
        case 'ADD_TO_CART':
            
            var newProducts =  state.cartProducts
            newProducts.push(action.payload)
            
            storeData(JSON.stringify(newProducts))
            
            return{
                ...state,
                cartProducts: newProducts
            }
        case 'UP_QUANTITY':
            state.cartProducts.map(product =>{
                if (product.product._id === action.payload){
                    product.quantity +=1
                }
            })
            
            

            storeData(JSON.stringify(state.cartProducts))
            return state
        
        case 'DOWN_QUANTITY':
            state.cartProducts.map(product =>{
                if (product.product._id === action.payload){
                    product.quantity -=1
                }
            })
            
            
            storeData(JSON.stringify(state.cartProducts))
                return state    
        
        case "DELETE_PRODUCT":
            
            
            var newProducts = state.cartProducts.filter( product =>
                product.product._id !== action.payload
            )
            
            storeData(JSON.stringify(newProducts))
            return{
                ...state,
                cartProducts: newProducts
            }
        /*case "FORCE_CART":
            var cart = JSON.parse(AsyncStorage.getItem('cart'))
            
            return{
                ...state,
                cartProducts: cart
            } */
        default:
            return state
    }
}

export default productsReducer