//global variables
var repeatDaySelect = [];


/*	------------------------
 This is the page set up logic
	-adding options to all the time selection and prepare the event panel 
	------------------------*/

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
		if(i <10){
			$("#MinuteFrom").append("<option>" + "0" + i + "</option>");
			$("#MinuteTo").append("<option>" + "0" + i + "</option>");
		}
		else{
			$("#MinuteFrom").append("<option>" + i + "</option>");
			$("#MinuteTo").append("<option>" + i + "</option>");
		}
	}
}

//--------------------------------------

//This portion is for event creation

function resetEventPanel(){
	$(".repeatChoice").removeClass("activeButton");
}

function createEvent(){

	var days = ["mon", "tue", "wed", "thu", "fri"];
	var hourFrom = $("#HourFrom").val();
	var minuteFrom = $("#MinuteFrom").val();
	var hourTo = $("#HourTo").val();
	var minuteTo = $("#MinuteTo").val();
	var day = days.indexOf(repeatDaySelect);
	var title = $("#event-title").val();
	var height = getHour(hourFrom, minuteFrom, hourTo, minuteTo) * 50;

	var eventID = String(hourFrom) + String(minuteFrom) + String(hourTo) + String(minuteTo);
   	$('.overlayEvents').append("<div id = '" + eventID + "'>" + title + "</div>");
   	$("#" + eventID).addClass("eventBlock");
   	$("#" + eventID).height(height + "px");
   	$("#" + eventID).css('left',getDayPosition(day));
   	$("#" + eventID).css('top', getHourPosition(hourFrom, minuteFrom));
}

function getDayPosition(day){
	return day * 20 + '%';
}
function getHourPosition(hourFrom, minuteFrom){
	hourFrom = parseInt(hourFrom, 10);
	minuteFrom = parseInt(minuteFrom, 10);
	console.log(((hourFrom - 8) * 60 + minuteFrom) / 60 * 50);
	return (((hourFrom - 8) * 60 + minuteFrom) / 60 * 50) + 'px';
}

function getHour(hourFrom, minuteFrom, hourTo, minuteTo){
	hourFrom = parseInt(hourFrom, 10);
	minuteFrom = parseInt(minuteFrom, 10);
	hourTo = parseInt(hourTo, 10);
	minuteTo = parseInt(minuteTo, 10);

	if(hourFrom == hourTo){
		return (minuteTo - minuteFrom)/60;
	}
	else{
		var totalMinutes;
		if(minuteTo > minuteFrom){
			totalMinutes = (hourTo - hourFrom) * 60 + (minuteTo - minuteFrom);
			return totalMinutes/60;
		}
		else{
			totalMinutes = (60 - minuteFrom) + (hourTo - hourFrom - 1) * 60 + minuteTo;
			return totalMinutes/60;
		}
	}
}


function setRepeatDay(){
	var days = ["mon", "tue", "wed", "thu", "fri"];
	for(var i = 0; i < days.length; i++){
		$("#" + days[i]).on("click", function(){
			repeatDaySelect.add($(this).attr('id'));
		});
	}
}

function repeatDayButtonControl(){
	$(".repeatChoice").click(function(){
		$(this).toggleClass("activeButton");
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

