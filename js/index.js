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
	x = 1;
	setInterval(changeBackground, 500);
	setInterval(moveButton, 500);
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

