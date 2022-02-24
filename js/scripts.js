
var seconds = 0, minutes = 0, hours = 0, t, video=0, objection=0;

function playvideo(){
	console.log("Start video and timer.")
	$("#play_button").hide();
	$("#object_button").show();
	$("#objection_types").hide();
	$("#msg").hide();
	$("#video1")[0].src += "&autoplay=1";
	start_time();
};

function object(){
	found = 0;
	$("#play_button").hide();
	$("#msg").hide();
	time = hours*60+minutes*60+seconds
	for (let i = 0; i < videos['videos'][video]['objections'].length; i++) {
			if ((videos['videos'][video]['objections'][i]["seconds"]-1<time) & (videos['videos'][video]['objections'][i]["seconds"]+3>time)) {
				found = 1;
				objection = i;
			}
	}
	if (found==1) {
		console.log("There is a valid objection around "+time+" seconds.")
		$("#object_button").hide();
		$("#objection_types").show();
		$("#msg").css("background-color", "yellow");
		$('#msg').show();
		$('#msg').html("What objection are you making?")
	} else {
		console.log("No objection found around "+time+" seconds.")
		$("#msg").css("background-color", "orange");
		$('#msg').show();
		$('#msg').html("Overruled! There's no objection here.")
	}
};

function object_type(type){
	$("#play_button").hide();
	$("#object_button").show();
	$("#objection_types").hide();
	$("#msg").hide();
	if (videos['videos'][video]['objections'][objection]["type"]==type) {
		console.log("Sustained!",type)
		$("#msg").css("background-color", "green");
		$('#msg').show();
		$('#msg').html("Sustained!")
	} else {
		(videos['videos'][video]['objections'][objection]["type"]=correct_type)
		console.log("Overruled! "+type+" objection not found.")
		$("#msg").css("background-color", "red");
		$('#msg').show();
		$('#msg').html("Overruled!  "+correct_type+"would have been granted")
	}
};

function new_video(i){
	if (i != "null") {
		video = i
		url = videos['videos'][i]["url"]
		$("#video1")[0].src = "https://www.youtube-nocookie.com/embed/"+url+"?controls=0&showinfo=0&cc_load_policy=1";
		$("#play_button").show();
		$("#object_button").hide();
		$("#objection_types").hide();
		$("#msg").hide();
	}
}

function add() {
    // inspired by https://jsfiddle.net/Daniel_Hug/pvk6p/
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    $('#timer').val( (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds) );
    timer();
}

function timer() {
    t = setTimeout(add, 1000);
}

function start_time() {
  timer();
  $('#play').hide();
  $('#pause').show();
  $('#timer_div').css("background-color", "#c2fcd8");
  $('#timer').css("background-color", "#c2fcd8");
}

function pause_time() {
  clearTimeout(t);
  $('#play').show();
  $('#pause').hide();
  $('#timer_div').css("background-color", "white");
  $('#timer').css("background-color", "white");
}
