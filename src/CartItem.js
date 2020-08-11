import React, { Fragment, useState } from 'react'
import { List, Avatar, Col, Popconfirm, message, Switch, Typography } from 'antd'
import { DeleteFilled, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { actRegisterCourse, actDeleteCart } from './action/creator';
import { useDispatch } from 'react-redux';
import {connect} from 'react-redux';

 function CartItem(props) {
    const dispatch =useDispatch();
    let {hinhAnh,moTa,biDanh,tenKhoaHoc,maKhoaHoc} = props.item;
    const [isboo,setIsbool] =useState(false);
    const conFirm =(id)=>{
        dispatch(actDeleteCart(id));
    }
    const onCance =(e)=>{
        message.error('Tạm dừng thành công')
    }
     function handleChangeisBool(isboolen){
       setIsbool(!isboolen);
       if(!props.userlogin){
         alert('Vui lòng đăng nhập để ghi danh');   
         message.error('ghi danh không thành công')
         setIsbool(false)
         return;
       }
       else{
         setIsbool(true);
         let tk = JSON.parse(localStorage.getItem('tk'));
         let data = {taiKhoan:tk,maKhoaHoc:maKhoaHoc};
            setIsbool(true);
            dispatch(actRegisterCourse(data));

       }
       
       
     }
    return (
        <Fragment>
          <Col md={16} sm={20}xs={24}>
          <List itemLayout="vertical" >
               <List.Item >
                   <List.Item.Meta
                   avatar={<Avatar shape="square"style={{height:100,width:130}} src={hinhAnh}/>}
                   title={props.item.tenKhoaHoc}
                   description={moTa}/>
                   
               </List.Item>
            </List>
          </Col>
          <Col md={4}sm={2}xs={4}>
            <div style={{textAlign:'center',paddingTop:40}}>
            <Popconfirm
              title="Bạn có muốn xóa không"
              okText="Yes"
              onConfirm={()=>conFirm(maKhoaHoc)}
              
              onCancel={onCance}
              cancelText="No">
               <DeleteFilled  style={{fontSize:25}} title="Xóa"/>
              </Popconfirm>
            </div>
          </Col>
          <Col md={4} sm={2}xs={4}>
            <div style={{paddingTop:40,textAlign:'center'}}>
            <Switch
            onClick={()=>handleChangeisBool(isboo)}
         
              
              // checkedChildren={<CheckOutlined />}
              // unCheckedChildren={<CloseOutlined />}
              />
              <Typography.Text strong style={{paddingLeft:10,fontSize:15}}>Ghi Danh</Typography.Text>
            </div>  
          </Col>
        </Fragment>
    )
}
const mapStateToProps = state=>{
 return{
  userlogin: state.UserReducer.signin,
  isregister:state.UserReducer.isregister
 } };
export default connect(mapStateToProps)(CartItem);