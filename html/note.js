var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = month + "/" + day + "/" + year;

function updt() {
var ped = document.getElementById("poed").value;
var i = document.getElementById("ins").value;
document.getElementById('callnote').value = today + " as per the bla bla portal policy effective date is " +ped +" ins is coverd at " +i;
}