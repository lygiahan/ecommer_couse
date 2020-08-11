import React, { useEffect, Fragment } from 'react';
import { Carousel } from 'antd';
import {connect} from 'react-redux'
import { actGetListCourse } from '../action/creator';

  function FlipEffect(props) {
  
    
    return (
     <Fragment >
   <h1>ahihi</h1>
     </Fragment>
    )
  };

  const mapStateToProps =state=>({danhsach:state.CourseReducer.listCourse})
  export default connect(mapStateToProps)(FlipEffect);
    