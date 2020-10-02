import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import UserActions from '../redux/actions/UserActions'

const LogOut =  (props) =>{
   
    useEffect(()=> {
        
        props.unlogUser()
        
        
    }, [])
    return(
        null
    )
}

const mapDispatchToProps={
    unlogUser : UserActions.unlogUser
}

export default connect(null, mapDispatchToProps)(LogOut)