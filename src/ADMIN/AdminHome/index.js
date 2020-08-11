import React, { Fragment } from "react";
import { Row, Col, Layout, Menu, Typography } from "antd";
import AdminHeader from "../AdminHeader/adminHeader";
import {connect} from 'react-redux';
import SubMenu from "antd/lib/menu/SubMenu";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import AdminContent from "../AdminContent";
 function ADMIN(props) {
  return (
    <Layout>
       <AdminHeader thongtinAdmin={props.thongtinAdmin}/>
        <AdminContent />
    </Layout>

  );
}
const mapStateToProps =state=>{
    return{
        thongtinAdmin:state.AdminReducer.adminlogin
    }
}
export default connect(mapStateToProps)(ADMIN);