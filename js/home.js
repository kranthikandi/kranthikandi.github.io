/**
 * 
 */
alert("11");
var registerdata = $("#registerData");
var managedata=  $("#managedata");
var logdata =  $("#logdata");
$("#register").on("click", function(event){
	alert("hello1");
	registerdata.show();
});
$("#manage").on("click", function(event){
	alert("hello2");
	managedata.show();
});
$("#log").on("click", function(event){
	alert("hello3");
	logdata.show();
});