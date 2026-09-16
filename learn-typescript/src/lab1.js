"use strict";
// Viết 1 hàm trả về chu vi và diện tích hình chữ nhật
function chuvihcn(chieudai, chieurong) {
    return (chieudai + chieurong) * 2;
}
console.log(chuvihcn(3, 4));
// Viết 1 hàm tính tổng nhiều số (không biết trước số lượng tham số), sử dụng rest parameter
function tinhTong(...numbers) {
    let tong = 0;
    for (let number of numbers) {
        tong = tong + number;
    }
    return tong;
}
console.log(tinhTong(1, 2, 3, 4, 5));
// Viết hàm trả về số lượng xuất hiện của 1 kí tự trong chuỗi
function demKyTu(chuoi, kyTu) {
    let dem = 0;
    for (let i = 0; i < chuoi.length; i++) {
        if (chuoi[i] == kyTu) {
            dem++;
        }
    }
    return dem;
}
console.log(demKyTu("typescript", "t"));
// Viết hàm trả về boolean kiểm tra 1 số có phải số nguyên tố
function laSoNguyenTo(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(laSoNguyenTo(7));
console.log(laSoNguyenTo(8));
