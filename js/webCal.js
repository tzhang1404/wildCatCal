//global variables
var repeatDaySelect = -1;




function addRepeatDay(){
	var day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
	for(var i = 0; i < 5; i++){
		$("#repeatSelect").append("<option>" + day[i] + "</option>");
	}
}

function addHour(){
	for(var i = 8; i <= 19; i++){
		$("#HourFrom").append("<option>" + i + "</option>");
		$("#HourTo").append("<option>" + i + "</option>");
	}
}

function addMinute(){
	for(var i = 0; i < 60; i += 5){
		$("#MinuteFrom").append("<option>" + i + "</option>");
		$("#MinuteTo").append("<option>" + i + "</option>");
	}

}


function resetEventPanel(){
	$(".repeatChoice").removeClass("activeButton");
}

function createEvent(){
	console.log("in");
	var days = ["mon", "tue", "wed", "thu", "fri"];
	var hourFrom = $("#HourFrom").val();
	var minuteFrom = $("#MinuteFrom").val();
	var hourTo = $("#HourTo").val();
	var minuteTo = $("#MinuteTo").val();
	var day = days.indexOf(repeatDaySelect);
	var row = ".myRow." + hourFrom;
   	var col = "> .myCol:eq(" + day + ")";
   	$(row + col).append("<div id = '123'></div>");
   	$("#123").addClass("activeButton");
   	$("#123").height("400%");
}

function setRepeatDay(){
	var days = ["mon", "tue", "wed", "thu", "fri"];
	for(var i = 0; i < days.length; i++){
		$("#" + days[i]).on("click", function(){
			repeatDaySelect = $(this).attr('id')
		});
	}
}

function repeatDayButtonControl(){
	$(".repeatChoice").click(function(){
		$(".repeatChoice").removeClass("activeButton");
		$(this).addClass("activeButton");
		console.log("active");
	})

	
}

$("#submitButton").click(function(){
		createEvent();
		resetEventPanel();
});

setRepeatDay();
repeatDayButtonControl();
addRepeatDay();
addHour(); 
addMinute();

