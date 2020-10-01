const initialState = {
    username: "",
    token: "",
    rol: ""
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                username: action.payload.username,
                token: action.payload.token,
                role: action.payload.role
            }
    
        case 'SET_USER':    
            return {
                ...state,
                username: action.payload.username,
                token: action.payload.token,
                role: action.payload.role
            }

        default:
            return state
    }
}
    
    
export default usersReducer