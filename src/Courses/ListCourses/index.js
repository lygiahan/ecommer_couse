import React,{useEffect, Fragment} from 'react';
import {connect, useDispatch} from 'react-redux';
import { actGetListCourse } from '../../action/creator';
import {Row} from 'antd';
import ListCourseItem from '../ListCourseItem';

 function ListCourses(props) {
   const dispatch = useDispatch();
    useEffect(() => {
       dispatch(actGetListCourse());
    }, [])
    return (
        <Fragment>
            <Row  >
                {
                    props.choosecategory?props.choosecategory.map((course,index)=>{
                       return <ListCourseItem key={index} course={course}/>
                    }):null
                }
            </Row>
        </Fragment>
    )
}

const mapStateToProps =(state)=>({
    listcourse:state.CourseReducer.listCourse,
    choosecategory:state.CourseReducer.chooseCategory
})
export default connect(mapStateToProps)(ListCourses);