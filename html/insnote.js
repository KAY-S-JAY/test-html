var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = month + "/" + day + "/" + year;

document.getElementById('bcbs').value = today + " as per the bla bla portal this is just some place holder text i wrote";

document.getElementById('medicare').value = today + " bla bla protal this is another place holder";
