import React from 'react'
import SubMenu from "antd/lib/menu/SubMenu";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
import { Layout, Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';
import ListCustomer from '../ListCustomer';
export default function AdminContent() {
    return (
        <Layout.Content>
        <Layout style={{paddding:'24px 0'}}>
            <Layout.Sider width={300}>
            <Menu
            theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%' }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="Khách hàng">
          <Menu.Item key="1">Danh sách </Menu.Item>
            <Menu.Item key="2"> 
            <Link to="/admin-add-customer">
               <Typography.Text style={{color:'white'}}>Thêm</Typography.Text>
               </Link>
            </Menu.Item>
            <Menu.Item key="4">Chờ xét duyệt</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Khóa học">
            <Menu.Item key="5">
              <Link to="/admin-add-course">
              <Typography.Text style={{color:'white'}}>Thêm khóa học</Typography.Text>
              </Link>
            </Menu.Item>
            <Menu.Item key="6">Xóa</Menu.Item>
            <Menu.Item key="7">Danh sách</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
       
        </Menu>
            </Layout.Sider>
           <>
            <ListCustomer />
           
           </>
        </Layout>
    </Layout.Content>
    )
}
