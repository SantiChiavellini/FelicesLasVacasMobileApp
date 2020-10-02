import AsyncStorage from "@react-native-community/async-storage"

const initialState = {
    username: "",
    token: ""
}

const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('token', value)
    }catch(e){
        console.log(e)
    }
}

const deleteData = async () => {
    try {
        await AsyncStorage.removeItem('token')
    }catch(e){
        console.log(e)
    }
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            console.log(typeof(action.payload.token))
            /* storeData(action.payload.token) */
            return {
                ...state,
                username: action.payload.username,
                token: action.payload.token
            }
        case 'UPDATE_USER':

            return {
                ...state,
                name: action.payload.name,
                username: action.payload.username,
                token: action.payload.token,
                
            }

            case "UNLOG_USER_FROM_APP":
                /* deleteData() */
                return{
                    ...state,
                    username:"",
                    token:"",
                    name:""
                }
        default:
            return state
    }
}
    
    
export default usersReducer