import React, { Fragment } from 'react';
import { Row, Col, Typography, Button } from 'antd';
import classes from './AppIntro.module.scss';

export default function AppIntro() {
    return (    
        <Fragment>
            <Row className={classes.app_row}>
                <Col md={12} sm={24} style={{textAlign:'right'}}>
                    <img alt="img" style={{marginTop:-30, marginBottom:-30,width:350,maxWidth:'100%'}} src={"https://img-b.udemycdn.com/home/non-student-cta/udlite-lohp-promo-teacher.jpg"}/>
                </Col>
                <Col md={12}sm={24}>
                    <div style={{width:'80%',margin:'auto',marginTop:30}}>
                    <Typography.Title level={1}>Trở thành một huấn luyện viên</Typography.Title>
                    <Typography.Paragraph strong style={{fontSize:17}}>Các huấn luyện viên giỏi nhất thế giới dạy hàng triệu người tham gia trên Udemy. Chúng tôi cung cấp cho bạn các công cụ và kỹ năng để dạy những gì bạn yêu thích.
                         
                    </Typography.Paragraph>
                    <Button className={classes.app_row_button}  size="large">Bắt đầu hôm nay</Button>
                    </div>
                </Col>
            </Row>
            <Row className={classes.app_row2}>
                <Col md={12} style={{textAlign:'left'}}>                   
                    <div style={{width:'80%',margin:'auto'}}>
                    <Typography.Title level={1}>Hlydemy cho doanh nghiệp</Typography.Title>
                    <Typography.Paragraph strong style={{fontSize:17}}>Cung cấp cho nhóm của bạn quyền truy cập không giới hạn khóa học tốt nhất của Hlydemy.
                         
                    </Typography.Paragraph>
                    <Button className={classes.app_row_button2} type='primary' size="large" >Hlydemy cho doanh nghiệp</Button>
                    </div>
                </Col>
                <Col md={12}>
                <img alt="img" style={{marginTop:-30, marginBottom:-30,width:350,maxWidth:'100%'}} src={"https://img-b.udemycdn.com/home/non-student-cta/udlite-lohp-promo-ufb.jpg"}/>
                </Col>
            </Row>
        </Fragment>
    )
}
