var intervalo = 3000;

function slide1(){
	document.getElementById('pokemon').src="img/150.png";
	setTimeout("slide2()", intervalo)
}
 
function slide2(){
	document.getElementById('pokemon').src="img/151.png";
	setTimeout("slide3()", intervalo)
}
 
function slide3(){
	document.getElementById('pokemon').src="img/pika.png";
	setTimeout("slide1()", intervalo)
}