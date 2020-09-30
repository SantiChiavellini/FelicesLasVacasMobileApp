import axios from 'axios'
// import SweetAlert from 'react-native-sweet-alert';


const UserActions = {

createUser: (newUser) => {
  
    return async (dispatch, getState) => {
        
      const res = await axios.post("http://127.0.0.1:4000/api/users", newUser)
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
        
        // await Swal.fire({  title: 'Welcome!',  text: `It´s nice to have you here, ${res.data.response.name}.`,  icon: 'success',  showConfirmButton: false, timer: 2000,allowOutsideClick: false})
        // await SweetAlert.showAlertWithOptions({
        //     title: 'Welcome!',
        //     subTitle: `It´s nice to have you here, ${res.data.response.name}.`,
        //     confirmButtonTitle: 'OK',
        //     confirmButtonColor: '#000',
        //     otherButtonTitle: 'Cancel',
        //     otherButtonColor: '#dedede',
        //     style: 'success',
        //     cancellable: true
        //   },
        //     callback => console.log('callback'));

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
