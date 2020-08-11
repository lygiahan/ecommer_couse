import React from 'react';
import {connect} from'react-redux';

import {Table} from 'antd';
function ProfileCourse(props) {
    console.log(props.thongtinuser);
    let ghi = props.thongtinuser.chiTietKhoaHocGhiDanh?props.thongtinuser.chiTietKhoaHocGhiDanh:'';
    const columns = [
        {
          title: 'Tên khóa học',
          dataIndex: 'tenKhoaHoc',
          key: 'tenKhoaHoc',
        },
      
      ];
    return (
        // <Formik>
        //     {props=>(
        //         <Form >

        //         </Form>
        //     )}
        // </Formik>
        <Table rowKey={e=>e.tenKhoaHoc} tableLayout dataSource={ghi} columns={columns}/>

    )
}
export default  connect()(ProfileCourse);