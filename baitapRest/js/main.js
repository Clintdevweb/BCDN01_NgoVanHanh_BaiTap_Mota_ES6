/**
 * B1:Khởi tạo hàm tính trung bình có tham sô id và  Rest Paramete là value
 * B2:Tạo hàm tính trung bình cho khối 1 dựa trên hàm tính trung bình chung, thay Rest Paramete bằng các giá trị người dùng nhập vào input của khối 1, và id  là id thông báo của khối 1
 * B2:Tạo hàm tính trung bình cho khối 2 dựa trên hàm tính trung bình chung, thay Rest Paramete bằng các giá trị người dùng nhập vào input của khối 2, và id  là id thông báo của khối 2
 */

// Hàm rút gọn code khai báo
let getELE = (id) => {
    return document.getElementById(id)
}

// Hàm tính trung bình chung
let averageNumber = (id, ...values) => {
    let sum = 0;
    let average = 0;
    /**
    * Rest Paramete (values) là một mảng nên dùng forEach để lọc được các giá trị(value) khi người dùng truyền đối số (arguments) vào nên ta có sum = tổng các value cộng lại.
    * Trung bình (average) = tổng các value cộng lại (sum) / độ dài của Rest Paramete (values.length)
    * toFixed(2) để làm tròn đế 2 số thập phân sau dấu phẩy
     */

    values.forEach((value) => {
        sum += value;
        average = sum / values.length
    })

    getELE(id).innerHTML = average.toFixed(2);
}


// Hàm tính điểm trung bình cho khối 1
let averageBlock1 = () => {
    let toan = Number(getELE('inpToan').value)
    let ly = Number(getELE('inpLy').value)
    let hoa = Number(getELE('inpHoa').value)

    averageNumber("tbKhoi1", toan, ly, hoa)

}

getELE("btnKhoi1").onclick = averageBlock1;

// Hàm tính trung bình cho khối 2
let averageBlock2 = () => {
    let van = Number(getELE('inpVan').value)
    let su = Number(getELE('inpSu').value)
    let dia = Number(getELE('inpDia').value)
    let english = Number(getELE('inpEnglish').value)


    averageNumber("tbKhoi2", van, su, dia, english)

}

getELE("btnKhoi2").onclick = averageBlock2;