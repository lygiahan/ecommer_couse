import React, { Fragment } from "react";
import { Card, Col, Typography, Popover, Button } from "antd";
import classes from "./ListCourseItem.module.scss";
import { StarFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actAddToCart } from "../../action/creator";

export default function ListCourseItem(props) {
  const dispatch = useDispatch();
  let {
    maKhoaHoc,
    tenKhoaHoc,
    moTa,
    luotXem,
    hinhAnh,
    ngayTao,
    nguoiTao,
  } = props.course;

  const filterLuotXem = (luotxem) => {
    if (luotxem >= 10) {
      return (
        <Typography.Text mark strong>
          {" "}
          Khóa học hàng đầu
        </Typography.Text>
      );
    } else {
      return (
        <Typography.Text strong mark>
          Khóa học tốt nhất
        </Typography.Text>
      );
    }
  };

  const content = (
    <div style={{ width: "200px", height: "auto" }}>
      <Typography.Title level={4}>{tenKhoaHoc}</Typography.Title>
      {filterLuotXem(luotXem)}
      <div>
        <Typography.Text style={{ fontSize: 12, color: "#1DA57A" }}>
          {" "}
          Cập nhật: {ngayTao}
        </Typography.Text>
      </div>
      <Typography.Paragraph>
        {moTa.length > 60 ? moTa.slice(0, 60) + "..." : moTa}
      </Typography.Paragraph>

      <Button onClick={()=>addToCart(props.course)} style={{ width: "200px" }} type="primary" danger>
        Thêm Giỏ Hàng
      </Button>
         
         <Link to={`/course-detail/${maKhoaHoc}`}>
      <Button style={{ width: "200px", marginTop: 5 }} type="primary">
        Xem Chi Tiết
      </Button>
      </Link>
      
    </div>
  );
  const addToCart =(cart)=>{
      dispatch(actAddToCart(cart));
  }
  return (
    <Fragment>
      <Col md={6} sm={8} xs={24} className={classes.listcourse}>
        <Popover placement="leftTop" content={content}>
          <Link to={`/course-detail/${maKhoaHoc}`}>
          <Card
            className={classes.listcoure_item}
            hoverable
            cover={
              <img
                alt="example"
                src={hinhAnh}
                className={classes.listcourse_item_img}
              />
            }
          >
            <Card.Meta title={tenKhoaHoc} description={nguoiTao.hoTen} />
            <Card.Meta
              description={
                <div style={{ color: "#eb8a2f", marginTop: 5 }}>
                  4.7{" "}
                  <span style={{ marginRight: 5 }}>
                    <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled />{" "}
                    <StarFilled />
                  </span>
                  ({luotXem})
                </div>
              }
            ></Card.Meta>
         
              <div style={{paddingTop:10,display:'flex'}}>
                 <Card.Meta description="800.000 VNĐ"  style={{fontSize:20, textDecoration:'line-Through'}}/>
                 <Card.Meta description="Free"  style={{fontSize:20,color:'#ffe58f',letterSpacing:1 , marginLeft:10,fontWeight:'bold'}}/>
              </div>
              <Card.Meta
              style={{ marginTop: 8 }}
              description={filterLuotXem(luotXem)}
            />
          </Card>
      
          </Link>
        </Popover>
      </Col>
    </Fragment>
  );
}
