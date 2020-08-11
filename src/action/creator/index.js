import { CourseService } from "../../Services/Course"
import { GET_CATEGORY_COURSE, GET_LIST_COURSE, CHOOSE_CATEGORY, COURSE_DETAIL, ADD_CART, LOGIN, GET_THONGTIN_USER, UPDATE_THONGTIN, DELETE_CART, LOGOUT, ADMIN_LOGIN, ADMIN_LOGOUT, GET_LIST_USER, GET_MALOAI, FILTER_MALOAI, FILTER_USER, GET_DANHSACHHOCVIEN_KHOAHOC, UPDATE_USER, HIENTHI_USER } from "../type";
import { UserServices } from "../../Services/User";
import { instance } from "../../config";
import AddCustomer from "../../ADMIN/AddCustomer";
import { AddCustom, GetUsersv, GetMaLoaisv, GetDanhSachChoXetDuyet, GetHocVienChoXetDuyet, FilterUser, GetDanhSachKhoaHocChoXetDuyet, GetDanhSachHocVienKhoaHoc, UpdateUser, HienThiUser } from "../../Services/Admin";
import useNotification from "../../util/useNotification";

export const Reduxthunk = (type, data) => {
    return {
        type,
        data
    }
}
export const Reduxout = (type) => {
    return {
        type
    }
}
let courseService = new CourseService();
let userService = new UserServices();

//COURSEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
export const actGetCategoryCourse = () => {
    return async dispatch => {
        try {
            let res = await courseService.GetCategoryCourse();
            dispatch(Reduxthunk(GET_CATEGORY_COURSE, res.data))
            return res;
        } catch (error) {
            console.log(error);
        }
    }
}
export const actGetListCourse = () => {
    return async dispatch => {
        try {
            let res = await courseService.GetListCourse();
            dispatch(Reduxthunk(GET_LIST_COURSE, res.data));
            return res;

        } catch (error) {
            console.log(error);
        }
    }
}
export const actChooseCategory = (madanhmuc) => {
    return async dispatch => {
        try {
            let res = await courseService.ChooseCategory(madanhmuc);

            dispatch(Reduxthunk(CHOOSE_CATEGORY, res.data));
        } catch (error) {
            console.log(error);
        }
    }
}
export const actDetailCourse = (id) => {
    return async dispatch => {
        try {
            let res = await courseService.CourseDetail(id);
            dispatch(Reduxthunk(COURSE_DETAIL, res.data));
        } catch (error) {
            console.log(error);
        }
    }
}
export const actAddToCart = (data) => {
    return dispatch => {
        dispatch(Reduxthunk(ADD_CART, data))
        useNotification('Thêm')
    }
}

export const actDeleteCart = (id) => {
        return dispatch => {
            dispatch(Reduxthunk(DELETE_CART, id))
            useNotification('Xóa')
        }
    }
    // USERRRRRRRRRRRRRRRRRRRRRRRRR
export const actSignUp = (data, history) => {
    return async dispatch => {
        try {
            let res = await userService.Signup(data);
            localStorage.setItem('mk', JSON.stringify(res.data.matKhau))
            useNotification('Đăng ký')
            history.push('/login')
            return res;
        } catch (error) {
            console.log(error);
        }
    }
}
export const actSignIn = (data, history) => {
    return async dispatch => {
        try {
            let res = await userService.Signin(data);
            localStorage.setItem('token', res.data.accessToken);
            instance.defaults.headers['Authorization'] = "Bearer " + res.data.accessToken;
            if (res.data.maLoaiNguoiDung === "HV") {
                localStorage.setItem('userlogin', JSON.stringify(res.data));
                localStorage.setItem('tk', JSON.stringify(res.data.taiKhoan));
                localStorage.setItem('maloai', JSON.stringify(res.data.maLoaiNguoiDung));
                dispatch(Reduxthunk(LOGIN, res.data));
                useNotification('Đăng nhập')
                history.push('/')
            } else {
                localStorage.setItem('adminlogin', JSON.stringify(res.data));
                localStorage.setItem('maloai', JSON.stringify(res.data.maLoaiNguoiDung));
                dispatch(Reduxthunk(ADMIN_LOGIN, res.data));
                history.push('/admin')
            }
        } catch (error) {
            console.log(error);
        }
    }
}
export const actSignout = (history) => {
    return dispatch => {
        dispatch(Reduxthunk(LOGOUT, ''));
        useNotification('Đăng xuất');
        history.push('/')
    }
}
export const actGetThongTinUser = (data) => {
    return async dispatch => {
        try {
            let token = localStorage.getItem('token');
            let res = await userService.GetThongTinUser(data, token);
            localStorage.setItem('thongtinuser', JSON.stringify(res.data))
            dispatch(Reduxthunk(GET_THONGTIN_USER, res.data));
        } catch (error) {
            console.log(error)
        }
    }
}

export const actRegisterCourse = (data) => {
    return async dispatch => {
        let token = localStorage.getItem('token');
        let res = await userService.RegisterCourse(data, token);
        return res.data;

    }
}

export const actUpdateThongTin = (data) => {
    return async dispatch => {
        try {
            let token = localStorage.getItem('token');
            let res = await userService.UpdateThongTin(data, token);
            dispatch(Reduxthunk(UPDATE_THONGTIN, res.data));
            useNotification('Cập nhật thông tin')

        } catch (error) {
            console.log(error);
        }
    }
}

//ADMIN
export const actAdminLogout = (history) => {
    return dispatch => {
        dispatch(Reduxthunk(ADMIN_LOGOUT, ''));
        history.push('/')
    }
}
export const actAddCustomer = (data) => {
    return async dispatch => {
        let token = localStorage.getItem('token');
        let res = await AddCustom(data, token);
        return res;
    }
}
export const actGetUser = () => {
    return async dispatch => {
        try {
            let res = await GetUsersv();
            localStorage.setItem('dsuser', JSON.stringify(res.data));
            dispatch(Reduxthunk(GET_LIST_USER, res.data));
        } catch (error) {
            console.log(error);

        }
    }
}
export const actGetmaLoai = () => {
    return async dispatch => {
        let res = await GetMaLoaisv();
        dispatch(Reduxthunk(GET_MALOAI, res.data))
    }
}
export const actFilterMaLoai = (maloai) => {
    return dispatch => {
        dispatch(Reduxthunk(FILTER_MALOAI, maloai));
    }
}
export const actGetCourseChoXet = (makhoahoc) => {
    return async dispatch => {
        let token = localStorage.getItem('token')
        let res = await GetHocVienChoXetDuyet(makhoahoc, token);
        console.log(res);
    }
}
export const actFilterUser = (tukhoa) => {
    return async dispatch => {
        try {
            let res = await FilterUser(tukhoa);
            dispatch(Reduxthunk(FILTER_USER, res.data));
        } catch (error) {
            console.log(error);
        }
    }
}
export const actGetDanhSachChoXetDuyet = (data) => {
    return async dispatch => {
        let token = localStorage.getItem('token')
        let res = await GetDanhSachKhoaHocChoXetDuyet(data, token);
        console.log(res);
    }
}
export const actGetDanhSachHocVienKhoaHoc = (data) => {
    return async dispatch => {
        let token = localStorage.getItem('token')
        let res = await GetDanhSachHocVienKhoaHoc(data, token);
        dispatch(Reduxthunk(GET_DANHSACHHOCVIEN_KHOAHOC, res.data));
    }
}
export const actHienThiUser = (data) => {
    return dispatch => {
        // let token = localStorage.getItem('token');
        // let res = await HienThiUser(data, token);
        dispatch(Reduxthunk(HIENTHI_USER, data));
    }
}
export const actUpdateUser = (data) => {
    return async dispatch => {
        let token = localStorage.getItem('token')
        let res = await UpdateUser(data, token);
        console.log(res);
    }
}