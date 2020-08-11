import React, { useEffect, useState } from "react";
import { Table, Typography, Button, Input, Space } from "antd";
import { connect } from "react-redux";
import { actGetUser, actGetmaLoai, actFilterMaLoai, actFilterUser, actGetDanhSachChoXetDuyet, actUpdateUser, actHienThiUser } from "../../action/creator";
import CourseChoXetDuyet from "../CourseChoXetDuyet";
import Search from "antd/lib/input/Search";
import ModalAdmin from '../ModalAdmin/index';
function ListCustomer(props) {
  const [visible ,setVisible]= useState(false);
  const showModal =()=>{
    setVisible(true)
  }
  const handleOk=()=>{
    setVisible(false)
  }
  const handleCan=()=>{
    setVisible(false)
  }
  useEffect(() => {
    props.dispatch(actGetUser());
    props.dispatch(actGetmaLoai())
  }, []);
  const colums = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDt",
    },
    {
      title: "Mã loại",
      dataIndex: "maLoaiNguoiDung",
      render: (text) =>
        text === "HV" ? (
          <Typography.Title level={4} >HV</Typography.Title>
        ) : (
          <Typography.Title mark level={4}>
            GV
          </Typography.Title>
        ),
    },
    {
      title:'',
      render:(text,record)=>(
        <Space size="middle">
             <Button onClick={()=>hienThiUser(record)} type="primary">Sửa</Button>
             <Button type="primary" danger>Xóa</Button>

        </Space>
      )
    }
  ];
  const filterName =(value)=>{
        props.dispatch(actFilterUser(value));
  }
  const hienThiUser =(value)=>{
        showModal();
        props.dispatch(actHienThiUser(value))
  }

  return (
    <div style={{ width: "100%" }}>  
      <div style={{textAlign:'center'}}>
        <Typography.Title underline level={1}>Khóa Học</Typography.Title>
      </div>
      <Button type="primary">Thêm khóa học</Button>
      <Button onClick={()=>props.dispatch(actGetDanhSachChoXetDuyet({taiKhoan:'xa'}))}>Lấy danh sách chờ xét duyệt</Button>
      <CourseChoXetDuyet />
        <div style={{textAlign:'center'}}>
          <Typography.Title level={1} underline>Khách hàng</Typography.Title>
        </div>
        <div>       
            <Button type="primary" style={{width:172,fontWeight:'bold',fontSize:17}}>Tìm theo mã loại
            </Button>
            <div style={{display:'flex'}}>
        {             
                props.maloai.map((item,index)=>{
                return (
                <Button onClick={()=>props.dispatch(actFilterMaLoai(item.maLoaiNguoiDung))} key={index} style={{color:'blue',fontWeight:'bold',borderRight:'1px solid'}} 
                type="link">{item.tenLoaiNguoiDung}</Button>
                )
                })
              }
              </div>   
        </div>
        <div style={{width:'50%',margin:'auto'}}>
               <Search placeholder="Tìm tên khách hàng"onSearch={filterName} />
        </div>
        
      <Table
      size="small"
        dataSource={props.filterMaloai?props.listUser.filter(fil=>fil.maLoaiNguoiDung===props.filterMaloai):props.listUser}
        columns={colums}
        tableLayout
        rowKey={(e) => e.taiKhoan}
        showHeader
      ></Table>
      <ModalAdmin visible={visible}  handleOk={handleOk }handleCan={handleCan}/>
    </div>
  );
}
const mapStateToprops = (state) => {
  return {
    listUser: state.AdminReducer.listUser,
    maloai:state.AdminReducer.maloai,
    filterMaloai:state.AdminReducer.filterMaloai,
    filterUser:state.AdminReducer.filterUser
  };
};
export default connect(mapStateToprops)(ListCustomer);
