function kiemtra() {
    var ht = document.frm1.ht.value;
    var email = document.frm1.email.value;
    var sdt = document.frm1.sdt.value;
    var x = email.indexOf("@");
    var y = email.lastIndexOf(".");
    var loi="";
    if (ht.length < 3 || ht.length > 30) {
        loi = loi + "Họ tên phải nhập từ 3 đến 30 ký tự <br>";
    }
    if (x < 1 || y < (x + 2) || (y + 2) >= email.length) {
        loi = loi + "Email phải đúng định dạng <br>";
    }
    if (loi.length > 0) {
        document.getElementById("loi").innerHTML=loi;
    }
    return false;
}