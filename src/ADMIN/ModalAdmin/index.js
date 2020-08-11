import React, { useState, useEffect } from "react";
import { Modal, Row, Col } from "antd";
import { connect } from "react-redux";
import { Formik } from "formik";
import { Form, Input, SubmitButton } from "formik-antd";
import ButtonGroup from "antd/lib/button/button-group";
import { actUpdateUser } from "../../action/creator";
function ModalAdmin(props) {
    console.log(props.hienthiform);
    // let {taiKhoan,matKhau,hoTen,soDT,maLoaiNguoiDung,maNhom,email} = props.hienthiform;
    
    let hienthiform= props.hienthiform?props.hienthiform:'';
    const [user,setUser]=useState(
        {
            taiKhoan:'',
            hoTen:'',
            soDT:'',
            matKhau:'',
            maLoaiNguoiDung:'',
            maNhom:'GP01',
            email:''
        }
    );
    useEffect(()=>{
      setUser({
          taiKhoan:hienthiform.taiKhoan,
          hoTen:hienthiform.hoTen,
            soDT:hienthiform.soDt,
            maLoaiNguoiDung:hienthiform.maLoaiNguoiDung,
            matKhau:user.matKhau,
            maNhom:'GP01',
            email:hienthiform.email

      })
    },[hienthiform])
  return (
    <Modal
      visible={props.visible}
      onOk={props.handleOk}
      onCancel={props.handleCan}
      cancelText
      footer
      title="Chỉnh sửa"
    >
         <Formik 
         initialValues={
            user
         }
         onSubmit={(value,actions)=>{
             console.log(value);
             props.dispatch(actUpdateUser(value));
             actions.setSubmitting(false);
             actions.resetForm();
         }}>
             {props =>(
                 <Form 
                 labelCol={{xs:5}}wrapperCol={{xs:15}}>
                     <Form.Item name="taiKhoan" label="Tài khoản">
                         <Input name="taiKhoan"/>
                     </Form.Item>
                     <Form.Item name="matKhau" label="Mật khẩu">
                         <Input name="matKhau"/>
                     </Form.Item>
                     <Form.Item name="hoTen" label="Họ tên">
                         <Input name="hoTen"/>
                     </Form.Item>
                     <Form.Item name="soDT" label="Số điện thoại">
                         <Input name="soDT"/>
                     </Form.Item>
                     <Form.Item name="maLoaiNguoiDung" label="Mã Loại">
                         <Input name="maLoaiNguoiDung"/>
                     </Form.Item>
                     <Form.Item name="maNhom" label="Mã nhóm">
                         <Input name="maNhom"/>
                     </Form.Item>
                     <Form.Item name="email" label="Email">
                         <Input name="email"/>
                     </Form.Item>
                     <Row>
                         <Col offset={11}>
                            <ButtonGroup>
                                <SubmitButton>Sửa</SubmitButton>
                            </ButtonGroup>
                         </Col>
                     </Row>
                 </Form>
             )}
         </Formik>
    </Modal>
  );
}
const mapStateToprops = state=>{
  return{
      hienthiform:state.AdminReducer.hienthiUser
  }
}
export default connect(mapStateToprops)(ModalAdmin);
