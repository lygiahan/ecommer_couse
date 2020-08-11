import React, { Fragment } from 'react'
import { Row, Col, Typography } from 'antd';
import {DingtalkSquareFilled,ApiFilled,BulbFilled  } from '@ant-design/icons'
export default function BannerFooter() {
    return (
        <Fragment>
 <Row style={{textAlign:'left'}}>
              <Col md={8} sm={24}>
                  <Row style={{display:'flex'}}>
                    <Col className="App-banner-footer-img" md={4} style={{textAlign:'center',fontSize:22,color:'#1DA57A'}}><DingtalkSquareFilled /></Col>
                    <Col md={20} style={{lineHeight:2}}>
                      <Typography.Title style={{fontSize:18,margin:0}}>100.000 khóa học trực tuyến</Typography.Title>
                      <Typography.Text>Thưởng thức nhiều chủ đề nóng</Typography.Text>
                    </Col>
                  </Row>
              </Col>
              <Col md={8} sm={24} >
              <Row style={{display:'flex'}}>
                    <Col className="App-banner-footer-img" md={4} style={{textAlign:'center',fontSize:22,color:'#1DA57A'}}><ApiFilled /></Col>
                    <Col md={20} style={{lineHeight:2}}>
                      <Typography.Title style={{fontSize:18,margin:0}}>Các khóa học được đưa ra bởi các chuyên gia</Typography.Title>
                      <Typography.Text>Tìm huấn luyện viên phù hợp với bạn</Typography.Text>
                    </Col>
                  </Row>
              </Col>
              <Col md={8} sm={24}>
              <Row style={{display:'flex'}}>
                    <Col className="App-banner-footer-img" md={4} style={{textAlign:'center',fontSize:22,color:'#1DA57A'}}><BulbFilled /></Col>
                    <Col md={20} style={{lineHeight:2}}>
                      <Typography.Title style={{fontSize:18,margin:0}}>Truy cập vô hạn</Typography.Title>
                      <Typography.Text>Học theo tốc độ của riêng bạn</Typography.Text>
                    </Col>
                  </Row>
              </Col>
            </Row>
        </Fragment>
    )
}
