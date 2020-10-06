import axios from 'axios'
// import SweetAlert from 'react-native-sweet-alert';

const UserActions = {

  createUser: (newUser) => {
      return async (dispatch, getState) => {
<<<<<<< HEAD
        const res = await axios.post("http://localhost:4000/api/users", newUser)
        console.log(res.data)
=======
        const res = await axios.post("http://12545187ac1b.ngrok.io/api/users", newUser)
        
>>>>>>> 1a99ccb97ab71d8d5d6cf0665d6cba3869bb0f38
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
          
          return {
              success: true,
              username: res.data.response.name
          }
        }

      }
  },

  logUser: (user) => {
    return async (dispatch, getState) => {
<<<<<<< HEAD
      const res = await axios.post("http://127.0.0.1:4000/api/user", user )
      console.log(res.data)
=======
      const res = await axios.post("http://12545187ac1b.ngrok.io/api/user", user )
      
>>>>>>> 1a99ccb97ab71d8d5d6cf0665d6cba3869bb0f38

      if (res.data.success !== true) {
        return res.data.message
      } else {
        //alert
          dispatch({
              type: "SET_USER",
<<<<<<< HEAD
              payload: res.data.response
=======
              payload: {
                username: res.data.response.username,
                token: res.data.response.token
              }
>>>>>>> 1a99ccb97ab71d8d5d6cf0665d6cba3869bb0f38
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
        const res = await axios.get('http://12545187ac1b.ngrok.io/api/tokenVerificator', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
       
        dispatch({
            type: "SET_USER",
            payload: {
                username: res.data.response.username,
                token: token,
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
