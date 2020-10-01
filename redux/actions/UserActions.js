import axios from 'axios'
// import SweetAlert from 'react-native-sweet-alert';


const UserActions = {

createUser: (newUser) => {
    return async (dispatch, getState) => {
        
      const res = await axios.post("http://localhost:4000/api/users", newUser)
      const error ={
        mail:"",
        username:""
        }
 
      if(!res.data.success && res.data.response !== undefined){
        if(res.data.response.errors.mail !== undefined){
          error.mail = "Ese email ya esta en uso"
        }
        if(res.data.response.errors.username !== undefined){
          error.username = "Ese nombre de usuario ya esta en uso"
        }
        return error
        
      }else{
        
        dispatch({
          type: "SET_USER",
          payload: {  
            username: res.data.response.username,
            token: res.data.response.token,
            role: res.data.response.role
          },
        });
        console.log(res.data)
        return {
            success: true,
            username: res.data.response.name
        }
      }

    };
}
}
export default UserActions
