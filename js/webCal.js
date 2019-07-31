//global variables
var repeatDaySelect = -1;




function addRepeatDay(){
	var day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
	for(var i = 0; i < 5; i++){
		$("#repeatSelect").append("<option>" + day[i] + "</option>");
	}
}

function addHour(){
	for(var i = 7; i <= 19; i++){
		$("#Hour").append("<option>" + i + "</option>");
	}
}

function addMinute(){
	for(var i = 0; i < 60; i += 5){
		$("#Minute").append("<option>" + i + "</option>");
	}

}

function addEventListener(){
	$("#submitButton").on("click", function(){
		createEvent();
	});

	console.log("ready");
}

function createEvent(){
	var hour = $("#Hour").val();
	var minute = $("#Minute").val();
	var day = repeatDaySelect;

	console.log(hour);
	console.log(minute);
	console.log(day);
}

function repeatDay(){
	var days = ["mon", "tue", "wed", "thu", "fri"];
	for(var i = 0; i < days.length; i++){
		$("#" + days[i]).on("click", function(){
			repeatDaySelect = $(this).attr('id')
			console.log(repeatDaySelect);
		});
	}
}


repeatDay();
addEventListener();
addRepeatDay();
addHour(); 
addMinute();

