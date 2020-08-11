import { GET_CATEGORY_COURSE, GET_LIST_COURSE, CHOOSE_CATEGORY, COURSE_DETAIL } from "../../../action/type";

let initialCourse = {
    categoryCourses: [],
    listCourse: [],
    chooseCategory: [],
    detail: null
};


export const CourseReducer = (state = initialCourse, action) => {

    switch (action.type) {
        case GET_CATEGORY_COURSE:
            {
                state.categoryCourses = action.data;

                return {...state }
            }
        case GET_LIST_COURSE:
            {
                state.listCourse = action.data;
                return {...state };
            }
        case CHOOSE_CATEGORY:
            {
                state.chooseCategory = action.data;
                return {...state };
            }
        case COURSE_DETAIL:
            {
                state.detail = action.data;
                return {...state };
            }
        default:
            return state;
    }
}