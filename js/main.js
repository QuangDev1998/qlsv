var dssv = [];

// function renderDSSV() {

// }
// lấy json lên khi user load trang
var dataJson = localStorage.getItem("DSSV_JSON");
if (dataJson != null) {
  var dataArr = JSON.parse(dataJson);
  for (var i = 0; i < dataArr.length; i++) {
    var item = dataArr[i];
    var sv = new SinhVien(
      item.ma,
      item.ten,
      item.email,
      item.matKhau,
      item.toan,
      item.ly,
      item.hoa
    );
    dssv.push(sv);
  }
  // JSON.parse(dataJson) sẽ return về null hoặc array
  renderDSSV(dssv);
}
// JSON.parse(dataJson) sẽ return về null hoặc array

function themSv() {
  // lấy thông tin từ form
  var sv = layThongTinTuForm();
  //  kiểm tra Mã
  var isValid = kiemTraTrung(sv.ma, dssv);
  // kiểm tra email
  isValid =
    isValid & kiemTraRong("spanEmailSV", sv.email) && kiemTraEmail(sv.email);
  // kiểm tra tên
  isValid = isValid & kiemTraRong("spanTenSV", sv.ten);

  //   kiểm tra data hợp lệ hay không , nếu không sẽ dừng function lại
  // var isValid = kiemTraRong(sv.ma, "spanMaSV");
  // if (isValid) {
  if (isValid) {
    dssv.push(sv);
    var dataJson = JSON.stringify(dssv);
    // lưu vào local storage
    localStorage.setItem("DSSV_JSON", dataJson);
    renderDSSV(dssv);
    // }
    //   dssv.push(sv);
    //  convert array dssv thành json
    // var dataJson = JSON.stringify(dssv);
    // console.log("dataJson", dataJson);
    //    set get remove
    //    lưu json xuống
    // localStorage.setItem("DSSV_JSON", dataJson);
    //  reder  lên layout
    //   renderDSSV(dssv);
  }
}

// tìm vị trí => findIndex
// splice( vị trí, số lượng phần tử cần xóa)
function xoaSv(id) {
  var viTri = -1;
  for (var i = 0; i < dssv.length; i++) {
    var sv = dssv[i];
    if (sv.ma == id) {
      viTri = i;
    }
  }
  if (viTri != -1) {
    // tìm thấy sinh viên cần xóa
    dssv.splice(viTri, 1);
    var dataJson = JSON.stringify(dssv);
    localStorage.setItem("DSSV_JSON", dataJson);
    // var dataJson = JSON.stringify(dssv);
    // localStorage.setItem("DSSV_JSON", dataJson);
    // cập nhật lại giao diện
    renderDSSV(dssv);
  }
}
function suaSv(id) {
  var viTri = dssv.findIndex(function (item) {
    return item.ma == id;
  });
  if (viTri != -1) {
    document.getElementById("txtMaSV").disabled = true;
    showThongTinLenForm(dssv[viTri]);
  }
}
//  callback function

function capNhatSinhVien(sv) {
  document.getElementById("txtMaSV").disabled = false;

  var sv = layThongTinTuForm();
  var viTri = dssv.findIndex(function (item) {
    return item.ma == sv.ma;
  });
  if (viTri !== -1) {
    var dataJson = JSON.stringify(dssv);
    localStorage.setItem("DSSV_JSON", dataJson);
    dssv[viTri] = sv;
    renderDSSV(dssv);
  }
}

function resetForm() {
  document.getElementById("formQLSV").reset();
}
