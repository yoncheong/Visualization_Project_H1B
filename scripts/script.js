function simpleMessage() {
	alert("This is a simple message");
}


var myImage = document.getElementById("mainImage");
var imageArray = ["style/image01.jpg", "style/image02.jpg",
                  "style/image03.jpg", "style/image04.jpg"];

var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src", imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

var intervalHandle = setInterval(changeImage, 2500);

//setInterval returns a value
myImage.onclick = function() {
	clearInterval(intervalHandle);
};
