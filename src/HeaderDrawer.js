import React from "react";
import { Drawer, Typography, Badge, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function HeaderDrawer(props) {
  return (
    <Drawer
    width={180}
      title={
        <Link to="/">
        <img alt="img" style={{width:'100%'}} src="https://themes.muffingroup.com/be/carrental2/wp-content/uploads/2019/09/carrental2.png" />
        </Link>
      }
      placement="left"
      closable={false}
      visible={props.visible}
      onClose={props.onClose}
    >
      <Typography.Text strong style={{ fontSize: 18 }}>
        Thể loại
      </Typography.Text>
      <Typography.Title style={{ marginTop: 5 }}>
        <Badge count={props.listcart.length} showZero>
          <Link to="/cart">
          <ShoppingCartOutlined style={{ fontSize: 35,color:'black'}} />
          </Link>
        </Badge>
      </Typography.Title>
      <div>
        <Button size="large" style={{fontSize:16,width:120,color:'#1DA57A',fontWeight:'bold',border:'1px solid #1DA57A'}}>
          Đăng nhập
        </Button>
      </div>
      <div style={{marginTop:10}}>
        <Button size="large" style={{fontSize:16,width:120,backgroundColor:'#1DA57A',fontWeight:'bold',color:'white'}}>Đăng ký</Button>
      </div>
    </Drawer>
  );
}
