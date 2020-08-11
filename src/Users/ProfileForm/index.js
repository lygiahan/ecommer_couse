import React, { useState, useEffect } from 'react';
import {Formik} from 'formik';
import {Form,Input,FormItem, SubmitButton} from 'formik-antd';
import { Row, Col } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import classes from './ProfileForm.module.scss';
import { actUpdateThongTin, actGetThongTinUser } from '../../action/creator';
import { useDispatch } from 'react-redux';

export default function ProfileForm(props) {
    const dispatch = useDispatch();
    const [disable,setDisable] = useState(true);
    let {taiKhoan,hoTen,soDT,email,matKhau,maLoaiNguoiDung,maNhom}= props.thongtinuser;
    const [user,setUser] = useState({
        taiKhoan,
        matKhau,
        hoTen,
        soDT,
        email,
        maLoaiNguoiDung,
        maNhom
    })

      useEffect(()=>{
         if(props.update){
            // let tk = JSON.parse(localStorage.getItem("tk"));
            // let mk = JSON.parse(localStorage.getItem("mk"));
            // let data = { taiKhoan: tk, matKhau: mk };
            // dispatch(actGetThongTinUser(data));
        //             let data={
        //        taiKhoan:props.update.taiKhoan,
        //        hoTen:props.update.hoTen,
        //        soDT:props.update.soDt,
        //        matKhau:props.update.matKhau,
        //        email:props.update.email,
        //        maLoaiNguoiDung:props.update.maLoaiNguoiDung,
        //        maNhom:props.update.maNhom
        //    }
          setUser(user.hoTen=props.update.hoTen,
                      user.soDT=props.update.soDt,
                      user.email= props.update.email,
                      user.matKhau = props.update.matKhau,
                      user.maLoaiNguoiDung= props.update.maLoaiNguoiDung,
                      user.maNhom= props.update.maNhom
                     );
         }  
      },[props.update])
    return (
        <Formik
        initialValues={user}
        onSubmit={(value,actions)=>{
           if(!disable){
                dispatch(actUpdateThongTin(value));
           }
           else{
           }
            setDisable(!disable);
            actions.resetForm();
        }}>
        {(formik)=>(
            <Form>
                <div className={classes.form_content}>
                   <Form.Item wrapperCol={{xs:10}} labelCol={{xs:8}} label="Tài khoản" name="taiKhoan">
                       <Input value={formik.values.taiKhoan} 
                        name="taiKhoan"disabled={true}
                         style={{height:45,fontWeight:'bold',fontSize:16}} />
                   </Form.Item>
                   <Form.Item wrapperCol={{xs:10}} labelCol={{xs:8}} label="Họ tên" name="hoTen">
                       <Input name="hoTen"disabled={disable} style={{height:45,fontWeight:'bold',fontSize:16}} />
                   </Form.Item>
                   <Form.Item wrapperCol={{xs:10}} labelCol={{xs:8}} label="Số điện thoại" name="soDT">
                       <Input name="soDT"disabled={disable}  style={{height:45,fontWeight:'bold',fontSize:16}}/>
                   </Form.Item>
                   <Form.Item wrapperCol={{xs:10}} labelCol={{xs:8}} label="Email" name="email">
                       <Input name="email"disabled={disable} style={{height:45,fontWeight:'bold',fontSize:16}} />
                   </Form.Item>             
                       <Row>
                           <Col offset={12}>
                              <ButtonGroup>
                                   <SubmitButton 
                                    style={{width:'auto',fontWeight:'bold',fontSize:16,height:40}}> 
                                    {disable ? "Thay đổi":"Cập nhật"}
                                   </SubmitButton>
                              </ButtonGroup>
                           </Col>
                       </Row>
                </div>
            </Form>
        )}
        </Formik>
    )
}
