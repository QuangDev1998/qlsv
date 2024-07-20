//  hợp lệ => return true
function kiemTraRong(value, idErr) {
  if (value.length == 0) {
    document.getElementById(idErr).innerText =
      "Trường hợp này không được để trống";
    return false;
  }
  document.getElementById(idErr).innerText = "";
  return true;
}
