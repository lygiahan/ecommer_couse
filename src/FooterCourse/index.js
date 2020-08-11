import React from 'react'
import { List, Row, Col } from 'antd'
import { ClockCircleFilled, CustomerServiceFilled, TagsFilled } from '@ant-design/icons';

export default function FooterCourse() {
    return (
        
         <Row >
       <Col md={8} sm={24}xs={24}>
       <List.Item >
                <List.Item.Meta 
                
                avatar={<div style={{paddingTop:15,fontSize:20,color:'#1DA57A'}}><TagsFilled /></div>}
                title="đi theo tốc độ của riêng bạn"
              description="Tận hưởng truy cập không giới hạn vào các khóa học trên trang web và ứng dụng Udemy"
                />
            </List.Item>
       </Col>
       <Col md={8}sm={24}xs={24}>
       <List.Item>
                <List.Item.Meta 
                avatar={<div style={{paddingTop:15,fontSize:20,color:'#1DA57A'}}><CustomerServiceFilled /></div>}
                title="Học hỏi từ các chuyên gia trong ngành
                "
              description="Chọn từ các giảng viên giỏi nhất thế giới"
                />
            </List.Item>
       </Col>
       <Col md={8}sm={24}xs={24}>
       <List.Item>
                <List.Item.Meta 
                avatar={<div style={{paddingTop:15,fontSize:20,color:'#1DA57A'}}><ClockCircleFilled /></div>}
                title="Tìm các bài học video về hầu hết mọi chủ đề"
              description="Xây dựng thư viện cho sự nghiệp và phát triển cá nhân của bạn"
                />
            </List.Item>
       </Col>
         </Row>
    
            
        
    )
}
