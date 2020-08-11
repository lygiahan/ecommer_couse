import React, { Fragment } from "react";
import BannerFooter from "../../Layout/BannerFooter";
import { Typography, Button, Row, Col, Carousel } from "antd";
import CategoryCourse from "../../Courses/CategoryCourse";
import ListCourses from "../../Courses/ListCourses";
import FooterCourse from "../../FooterCourse";
import AppCategory from "../../AppCategory";
import AppIntro from "../../AppIntro";
import Footer from "../../Layout/Footer";
import FlipEffect from "../../Swiperban";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
 function Home(props) {
  const contentStyle = {
    height: "400px",
    color: "#fff",
    lineHeight: "160px",
    

  };
  return (
    <Fragment>
        <div className="App-banner">
        
          <Row >
              <Col md={18}>
              <Carousel autoplay autoplaySpeed={5000}>
              <div>
                <img
                  alt="img"
                  style={contentStyle}
                  className="App-img"
                  src="https://img-b.udemycdn.com/notices/home_banner/image_udlite/044e9f39-f3ff-4a4b-8cce-31c6b689938a.jpg"
                />
              </div>
                  <div>
                <img
                  alt="img"
                  style={contentStyle}
                  className="App-img"
                  src="https://img-a.udemycdn.com/notices/home_banner/image_udlite/7cf844b2-4371-45ea-9ef5-e10ea212eac2.jpg"
                  
                />

              </div>
              <div>
                <img alt="img"
                style={contentStyle}
                className="App-img"
                src="https://img-a.udemycdn.com/notices/home_banner/image_udlite/f67b3cb2-50a9-4403-9056-d20025d89e07.jpg"/>
              </div>
              </Carousel>

              </Col>
              <Col md={6}>
                <div style={{width:'80%',margin:'auto'}}>
                  <Carousel autoplay autoplaySpeed={3000} effect="fade">
                    {
                      props.list.map((item,index)=>{
                        return (
                          <div key={index}>
                            <Link to={`course-detail/${item.maKhoaHoc}`}>
                            <div className="App-right" style={{cursor:'pointer'}}>
                              <img className="App-img"  style={{height:'400px',borderTopRightRadius:'40px',borderBottomLeftRadius:'40px',position:'relative'}} src={item.hinhAnh}/>   
                              
                              <div style={{position:'absolute',top:5,right:0,width:'60px',height:'60px',backgroundColor:'brown',borderRadius:'50%',opacity:1}}>
                                  <h1 style={{lineHeight:'60px',color:'white',opacity:1}}>Free</h1>
                              </div>
                            </div>    
                            </Link>    
                                
                          </div>
                        )
                      })
                    }
                  </Carousel>
                  </div>
              </Col>
          </Row>
          

        </div>

      <div className="App-banner-footer">
        <BannerFooter />
      </div>
      <hr></hr>
      <div className="App-categorycourse">
        <Typography.Title level={3}>
          Lựa chọn các khóa học hay nhất
        

        </Typography.Title>
        <Typography.Text>
          Chọn khóa học để ghi danh. Các khóa học mới được thêm vào mỗi tháng
        </Typography.Text>
      </div>
      <CategoryCourse />
      <div className="App-listcourse">
        <ListCourses />
      </div>
      <hr></hr>
      <div className="App-footercourse">
        <FooterCourse />
      </div>
      <div className="App-first">
        <div className="App-first-chil">
          <Typography.Title style={{ color: "white" }} level={2}>
            {" "}
            Đề xuất học tập cá nhân
          </Typography.Title>
          <Typography.Title style={{ color: "white" }} level={4}>
            Trả lời một vài câu hỏi cho các lựa chọn yêu thích của bạn
          </Typography.Title>
          <Button
            className="App-first-chil-button"
            type="ghost"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Bước đầu tiên
          </Button>
        </div>
      </div>
      <div className="App-category">
        <AppCategory />
      </div>

      <div className="App-intro">
        <AppIntro />
      </div>

      <Footer />
    </Fragment>
  );
}

const mapStateToProps =(state)=>({list:state.CourseReducer.listCourse})
export default connect(mapStateToProps)(Home);