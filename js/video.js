//initial load
var video;

window.addEventListener("load", function() {
	console.log("load test")

});

//main function
window.onload = function(){
var video = document.querySelector("#player1");
console.log('second load test');
var volumeCurrent = 100;

//play
// 1. define variable
var videoPlay = document.getElementById("play");
// 2. event
videoPlay.addEventListener("click",function(){
	video.play();
	volumeDisplay.innerHTML = volumeCurrent + "%";
	console.log("Play Video");
	console.log("Volume is "+ volumeCurrent +'%')
	});


//pause
// 1. define variable
var videoPause = document.getElementById("pause");
// 2. event
videoPause.addEventListener("click",function(){
	video.pause();
	console.log("Pause Video");
	});

//video slow button
//1. define variable
var videoSlow = document.getElementById("slower");
var videoSpeed = 1;
// 2. event
videoSlow.addEventListener("click",function(){
	videoSpeed = videoSpeed * 0.9;
	// round video spead to exactly 10% decrease
	videoSpeed = videoSpeed.toFixed(1);
	video.playbackRate = videoSpeed;
	console.log("Speed is " + videoSpeed);
});

//video speed button
//1. define variable
var videoFast = document.getElementById("faster");
// var videoSpeed = 1 -- already defined
// 2. event
videoFast.addEventListener("click", function(){
	videoSpeed = videoSpeed * 1.10;
	// round video spead to exactly 10% decrease
	videoSpeed = videoSpeed.toFixed(1);
	video.playbackRate = videoSpeed;
	console.log("Speed is " + videoSpeed);
});

//video skip button
// 1. define variables 
var videoSkip = document.getElementById("skip");
// 2. event
videoSkip.addEventListener("click",function(){
	console.log("Original location " + video.currentTime);
	let timeNew = video.currentTime + 10;
	if(timeNew > video.duration){
		video.currentTime = 0;
		timeNew = 0;
		console.log("Restarting video");

	}
	else{
		video.currentTime = timeNew;	
		console.log("Video jumped to " + timeNew);
	}

});

//video mute button
// 1. define variables
var videoMute = document.getElementById("mute");
var statusMute = false;
//2. event
videoMute.addEventListener("click",function(){
	if(statusMute == true){
		statusMute = false;
		video.muted = false;
		videoMute.innerHTML = "Mute";
		console.log('Video is unmuted');
	}
	else{
		statusMute = true;
		video.muted = true;
		videoMute.innerHTML = "Unmute";
		console.log('Video is muted');
	}
});

//volume slider
// 1. define variables
var volumeSlider = document.getElementById("slider");
var volumeDisplay = document.getElementById("volume");

// 2. event
volumeSlider.addEventListener("input", function(){
	volumeCurrent = document.getElementById("slider").value;
	video.volume = volumeCurrent/100;
	volumeDisplay.innerHTML = video.volume * 100 + '%';
	document.getElementById("volume").innerHTML = volumeCurrent + "%";
	console.log('Volume is ' + video.volume * 100 + '%');
});


//vintage style button
// 1. define variables
var videoVintage = document.getElementById("vintage");
// 2. event
videoVintage.addEventListener("click", function(){
	video.classList.add("oldSchool");
	console.log('Style is Old School')
})

//original style button
//1. define variables
var videoOriginal = document.getElementById("orig");
// 2. event
videoOriginal.addEventListener("click", function(){
	video.classList.remove("oldSchool");
	console.log('Style is Original')

})
}

