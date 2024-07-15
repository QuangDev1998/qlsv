var dssv = [];

function renderDSSV() {
    var contentHTML = "";
    for (var i = 0; i < dssv.length; i++) {
        var sv = dssv[i];
        var contentTr = `<tr>
        <td>${sv.ma}</td>
         <td>${sv.ten}</td>
          <td>${sv.email}</td>
           <td>${sv.tinhDTB().toFixed(2)}</td>
           <td>
           <button onclick="xoaSv('${sv.ma}')" class="btn btn-danger" >Xóa</button>
            <button class="btn btn-danger" >Sửa</button>
           </td>
        </tr>` ;
        contentHTML = contentHTML + contentTr;
    }
    document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}

function themSv() {
    var ma = document.getElementById("txtMaSV").value;
    var ten = document.getElementById("txtTenSV").value;
    var email = document.getElementById("txtEmail").value;
    var matKhau = document.getElementById("txtPass").value;
    var toan = document.getElementById("txtDiemToan").value * 1;
    var ly = document.getElementById("txtDiemLy").value * 1;
    var hoa = document.getElementById("txtDiemHoa").value * 1;

    var sv = {
        ma: ma,
        ten: ten,
        email: email,
        matKhau: matKhau,
        toan: toan,
        ly: ly,
        hoa: hoa,
        tinhDTB: function () {
            return (this.toan + this.ly + this.hoa) / 3;
        }

    };
    dssv.push(sv);
    console.log(" data sau khi thêm", dssv);
    renderDSSV(dssv);

 
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
    if(viTri != -1){
        // tìm thấy sinh viên cần xóa
        dssv.splice(viTri, 1);
        // cập nhật lại giao diện 
        renderDSSV();
    }
}

//  callback function