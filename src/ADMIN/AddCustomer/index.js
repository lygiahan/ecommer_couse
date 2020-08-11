import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Row, Col, Menu, Typography } from "antd";
import classes from "./AddCustomer.module.scss";
import { Formik } from "formik";
import { Form, Input, SubmitButton,AutoComplete, FormikDebug,Select } from "formik-antd";
import ButtonGroup from "antd/lib/button/button-group";
import { actAddCustomer } from "../../action/creator";
import {connect} from 'react-redux';
function AddCustomer(props) {
  const history = useHistory();
  return (
    <div className={classes.customer_layout}>
      <div>
        <Button style={{fontSize:30,height:'auto',width:'auto'}} type="primary" onClick={() => history.goBack()}>
          Quay lại
        </Button>
      </div>
      <div style={{textAlign:'center'}}>
          <Typography.Title level={1}>Thêm Người Dùng</Typography.Title>
      </div>
      <Formik
        initialValues={{
          taiKhoan: "",
          matKhau: "",
          hoTen: "",
          soDT: "",
          maLoaiNguoiDung: "HV",
          maNhom: "GP01",
          email: "",
        }}
        onSubmit={(value,actions)=>{
            props.dispatch(actAddCustomer(value));
            actions.setSubmitting(false);
            actions.resetForm();
        }}
      >
        {(props) => (
          <Form>
            <div>
              <Form.Item
                labelCol={{ xs: 8 }}
                wrapperCol={{ xs: 8 }}
                name="taiKhoan"
                label="Tài khoản"
              >
                <Input name="taiKhoan" style={{ height: 35 }} />
              </Form.Item>
              <Form.Item
                labelCol={{ xs: 8 }}
                wrapperCol={{ xs: 8 }}
                name="matKhau"
                label="Mật khẩu"
              >
                <Input name="matKhau" style={{ height: 35 }} />
              </Form.Item>
              <Form.Item
                labelCol={{ xs: 8 }}
                wrapperCol={{ xs: 8 }}
                name="hoTen"
                label="Họ Tên"
              >
                <Input name="hoTen" style={{ height: 35 }} />
              </Form.Item>
              <Form.Item
                labelCol={{ xs: 8 }}
                wrapperCol={{ xs: 8 }}
                name="soDT"
                label="Số điện thoại"
              >
                <Input name="soDT" style={{ height: 35 }} />
              </Form.Item>
              <Form.Item
                labelCol={{ xs: 8 }}
                wrapperCol={{ xs: 8 }}
                name="maLoaiNguoiDung"
                label="mã loại "
                
              >
               <Select showArrow={true} name="maLoaiNguoiDung" >
                  <Select.Option value="HV">HV</Select.Option>
                  <Select.Option value="GV">GV</Select.Option>

                 </Select>

              </Form.Item>
              <Form.Item
                labelCol={{ xs: 8 }}
                wrapperCol={{ xs: 8 }}
                name="maNhom"
                label="Mã nhóm"
              >
                   <Select style={{height:35}} name="maNhom"
               showArrow={true}>
                    <Select.Option value="GP01">GP01</Select.Option>
                    <Select.Option value="GP02">GP02</Select.Option>
                    <Select.Option value="GP03">GP03</Select.Option>
                    <Select.Option value="GP04">GP04</Select.Option>
                    <Select.Option value="GP05">GP05</Select.Option>
                    <Select.Option value="GP06">GP06</Select.Option>
                    <Select.Option value="GP07">GP07</Select.Option>
                    <Select.Option value="GP08">GP08</Select.Option>
                    <Select.Option value="GP09">GP09</Select.Option>

                 </Select>
              </Form.Item>
              <Form.Item
                labelCol={{ xs: 8 }}
                wrapperCol={{ xs: 8 }}
                name="email"
                label="Email"
              >
                <Input name="email" style={{ height: 35 }} />
              </Form.Item>

              <Row>
                <Col offset={11}>
                  <ButtonGroup>
                    <SubmitButton
                      style={{ padding: "7px 30px",height:40,fontSize:18, fontWeight: "bold" }}
                    >
                      Thêm
                    </SubmitButton>
                  </ButtonGroup>
                </Col>
              </Row>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default  connect()(AddCustomer);