// bai 1
var themso = [];


function themSo() {
    var themSoVaoMang = Number(document.getElementById("ThemSo").value);

    themso.push(themSoVaoMang);
    document.getElementById("txtResultThemSo").innerHTML = themso;

}
document.getElementById("btnThemSo").onclick = themSo;


function tongSoDuong() {
    var sum = 0;
    for (var i = 0; i < themso.length; i++) {
        if (themso[i] >= 0) {
            sum += Number(themso[i]);
        }
    }
    document.getElementById("txtResultTinhTong").innerHTML = "Tổng số dương: " + sum;

}
document.getElementById("btnTinhTong").onclick = tongSoDuong;

// bai 2
function demsoduong() {
    var count = 0;
    for (var i = 0; i < themso.length; i++) {
        if (themso[i] >= 0) {
            count++;
        } else
            count = count;
    }
    document.getElementById("txtResultDem").innerHTML = "Số dương: " + Number(count);
}
document.getElementById("btnDem").onclick = demsoduong;


// bai 3
function timMin() {
    //giả sử số đầu tiên là số nhỏ nhất
    var viTri = 0;
    var min = themso[0];
    for (var i = 1; i < themso.length; i++) {
        if (min > themso[i]) {
            //số nhỏ hơn min
            //lưu số nhỏ hơn tìm được vào min
            min = themso[i]
            viTri = i
        }
    }

    document.getElementById("txtResultMin").innerHTML = "Số nhỏ nhất: " + Number(min);
}
document.getElementById("btnMin").onclick = timMin;

// bai 4
function timsoduongnhonhat() {
    var soduong = themso.filter(function (n) {
        return n >= 0;
    })
    var index = 0;
    var minduong = soduong[0];
    for (var j = 1; j < soduong.length; j++) {
        if (minduong > soduong[j]) {
            minduong = soduong[j];
            index = j;
        }
    }
    document.getElementById("txtResultMinduong").innerHTML = "Số dương nhỏ nhất: " + Number(minduong);
}
document.getElementById("btnMinduong").onclick = timsoduongnhonhat;


// function timsoduongnhonhat() {
//     var mangPhu = [];
//     for (var i = 0; i < themso.length; i++) {
//         if (themso[i] > 0) {
//             mangPhu.push(themso[i]);
//         }
//     }

//     var minDuong = mangPhu[0];
//     for (var k = 0; k < mangPhu.length; k++) {
//         if (mangPhu[k] < minDuong) {
//             minDuong = mangPhu[k];
//         }
//     }
//     document.getElementById("txtResultMinduong").innerHTML = "Số dương nhỏ nhất là:  " + minDuong;
// }
// document.getElementById("btnMinduong").onclick = timsoduongnhonhat;


function timsochancuoicung() {
    var odd = themso.filter(function (k) {
        return k % 2 == 0;
    })
    lastodd = odd[odd.length - 1];


    document.getElementById("txtResultodd").innerHTML = "Số chẵn cuối cùng " + lastodd;
}
document.getElementById("btnodd").onclick = timsochancuoicung;

// 
function sapXepTangDan() {
    var themso2 = [];
    for (var i = 0; i < themso.length; i++) {
        themso2.push(themso[i]);
    }


    for (var i = 0; i < themso2.length - 1; i++) {
        for (var j = 0; j < themso2.length; j++) {
            // for(var k =0)
            if (themso2[j] > themso2[j + 1]) {
                // nếu vị j+1 có giá trị nhỏ hơn j
                // => hoán chuyển vị trí
                //temp chứa tạm giá trị
                var temp = themso2[j];
                themso2[j] = themso2[j + 1];
                themso2[j + 1] = temp;
            }
        }
    }
    document.getElementById("sx").innerHTML = "Mảng sau khi sắp xếp: " + themso2;
}
document.getElementById("btnsx").onclick = sapXepTangDan;










function demsoamvaduong() {
    var count = 0;
    var count1 = 0;
    for (var i = 0; i < themso.length; i++) {
        if (themso[i] >= 0) {
            count++;
        } else
            count = count;
        if (themso[i] < 0) {
            count1++;
        }else 
        count1 =count1;
    }
if(count == count1){
    document.getElementById("ss").innerHTML = "Số dương = Số âm" ;
}else if(count > count1){
    document.getElementById("ss").innerHTML = "Số dương > Số âm" ;
}else 
document.getElementById("ss").innerHTML = "Số dương < Số âm" ;
    
}
document.getElementById("btnss").onclick = demsoamvaduong;
