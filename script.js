var body= document.querySelector("h3");
var color1=document.querySelector('.color1');
var color2=document.querySelector('.color2');
var gradient=document.querySelector('body');
function bg()
{
	gradient.style.background = 
	"linear-gradient(to right,"
	 +color1.value 
	 +", "
	 +color2.value
	 +")";
	 body.textContent = gradient.style.background +";";
}
color1.addEventListener("input",bg)
color2.addEventListener("input",bg)
