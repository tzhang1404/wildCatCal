//prepare the date and time in the add event part
function addMonth(){
	var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
	for(var i = 0; i < 12; i++){
		$("#monthSelect").append("<option>" + month[i] + "</option>");
	}
	console.log("loaded");
}

$('#datetimepicker').data("DateTimePicker").FUNCTION()

addMonth();