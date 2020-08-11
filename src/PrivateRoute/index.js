import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function Privateroute({component:Component,...rest}) {
    return (
        <Route {...rest} render={()=>{
            let token = localStorage.getItem('token');
            let adminlogin= localStorage.getItem('adminlogin');
            if(token && adminlogin){
                return <Component {...rest}/>
            }
            return <Redirect to='/'/>
        }}>
            
        </Route>
    )
}
