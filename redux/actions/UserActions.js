import axios from 'axios'
// import SweetAlert from 'react-native-sweet-alert';

const UserActions = {

  createUser: (newUser) => {
      return async (dispatch, getState) => {
        const res = await axios.post("http://localhost:4000/api/users", newUser)
        console.log(res.data)
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
          //alert
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

      }
  },

  logUser: (user) => {
    return async (dispatch, getState) => {
      const res = await axios.post("http://127.0.0.1:4000/api/user", user )
      console.log(res.data)

      if (res.data.success !== true) {
        return res.data.message
      } else {
        //alert
          dispatch({
              type: "SET_USER",
              payload: res.data.response
          })
          return {
            success: true,
            name: res.data.response.name
          }
      }
    };
  },

}
export default UserActions
