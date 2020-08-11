import React from "react";
import {
  Form,
  SubmitButton,
  Input,
} from "formik-antd";
import { Formik } from "formik";
import classes from "./SignIn.module.scss";
import { Typography, Row, Col, Button } from "antd";
import { useDispatch } from "react-redux";
import { actSignIn } from "../../action/creator";
import { useHistory } from "react-router-dom";

export default function SignIn(props) {
        const dispatch =   useDispatch();
        const history = useHistory();
  const validateRequired = (value) => {
    return value ? undefined : "required";
  };
  return (
    <Formik
      initialValues={{
        taiKhoan: "",
        matKhau: "",
      }}
      onSubmit={(value, actions) => {
        dispatch(actSignIn(value,history));
        actions.setSubmitting(false);
        actions.resetForm();
      }} >
      {(props) => (
        <Form
          className={classes.signin_form}
          labelCol={{ xs: 6 }}
          wrapperCol={{ xs: 16 }}
        >
          <div className={classes.signin_form_content}>
            <Typography.Title
              level={2}
              underline
              style={{ textAlign: "center", color: "#1DA57A" }}
            >
              Đăng nhập
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
            <Form.Item
              label="Mật khẩu"
              name="matKhau"
              required={true}
              validate={validateRequired}
            >
              <Input.Password name="matKhau" placeholder="Mật khẩu" />
            </Form.Item>
           
           
            <Row>
              <Col offset={9}>
                <Button.Group>
                  <SubmitButton className={classes.signin_form_content_btn} size="large" shape="round">
                    Đăng nhập{" "}
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
