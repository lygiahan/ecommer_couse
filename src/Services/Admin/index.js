const { instance } = require("../../config")


export const AddCustom = (data, token) => {
    return instance.post('/api/QuanLyNguoiDung/ThemNguoiDung', data, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}
export const GetUsersv = () => {
    return instance.get('/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01');
}
export const GetMaLoaisv = () => {
    return instance.get('/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung');
}
export const GetHocVienChoXetDuyet = (data, token) => {
    return instance.post('/api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet', {
        'maKhoaHoc': data
    }, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
}
export const FilterUser = (data) => {
    return instance.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${data}`)
}
export const GetDanhSachKhoaHocChoXetDuyet = (data, token) => {
    return instance.post('/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet', data, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}
export const GetDanhSachHocVienKhoaHoc = (data, token) => {
    return instance.post('/api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc', data, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
}
export const UpdateUser = (data, token) => {
    return instance.put('/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', data, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
}