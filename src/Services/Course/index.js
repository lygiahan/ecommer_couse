import { instance } from "../../config";

export class CourseService {

    GetCategoryCourse() {
        return instance.get('/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc')
    }
    GetListCourse() {
        return instance.get('/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
    }
    ChooseCategory(madanhmuc) {
        return instance.get(`/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${madanhmuc}&MaNhom=GP01`)
    }
    CourseDetail(id) {
        return instance.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`)
    }
}