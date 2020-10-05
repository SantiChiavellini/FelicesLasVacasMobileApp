import axios from 'axios'
// import SweetAlert from 'react-native-sweet-alert';

const UserActions = {

  createUser: (newUser) => {
      return async (dispatch, getState) => {
        const res = await axios.post("http://229173f21f78.ngrok.io/api/users", newUser)
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
              token: res.data.response.token
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
      const res = await axios.post("http://229173f21f78.ngrok.io/api/user", user )
      

      if (res.data.success !== true) {
        return res.data.message
      } else {
        //alert
          dispatch({
              type: "SET_USER",
              payload: {
                username: res.data.response.username,
                token: res.data.response.token
              }
          })
          return {
            success: true,
            name: res.data.response.name
          }
      }
    };
  },
  forcedLogIn: token => {
    return async (dispatch, getState) => {
        const res = await axios.get('http://229173f21f78.ngrok.io/api/tokenVerificator', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        
        dispatch({
            type: "SET_USER",
            payload: {
                username: res.data.response.username,
                token: token, 
                role: res.data.response.role, 
                name: res.data.response.name
            }
        })
        return res.data.response.username
    }
  },
  unlogUser : () => {
    return (dispatch, getState) =>{
        dispatch({
            type: "UNLOG_USER_FROM_APP"
        })
    }
  },
}
export default UserActions
