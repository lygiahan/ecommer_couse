import React, { Fragment, useState } from 'react'
import { Modal, Button, Row, Col } from 'antd'
import { Formik } from 'formik'
import { SubmitButton,Input, DatePicker, FormikDebug,InputNumber,Select ,Form} from 'formik-antd'
import ButtonGroup from 'antd/lib/button/button-group';
import classes from './AddCourse.module.scss';
export default function AddCourses() {
    const [course,setCourse] = useState({
        maKhoaHoc:'',
        biDanh:'',
        tenKhoaHoc:'',
        moTa:'',
        luotXem:0,
        danhGia:0,
        hinhAnh:'',
        maNhom:'',
        ngayTao:'',
        maDanhMucKhoaHoc:'',
        taiKhoanNguoiTao:''
    });
    return (
       
        <Formik
        initialValues={course}
          onSubmit={(value,actions)=>{

            console.log(value);
            actions.setSubmitting(false);
            actions.resetForm();
          }}>
            {props=>(
                <Form labelCol={{xs:7}}wrapperCol={{xs:11}} className={classes.form_content}>
                    <div className={ classes.form_item}>
                    <Form.Item name="maKhoaHoc" label="Mã khóa học">
                        <Input name="maKhoaHoc"/>
                    </Form.Item>
                    <Form.Item name="biDanh" label="Bí danh">
                        <Input name="biDanh"/>
                    </Form.Item>
                    <Form.Item name="tenKhoaHoc" label="Ten khóa học">
                        <Input name="tenKhoaHoc"/>
                    </Form.Item>
                    <Form.Item name="moTa" label="Mô tả">
                        <Input name="moTa"/>
                    </Form.Item>
                    <Form.Item name="luotXem" label="Lượt xem">
                        <InputNumber name="luotXem" min={0}defaultValue={0}/>
                    </Form.Item>
                    <Form.Item name="danhGia" label="Đánh giá">
                        <InputNumber name="danhGia" min={0} defaultValue={0}/>
                    </Form.Item>
                    <Form.Item name="hinhAnh" label="Hình ảnh">
                        <Input name="hinhAnh"/>
                    </Form.Item>
                    <Form.Item name="maNhom" label="Mã nhóm" >
                        <Select name="maNhom" placeholder="Chọn mã nhóm">
                             <Select.Option value='GP01'>GP01</Select.Option>
                             <Select.Option value='GP02'>GP02</Select.Option>
                             <Select.Option value='GP03'>GP03</Select.Option>
                             <Select.Option value='GP04'>GP04</Select.Option>
                             <Select.Option value='GP05'>GP05</Select.Option>
                             <Select.Option value='GP06'>GP06</Select.Option>
                             <Select.Option value='GP07'>GP07</Select.Option>
                             <Select.Option value='GP08'>GP08</Select.Option>
                             <Select.Option value='GP09'>GP09</Select.Option>
                            </Select>
                    </Form.Item>
                    <Form.Item name="ngayTao" label="Ngày tạo">
                        <DatePicker name="ngayTao"showTime={true} placeholder="Chọn ngày tạo"/>
                    </Form.Item>
                    <Form.Item name="maDanhMucKhoaHoc" label="Mã danh mục khoá học">
                        <Input name="maDanhMucKhoaHoc"/>
                    </Form.Item>
                    <Form.Item name="taiKhoanNguoiTao" label="Tài khoản người tạo">
                        <Input name="taiKhoanNguoiTao"/>
                    </Form.Item>

                    <Row>
                        <Col offset={11}>
                        <ButtonGroup>
                            <SubmitButton>Thêm khóa học</SubmitButton>
                        </ButtonGroup>
                        </Col>
                        <FormikDebug />
                    </Row>
                    </div>
                </Form>

            )}
        </Formik>
    )
}
