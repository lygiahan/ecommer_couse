import React, { Fragment } from "react";
import { Layout, Row, Col, Typography, Avatar, Popover, Button } from "antd";
import classes from "./AdminHeader.module.scss";
import { actAdminLogout } from "../../action/creator";
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom'
 function AdminHeader(props) {
  const history = useHistory();

  const logoutAdmin =()=>{
      props.dispatch(actAdminLogout(history));
  }
  const contentHeader = (
    <Fragment>
      <div>
        <Button onClick={logoutAdmin} type="ghost">Đăng xuất</Button>
      </div>
    </Fragment>
  );

  return (
    <Layout.Header className={classes.header_admin}>
      <Row style={{ paddingTop: 8 }}>
        <Col md={12}>
          <div style={{ textAlign: "center" }}>
            <Typography.Title style={{ letterSpacing: 15, fontSize: 55 }}>
              ADMIN
            </Typography.Title>
          </div>
        </Col>
        <Col md={12}>
          <div style={{ textAlign: "right" }}>
            <Popover content={contentHeader}>
              <Avatar alt="img" size={64}>
                <h1>{props.thongtinAdmin.hoTen.slice(0, 1).toUpperCase()}</h1>
              </Avatar>
            </Popover>
          </div>
        </Col>
      </Row>
    </Layout.Header>
  );
}

export default connect()(AdminHeader);