import AsyncStorage from "@react-native-community/async-storage"

const initialState = {
    username: "",
    token: "",
    isLoading: true
}

const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('token', value)
    }catch(e){
        // console.log(e)
    }
}

const deleteData = async () => {
    try {
        await AsyncStorage.removeItem('token')
    }catch(e){
        // console.log(e)
    }
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
           
            storeData(action.payload.token)
            return {
                ...state,
                username: action.payload.username,
                token: action.payload.token,
                isLoading: false

            }
        case 'UPDATE_USER':

            return {
                ...state,
                isLoading: false,
                username: action.payload.username,
                token: action.payload.token,
                
            }

            case "UNLOG_USER_FROM_APP":
                deleteData()
                return{
                    ...state,
                    username:"",
                    token:"",
                    isLoading: false

                }
        default:
            return state
    }
}
    
    
export default usersReducer