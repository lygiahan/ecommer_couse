import React, { useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { actDetailCourse, actAddToCart } from "../../action/creator";
import { connect } from "react-redux";
import classes from "./DetailCourse.module.scss";
import { Typography, Row, Col, Button } from "antd";
import { StarFilled } from "@ant-design/icons";
import Footer from "../../Layout/Footer";
function DetailCourse(props) {
  const { id } = useParams();
  let detail = props.detail;
  useEffect(() => {
    props.dispatch(actDetailCourse(id));
  }, [id]);
  const mapLuotXem = (luotxem) => {
    if (luotxem >= 10) {
      return (
        <Typography.Text mark strong>
          Khóa học hàng đầu
        </Typography.Text>
      );
    } else {
      return <Typography.Text mark>Khóa học tốt nhất</Typography.Text>;
    }
  };

  const addToCart =(cart)=>{
      props.dispatch(actAddToCart(cart));
  }
  return (
      <Fragment>
    <div className={classes.course_landing}>
      {detail ? (
        <div className={classes.course_landingpage}>
          <Typography.Title style={{ color: "white" }} level={1}>
            {detail.tenKhoaHoc}
          </Typography.Title>
          <div style={{ width: "60%" }}>
            <Typography.Paragraph style={{ color: "white", fontSize: 20 }}>
              {detail.moTa}
            </Typography.Paragraph>
          </div>
          <Typography.Text style={{ marginRight: 8 }}>
            {mapLuotXem(detail.luotXem)}
          </Typography.Text>
          <Typography.Text style={{ color: "#ffc48c" }}>
            4.7
            <span style={{ margin: 5, color: "#ffc48c" }}>
              <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled />{" "}
              <StarFilled />
            </span>
          </Typography.Text>
          <Typography.Text style={{ color: "white" }}>
            ({detail.luotXem})
          </Typography.Text>
          <Typography.Text
            style={{
              color: "white",
              display: "block",
              marginTop: 8,
              marginBottom: 8,
              fontSize:15
            }}
          >
            Người tạo: {detail.nguoiTao.hoTen}
          </Typography.Text>
          <Typography.Text style={{ color: "white",fontSize:15 }}>
            Cập nhật lần cuối: {detail.ngayTao}
          </Typography.Text>
        </div>
      ) : null}
      
    </div>
    
    <div className={classes.course_landing_content}>
        <Row>
          <Col md={16}sm={24}xs={24}>
            <div className={classes.course_landing_content_left}>
            <Typography.Text mark strong style={{fontSize:25 }}>Bạn sẽ học được gì</Typography.Text>
              <div style={{width:'90%',margin:'auto',paddingTop:10}}>
                <Row>
                  <Col md={12} >
                  <ul style={{fontSize:14,lineHeight:2}}>
                    <li>Tạo và sử dụng Nhóm</li>
                    <li>Tạo và sử dụng Bộ tĩnh</li>
                    <li>Kết hợp các bộ thành nhiều bộ hơn</li>
                    <li>Tạo bộ thông qua công thức</li>
                    <li>Kiểm soát các dòng tham chiếu với các tham số</li>
                  </ul>

                  </Col>
                  <Col md={12}>
                  <ul style={{fontSize:14,lineHeight:2,listStyle:'none'}}>
                    <li>Hiểu sự khác biệt giữa Nhóm và Bộ</li>
                    <li>Tạo và sử dụng Bộ động</li>
                    <li>Sử dụng Bộ làm bộ lọc</li>
                    <li>Bộ điều khiển với tham số</li>
                    <li>Sử dụng nhiều trường trong thuộc tính màu</li>
                  </ul>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col md={8} sm={24}xs={24}>
            <div className={classes.course_landing_content_right}>
                 <div className={classes.course_landing_content_right_item}>
                      {
                        detail ? (
                           <Fragment >
                              <img alt="img" style={{width:'100%'}} src={detail.hinhAnh}/>
                              <div style={{width:'90%',margin:'auto',paddingTop:15,textAlign:'left'}}>
                                  <Button onClick={()=>addToCart(detail)} style={{width:'100%',height:50,fontWeight:'bold',marginTop:20}} size="large"danger type="primary">Thêm giỏ hàng</Button>
                               <div style={{paddingLeft:40}}>
                               <Typography.Title style={{fontSize:15,marginTop:30}}>Khóa học này bao gồm:</Typography.Title>
                                <ul style={{listStyle:'none'}}>
                                  <li>Video 10 giờ theo yêu cầu</li>
                                  <li>5 món</li>
                                  <li>Truy cập vô hạn</li>
                                  <li>Truy cập trên điện thoại di động và TV</li>
                                  <li>Chứng chỉ đào tạo</li>


                                </ul>
                               </div>
                               </div>
                           </Fragment>
                        ):null
                      }
                 </div>
            </div>
          </Col>
        </Row>

      </div>
     
        <Footer />
    </Fragment>
    
  );
}
const mapStateToProps = (state) => ({ 
  detail: state.CourseReducer.detail,
  listcourse:state.CourseReducer.listCourse
});
export default connect(mapStateToProps)(DetailCourse);
