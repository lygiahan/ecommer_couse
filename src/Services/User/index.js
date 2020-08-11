const { instance } = require("../../config");

export class UserServices {


    Signup(data) {
        return instance.post('/api/QuanLyNguoiDung/DangKy', data);
    }
    Signin(data) {
        return instance.post('/api/QuanLyNguoiDung/DangNhap', data);
    }

    GetThongTinUser(data, token) {
        return instance.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan', data, {
            headers: {
                'Authorization': "Bearer " + token
            }
        });
    }
    RegisterCourse(data, token) {
        return instance.post('/api/QuanLyKhoaHoc/DangKyKhoaHoc', data, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
    }
    UpdateThongTin(data, token) {
        return instance.put('/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', data, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }
}