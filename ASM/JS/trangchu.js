var i = 0;
    var arr = [
        { URL: "1.jpg", ten: "1/3" },
        { URL: "2.jpg", ten: "2/3" },
        { URL: "3.jpg", ten: "3/3" },
    ];
    function back() {
        if (i > 0) {
            i--;
        }
        else {
            i = 3;
        }
        document.getElementById("hinh").src = "../img/" + arr[i].URL;
        document.getElementById("ten").innerHTML = arr[i].ten;
    }
    function next() {
        if (i < arr.length - 1) {
            i++;
        }
        else {
            i = 0;
        }
        document.getElementById("hinh").src = "../img/" + arr[i].URL;
        document.getElementById("ten").innerHTML = arr[i].ten;
    }

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
ctx.beginPath();
ctx.moveTo(0,100);
ctx.lineTo(400, 100);
ctx.stroke();