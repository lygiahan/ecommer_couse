import React, { useState, Fragment, useEffect } from "react";
import {
  Layout,
  Row,
  Col,
  Badge,
  Button,
  Avatar,
  Popover,
  List,
  Typography,
  Cascader,
  AutoComplete,
  Input,
} from "antd";
import {
  ShoppingCartOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import classes from "./Header.module.scss";
import { Link, useHistory, NavLink } from "react-router-dom";
import HeaderDrawer from "../../HeaderDrawer";
import { connect, useDispatch } from "react-redux";
import { actSignout } from "../../action/creator";
import NoCart from "../../NoCart";

function Header(props) {
  const searchResult = (query) =>
    props.listcourse
      .filter(
        (fil) =>
          fil.tenKhoaHoc.toUpperCase().trim().indexOf(query.toUpperCase().trim()) !== -1
      )
      .map((item, idx) => {
        const category = `${item.tenKhoaHoc} `;
      
        return {   
          value: category ,
          label: (
            <NavLink to={`/course-detail/${item.maKhoaHoc}`}>
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
                  
               <ul>
             
                   <li>{item.tenKhoaHoc}</li>

               </ul>
            </div>
            </NavLink>

          ),
        };
      });
  const dispatch = useDispatch();
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const [option, setOption] = useState([]);

  const handleSearch = (value) => {
    setOption(value ? searchResult(value) : []);
  };
  const onSelect = (value) => {
  
  };
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const logoutUser = () => {
    dispatch(actSignout(history));
  };

  const contentTheLoai = (
    <div>
      <ul style={{ listStyle: "none" }}>
        {props.listcourse.map((item, index) => {
          return (
            <Link
            key={index}
            className={classes.theloai_item_link}
            to={`/course-detail/${item.maKhoaHoc}`}
          >
            <li  className={classes.theloai_item}>
             
                {item.tenKhoaHoc}
            </li>
            </Link>

          );
        })}
      </ul>
    </div>
  );

  const contentCart = (
    <div style={{ width: "200px" }}>
      <Typography.Title level={4}>
        {props.listcart.length}:Khóa học
      </Typography.Title>
      {props.listcart.length > 0 ? (
        <List
          itemLayout="horizontal"
          dataSource={props.listcart}
          renderItem={(item) => (
            <List.Item className={classes.hover}>
              <List.Item.Meta
                avatar={
                  <Avatar src={item.hinhAnh} size={"large"} shape="square" />
                }
                title={item.tenKhoaHoc}
                description={item.moTa.slice(0, 20) + "..."}
              />
            </List.Item>
          )}
        ></List>
      ) : (
        <NoCart />
      )}
    </div>
  );
  return (
    <Layout>
      <Layout.Header className={classes.app_header}>
        <Row className={classes.app_header_row}>
          <Col md={3}>
            <Link to="/">
              <img
                alt="img"
                style={{ width: 160, paddingBottom: 13, paddingLeft: 7 }}
                src="https://themes.muffingroup.com/be/carrental2/wp-content/uploads/2019/09/carrental2.png"
              />
            </Link>
          </Col>
          <Col md={2}>
            <Popover content={contentTheLoai}>
              <h3 style={{ cursor: "pointer" }}>Thể loại</h3>
            </Popover>
          </Col>
          <Col md={8} style={{ marginBottom: 30 }}>
            <AutoComplete
              style={{ width: "100%", borderRadius: 20, height: "100%" }}
              className={classes.app_header_row_search}
              dropdownMatchSelectWidth={252}
              options={option}
              onSelect={onSelect}
              onSearch={handleSearch}
            >
              <Input.Search
                className={classes.app_header_row_search_item}
                size="large"
                enterButton
                placeholder="Tìm khóa học"
              />
            </AutoComplete>
          </Col>

          <Col md={3}></Col>
          <Col md={3}></Col>
          <Col md={1} style={{ textAlign: "left" }}>
            <Popover content={contentCart}>
              <Badge count={props.listcart.length} showZero>
                <Link to={"/cart"}>
                  <ShoppingCartOutlined
                    style={{ fontSize: 28, color: "black" }}
                  />
                </Link>
              </Badge>
            </Popover>
          </Col>
          {props.userlogin ? (
            <Col md={4}>
              <div style={{ paddingBottom: 20 }}>
                <Popover
                  content={
                    <div>
                      <Link to="/profile">
                        <Button>Thông tin</Button>
                      </Link>
                      <Button
                        onClick={logoutUser}
                        style={{ display: "block", marginTop: 10 }}
                      >
                        Đăng xuất
                      </Button>
                    </div>
                  }
                >
                  <Link to="/profile">
                    <Avatar size={55}>
                      {props.userlogin
                        ? props.userlogin.hoTen.slice(0, 1).toUpperCase()
                        : null}
                    </Avatar>
                  </Link>
                </Popover>
              </div>
            </Col>
          ) : (
            <Fragment>
              
              <Col md={2} style={{paddingBottom:10}}>
                <Link to="/login">
                  <Button
                    size="large"
                    className={classes.app_header_row_btnlogin}
                    type="default"
                  >
                    Đăng nhập
                  </Button>
                </Link>
              </Col>
              <Col md={2} style={{paddingBottom:10}}>
                <Link to="/signup">
                  <Button
                    size="large"
                    className={classes.app_header_row_btnregister}
                  >
                    Đăng ký
                  </Button>
                </Link>
              </Col>
            </Fragment>
          )}
        </Row>
        <div className={classes.app_header_repon}>
          <h1>
            <UnorderedListOutlined onClick={showDrawer} title="click" />
          </h1>
        </div>
        <HeaderDrawer
          onClose={onClose}
          visible={visible}
          listcart={props.listcart}
        />
      </Layout.Header>
    </Layout>
  );
}

const mapStateToprops = (state) => ({
  listcart: state.CartReducer,
  userlogin: state.UserReducer.signin,
  update: state.UserReducer.updatethongtin,
  // admin:state.AdminReducer.adminlogin,
  category: state.CourseReducer.categoryCourses,
  listcourse: state.CourseReducer.listCourse,
});
export default connect(mapStateToprops)(Header);
