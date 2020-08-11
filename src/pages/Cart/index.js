import React from 'react'
import { Row } from 'antd';
import {connect} from 'react-redux';
import CartItem from '../../CartItem';
import Footer from '../../Layout/Footer';
import NoCart from '../../NoCart';

 function Cart(props) {
    return (
      <div>
        {props.listcart.length>0?(
            <div style={{width:'80%',margin:'auto',marginTop:50,backgroundColor:'#fbfbf8'}}>
            <Row gutter={[1,1]}>
            {
              props.listcart.map((item,index)=>{
                return <CartItem item={item} key={index}/>
              })
            }
          </Row>
          <Footer />
          </div>
        ):<NoCart />}
      </div>
    )
}
const mapSateToProps =(state)=>({listcart:state.CartReducer});
export default connect(mapSateToProps)(Cart);