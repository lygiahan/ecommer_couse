import React from "react";
import {
  Form,
  SubmitButton,
  Input,
  
} from "formik-antd";
import { Formik } from "formik";
import classes from "./Signup.module.scss";
import { Typography, Row, Button, Col } from "antd";
import { connect, useDispatch } from "react-redux";
import { actSignUp } from "../../action/creator";
import {useHistory} from 'react-router-dom'
function Signup(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const validateRequired =(value)=>{
    return value ? undefined :'required'
  }
  return (
    <Formik
      initialValues={{
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        soDT: "",
        email: "",
        maNhom: "GP01"
      }}
      onSubmit={(value, actions) => {
        dispatch(actSignUp(value,history));
        actions.resetForm();
      }} >
      {(props) => (
        <Form
          className={classes.signup_form}
          labelCol={{ xs: 6 }}
          wrapperCol={{ xs: 16 }}
        >
          <div className={classes.signup_form_content}>
            <Typography.Title
              level={2}
              underline
              style={{ textAlign: "center", color: "#1DA57A" }}
            >
              Đăng ký
            </Typography.Title>
            <Form.Item
              name="taiKhoan"
              label="Tài khoản"
              showValidateSuccess={true}
              required={true}
              validate={validateRequired}
            >
              <Input name="taiKhoan" placeholder="Tài khoản" />
            </Form.Item>
            <Form.Item label="Mật khẩu" name="matKhau"required={true} validate={validateRequired}
            >
              <Input.Password name="matKhau" placeholder="Mật khẩu" />
            </Form.Item>
            <Form.Item label="Họ tên" name="hoTen"  validate={validateRequired}>
              <Input name="hoTen" placeholder="Họ tên" />
            </Form.Item>
            <Form.Item label="Số điện thoại" name="soDT" validate={validateRequired}>
              <Input name="soDT" placeholder="Số điện thoại" />
            </Form.Item>
            <Form.Item label="Email" name="email" validate={validateRequired}>
              <Input name="email" placeholder="Email" />
            </Form.Item>
            <Row>
              <Col offset={9}>
                <Button.Group>
                  <SubmitButton size="large" shape="round">
                    Đăng ký{" "}
                  </SubmitButton>
                </Button.Group>
              </Col>
            </Row>
          </div>
        </Form>
      )}

    </Formik>
  );
}

export default connect()(Signup);
