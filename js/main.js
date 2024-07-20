var dssv = [];

// function renderDSSV() {

// }
// lấy json lên khi user load trang
var dataJson = localStorage.getItem("DSSV_JSON");
if (dataJson != null) {
  dssv = JSON.parse(dataJson);
}
// JSON.parse(dataJson) sẽ return về null hoặc array
renderDSSV(dssv);
function themSv() {
  // lấy thông tin từ form
  var sv = layThongTinTuForm();
  //   kiểm tra data hợp lệ hay không , nếu không sẽ dừng function lại
  var isValid = kiemTraRong(sv.ma, "spanMaSV");
  if (isValid) {
    dssv.push(sv);
    var jsonDSSV = JSON.stringify(DSSV);
    console.log("🚀[index.js:34]: DSSV: ", DSSV);
    // lưu vào local storage
    localStorage.setItem("DSSV_JSON", jsonDSSV);
    renderDSSV();
  }
  //   dssv.push(sv);
  //  convert array dssv thành json
  //   var dataJson = JSON.stringify(dssv);
  //   console.log("dataJson", dataJson);
  //    set get remove
  //    lưu json xuống
  //   localStorage.setItem("DSSV_JSON", dataJson);
  //  reder  lên layout
  //   renderDSSV(dssv);
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
