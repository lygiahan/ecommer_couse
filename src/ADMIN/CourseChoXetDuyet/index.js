import React, { useEffect } from "react";
import classes from "./CourseChoXetDuyet.module.scss";
import { Row, Col, Table, Card } from "antd";
import {connect} from 'react-redux';
import { actGetListCourse, actGetDanhSachHocVienKhoaHoc } from "../../action/creator";
 
  
function CourseChoXetDuyet(props) {
    const colums =[
      {
        title:'Tài khoản',
        dataIndex:'taiKhoan'
      },
      {
        title:'Họ tên',
        dataIndex:'hoTen'
      }
    ]
    useEffect(()=>{
       props.dispatch(actGetListCourse());
    },[])

    const getCourseChoXet = (value)=>{
      let data ={maKhoaHoc:value};
        props.dispatch(actGetDanhSachHocVienKhoaHoc(data))
    }


  return (
    <div className={classes.form_course}>
        <div>
            <h3>Danh sách học viên khóa học</h3>
        </div>
      <Row gutter={[10,10]}>
           {
             props.listcourse.map((item,index)=>{
               return (
                 <Col md={4} key={index}>
                   <Card style={{height:150}}  onClick={()=>getCourseChoXet(item.maKhoaHoc)} className={classes.card_item} tabIndex={1}  hoverable cover={<img style={{height:90}} src={item.hinhAnh} alt="img"/>} >
                      <Card.Meta description={item.tenKhoaHoc.slice(0,16)+'...'}></Card.Meta>
                   </Card>
                 </Col>
               )
             })
           } 
       
      </Row>
      <Row>
      <Col md={24}>
            <Table rowKey={e=>e.taiKhoan} dataSource={props.listhocvienkhoahoc} columns={colums}/>
        </Col>
      </Row>
    </div>
  );
}
const mapStateToprops=state=>{
    return{
        listcourse:state.CourseReducer.listCourse,
        listhocvienkhoahoc:state.AdminReducer.dsHocvienkhoahoc
    }
}
export default connect(mapStateToprops)(CourseChoXetDuyet);
