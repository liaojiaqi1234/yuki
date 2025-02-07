var focus1 = document.getElementById("focus");
var pic = document.getElementById("pic")
var picsArr = new Array();
picsArr[0] = "../img/banner1.jpg";
picsArr[1] = "../img/banner2.jpg";
picsArr[2] = "../img/banner3.jpg";
picsArr[3] = "../img/banner4.jpg";
var timer, index = 0
window.onload = showPic();
function showPic() {
	document.getElementById('pic').src = picsArr[index];
	if (index < (picsArr.length - 1)) {
		index++
	}
	else {
		index = (index + 1) % picsArr.length;
	}
	timer = setTimeout("showPic()", 4000);
}
function showPicpre() {
	if (index > 0) {
		index--;
	}
	else {
		index = 3;
	}
	document.getElementById('pic').src = picsArr[index];
	timer = setTimeout("showPicpre()", 4000);
}

function showPre() {
	clearTimeout(timer);
	showPicpre();
}
function showNext() {
	clearTimeout(timer);
	showPic();
}