import React, { useEffect, Fragment } from 'react';
import { actGetCategoryCourse, actChooseCategory } from '../../action/creator';
import {connect, useDispatch} from 'react-redux';
import classes from './CategoryCourse.module.scss';
import {Button} from 'antd';

 function CategoryCourse(props) {
    const dispatch = useDispatch();
    useEffect(()=>{   
    props.dispatch(actGetCategoryCourse());
    props.dispatch(actChooseCategory('BackEnd'))
    },[])

    const chooseCourse =(madanhmuc)=>{
         dispatch(actChooseCategory(madanhmuc));
    }
    return (
        <Fragment>
            <ul className={classes.category}>
                {
                 props.categorycourse? props.categorycourse.map((category,index)=>{
                      return (
                          <li key={index} className={classes.category_item}>
                              <Button onClick={()=>chooseCourse(category.maDanhMuc)} type="primary" shape="round" className={classes.category_item_button}> 
                                 {category.tenDanhMuc}
                              </Button>
                          </li>
                        
                      )
                  }):null
                }
            </ul>
        </Fragment>
    )
}
const mapStateToProps = (state)=>({categorycourse:state.CourseReducer.categoryCourses})
export default connect(mapStateToProps)(CategoryCourse);