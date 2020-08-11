import React, { useState } from "react";
import { Formik } from "formik";
import { Form, SubmitButton, Input } from "formik-antd";
import { Row, Col, Button } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
export default function ProfilePassword(props) {
    let {matKhau,taiKhoan,hoTen,soDT,maLoaiNguoiDung,maNhom,email}=props.thongtinuser;
  const [updatePassword, setUpdatePassword] = useState({
    taiKhoan:'',
    matKhau,
    hoTen:'',
    soDT:'',
    maLoaiNguoiDung:'',
    maNhom:'',
    email:'',
    matKhauMoi:''
  });
  
  return (
    <Formik initialValues={updatePassword}
        onSubmit={(value,actions)=>{
           actions.setSubmitting(false);
           actions.submitForm();
        }}>
      {(props) => (
        <Form>
          <div style={{padding:20}}>
            <Form.Item labelCol={{xs:8}}wrapperCol={{xs:8}} name="matKhau" label="Mật khẩu cũ">
              <Input.Password style={{height:45}} disabled={true} name="matKhau" />
            </Form.Item>
            <Form.Item labelCol={{xs:8}}wrapperCol={{xs:8}}  name="matKhauMoi" label="Mật khẩu mới">
              <Input.Password style={{height:45}} name="matKhauMoi" />
            </Form.Item>

            <Row>
                <Col offset={11}>
                   <ButtonGroup>
                       <SubmitButton style={{width:'auto',height:40,fontWeight:'bold'}}>Cập nhật </SubmitButton>
                   </ButtonGroup>
                </Col>
            </Row>
          </div>
        </Form>
      )}
    </Formik>
  );
}
