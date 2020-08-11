import React, { useEffect, Fragment } from "react";
import { useDispatch, connect } from "react-redux";
import { actGetThongTinUser } from "../../action/creator";
import { Row, Col, Avatar, Typography, Tabs } from "antd";
import classes from "./Profile.module.scss";
import ProfileForm from "../ProfileForm";
import ProfilePassword from "../ProfilePassword";
import ProfileCourse from "../ProfileCourse";
import Footer from "../../Layout/Footer";
function Profile(props) {
  let { thongtinuser } = props;
  useEffect(() => {
    let tk = JSON.parse(localStorage.getItem("tk"));
    let mk = JSON.parse(localStorage.getItem("mk"));
    let data = { taiKhoan: tk, matKhau: mk };
    props.dispatch(actGetThongTinUser(data));
  },[props.update]);
  
  return (
    <Fragment>
      {thongtinuser ? (
        <div className={classes.profile}>
          <div className={classes.profile_user}>
            <Row>
              <Col md={24}>
                <Avatar size={114} style={{ backgroundColor: "#686f7a" }}>
                  <h1 style={{ color: "white", fontSize: 50 }}>
                    {thongtinuser.hoTen.slice(0, 1).toUpperCase()}
                  </h1>
                </Avatar>
              </Col>
            </Row>
            <Row>
              <Col md={24}>
                <Typography.Title level={4}>
                  {thongtinuser.hoTen}
                </Typography.Title>
              </Col>
            </Row>
          </div>
          <hr></hr>

          <div style={{textAlign:'center'}}>
            <Tabs centered defaultActiveKey="1" type="card"  size="large" tabPosition="top">
              <Tabs.TabPane active={true} tab="Thông tin" key="1">
                  <ProfileForm thongtinuser={props.thongtinuser} update={props.update}/>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Đổi mật khẩu" key="2">
                  <ProfilePassword thongtinuser={props.thongtinuser}  />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Khóa học của bạn" key="3">
                   <ProfileCourse thongtinuser={props.thongtinuser}/>
              </Tabs.TabPane>
            </Tabs>
          </div>
        </div>
      ) : (
        3
      )}
      <Footer />
    </Fragment>
  );
}
const mapStateToprops = (state) => ({
  thongtinuser: state.UserReducer.thongtin,
  update:state.UserReducer.updatethongtin
});
export default connect(mapStateToprops)(Profile);
