const initialState = {
    name: "",
    username: "",
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                name: action.payload.name,
                username: action.payload.username,
                token: action.payload.token,
                role: action.payload.role
            }
        case 'NEW_USER':
            return {
                ...state,
                name: action.payload.name,
                username: action.payload.username,
        }
    
            default:
                return state
        }
}
    
    
export default usersReducer