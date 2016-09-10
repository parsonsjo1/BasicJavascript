counter = 0;

function setFontFamily(font) {
	document.getElementById('display_text').style.fontFamily = font;
}

function setColor(color) {
	document.getElementById('display_text').style.color = color;
}

function setText(text) {
	document.getElementById('display_text').innerHTML = text;
}

function secretPage() {
	window.open("./secret.html", "_blank");
}

function runEndOfWorld() {
	hideElements();
	unhideElements();
}

function hideElements() {
	document.getElementById("header_welcome").style.display = 'none';
	document.getElementById("header_station").style.display = 'none';
	document.getElementById("orientation_video").style.display = 'none';
	document.getElementById("ready_button").style.display = 'none';
}

function unhideElements() {
	document.getElementById("wrapper_id").style.display = 'block';
	document.getElementById("number_box").style.display = 'inline';
	document.getElementById("header_numbers").style.display = 'inline';
	document.getElementById("button_enter").style.display = 'inline';
}

function checkNumbers() {
	console.log(document.getElementById("number_box").value);
	if(document.getElementById("number_box").value == "4815162342")
	{
		unhideElements2();
		hideElements2();
		x = 1;
		setInterval(changeBackground, 500);
		setInterval(moveButton, 1200);
	}
}

function hideElements2() {
	document.getElementById("wrapper_id").style.display = 'none';
	document.getElementById("number_box").style.display = 'none';
	document.getElementById("header_numbers").style.display = 'none';
	document.getElementById("button_enter").style.display = 'none';
}

function unhideElements2() {
	document.getElementById("save_the_day_button").style.visibility = 'visible';
	document.getElementById("counter").style.visibility = 'visible';

}

function increaseCounter(counter) {
	document.getElementById("counter").textContent = counter;
}

function changeBackground() {
	if(x == 1) 
	{
		color = "black";
		x = 2;
	} 
	else 
	{
		color ="white";
		x = 1;
	}
	//document.body.style.background = color;
}

function moveButton() {
	height = window.outerHeight - 200;
	width = window.outerWidth - 200;

	x = getNewPosition(width);
	y = getNewPosition(height);

	document.getElementById("save_the_day_button").style.top = y + "px";
	document.getElementById("save_the_day_button").style.left = x + "px";

	console.log(x);
	console.log(y);
}

function getNewPosition(dimension) {
	return Math.floor(Math.random() * dimension)
}