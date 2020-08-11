import React, { useEffect } from 'react';
import './App.less';
import Home from './pages/Home';
import { BrowserRouter as Router,Switch,Route,useHistory, Redirect } from "react-router-dom";
import Header from './Layout/Header';
import DetailCourse from './pages/DetailCourse';
import Cart from './pages/Cart';
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
import {connect} from 'react-redux';
import { Reduxthunk } from './action/creator';
import { LOGIN, ADMIN_LOGIN } from './action/type';
import Profile from './Users/Profile';
import Privateroute from './PrivateRoute';
import ADMIN from './ADMIN/AdminHome';
import Footer from './Layout/Footer';
import AddCustomer from './ADMIN/AddCustomer';
import AddCourses from './ADMIN/AddCourses';
function App(props) {
  const history = useHistory();
  useEffect(()=>{
       let local =  localStorage.getItem('userlogin');
       let maloai = JSON.parse(localStorage.getItem('maloai'));
       let adminlogin = JSON.parse(localStorage.getItem('adminlogin'));
       let token = localStorage.getItem('token');
       if(local && maloai==="HV" && token){
          let get = JSON.parse(local);
          props.dispatch(Reduxthunk(LOGIN,get))    
       }
       else{
         props.dispatch(Reduxthunk(ADMIN_LOGIN,adminlogin))
           
       }
       if(props.adminheader){
         props.history.push('/admin')
       }
  },[])

  return (
    <div className="App">        
       <Router>
        {props.adminheader ? <Privateroute exact path="/admin" component={ADMIN}/>
: <Header />} 
           <Switch>
                <Route exact path="/"  component={Home}/>
                <Route exact path="/course-detail/:id" component={DetailCourse} />      
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login"component={SignIn }/>
                <Route exact path='/profile' component={Profile}/>
                <Privateroute path='/admin-add-customer' component={AddCustomer}/>
                <Privateroute path="/admin-add-course"component={AddCourses}/>
           </Switch>
       </Router>
    </div>
  );
}
const mapStateToProps =state =>({adminheader:state.AdminReducer.adminlogin})
export default connect(mapStateToProps)(App); 
