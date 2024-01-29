var cookies = document.querySelector('#cookieFooter');

var temp1 = document.querySelector('#temp1');
var temp2 = document.querySelector('#temp2');
var temp3 = document.querySelector('#temp3');
var temp4 = document.querySelector('#temp4');
var temp5 = document.querySelector('#temp5');
var temp6 = document.querySelector('#temp6');
var temp7 = document.querySelector('#temp7');
var temp8 = document.querySelector('#temp8');


function popUp(element) {
    alert("loading weather report");
}

function remove(element) {
    cookies.remove(element);
}

function changeTemp(element) {
    var celsius1 = Math.round((75 - 32) * (5 / 9));
    temp1.textContent = celsius1 + "°";
    var celsius2 = Math.round((60 - 32) * (5 / 9));
    temp2.textContent = celsius2 + "°";
    var celsius3 = Math.round((80 - 32) * (5 / 9));
    temp3.textContent = celsius3 + ("°")
    var celsius4 = Math.round((66 - 32) * (5 / 9));
    temp4.textContent = celsius4 + ("°");
    var celsius5 = Math.round((69 - 32) * (5 / 9));
    temp5.textContent = celsius5 + ("°");
    var celsius6 = Math.round((61 - 32) * (5 / 9));
    temp6.textContent = celsius6 + ("°");
    var celsius7 = Math.round((78 - 32) * (5 / 9));
    temp7.textContent = celsius7 + ("°");
    var celsius8 = Math.round((70 - 32) * (5 / 9));
    temp8.textContent = celsius8 + ("°");


}
