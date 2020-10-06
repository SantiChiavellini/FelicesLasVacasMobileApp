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
            // console.log(e)
        }
    }

const getMyObject = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('cart')
          
          return jsonValue != null ? JSON.parse(jsonValue) : null
        } catch(e) {
          // read error
        }
      
        console.log('Done.')
      
      }
    switch (action.type) {

        case 'GET_PRODUCTS_USER':
            return {
                ...state,
                products: action.payload,
            }
        
        case 'ADD_TO_CART':
            var exist = false
            var newProducts =  state.cartProducts
            
            newProducts.map(product => {
                if (product.product._id === action.payload.product._id){
                    exist = true
                    product.quantity = parseInt(product.quantity) + parseInt(action.payload.quantity)
                }
            })
            
            if (exist){
                return {
                    ...state,
                    cartProducts:newProducts
                }
            }else{
                newProducts.push(action.payload)
                return{
                    ...state,
                    cartProducts: newProducts
                }
            }
            
            
            
         /*    storeData(JSON.stringify(newProducts)) */
            
            
        case 'UP_QUANTITY':
            var newProducts = state.cartProducts
            newProducts.map(product =>{
                if (product.product._id === action.payload){
                    product.quantity = parseInt(product.quantity) + 1
                }
            })
            
            

           /*  storeData(JSON.stringify(state.cartProducts)) */
            return {
                ...state,
                cartProducts: newProducts
            }
        case 'DOWN_QUANTITY':
            var newProducts = state.cartProducts
            
            newProducts.map(product =>{
                if (product.product._id === action.payload){
                    product.quantity = parseInt(product.quantity) - 1
                }
            })
            
            
            /* storeData(JSON.stringify(state.cartProducts)) */
            return {
                ...state,
                cartProducts: newProducts
            }   
        
        case "DELETE_PRODUCT":
            
         
            var newProducts = state.cartProducts.filter( product =>
                product.product._id !== action.payload
            )
            
            
            
            /* storeData(JSON.stringify(newProducts)) */
            return{
                ...state,
                cartProducts: newProducts
            }
        case "DELETE_CART":

            return{
                ...state,
                cartProducts:[]
            }

        /* case "FORCE_CART":

            setTimeout(async () => {
            let cart
            cart = null
            try {
                cart = await AsyncStorage.getItem('cart');
                var cartObject = JSON.parse(cart)
                
                return{
                    ...state,
                    cartProducts: cartObject
                }

            }catch(e){
                console.log(e);
            }
            },1000)
            return{
                ...state
            } */
        default:
            return state
    }
}

export default productsReducer