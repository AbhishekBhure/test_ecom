// Slideshow container

const myslide = document.querySelectorAll('.myslide');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 4000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}

function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 4000);
}

function slidefun(n){
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";

}

// Slideshow container End

//hamburger
const hamburger = document.querySelector('.burger');
const navOne = document.getElementById('nav-1');
const navTwo = document.getElementById('nav-2');
const outclick = document.getElementById('outclick');
const body = document.querySelector("body");

hamburger.addEventListener('click', ()=>{
	navOne.classList.toggle('change');
	navTwo.classList.toggle('show');
	outclick.classList.toggle('show');
	body.classList.toggle('hidden')
});

// document.onclick = function(e) {
// 	if(e.target.id !== 'nav-2' && e.target.id !== 'burger'){
// 		navOne.classList.remove('change');
// 		navTwo.classList.remove('show');
// 	}else{
// 		if(e.target)
// 	}
// }

document.onclick = function(e){
	if(e.target.id == 'outclick'){
		navOne.classList.remove('change');
		navTwo.classList.remove('show');
		outclick.classList.remove('show');
	}
}




//srch toggle

function toggle_srh() {
	var x = document.getElementById("search-mb");
	if (x.style.display === "flex") {
	  x.style.display = "none";
	} else {
	  x.style.display = "flex";
	}
  }
 
//srch toggle  


//side menu toggle

const sideArrow1 = document.querySelector('.side-menu-arrow1');
const dropMenuOne = document.getElementById('dropmenuone');
const dropMenuContentOne = document.getElementById('dropdownone')
dropMenuOne.addEventListener('click', ()=>{
	dropMenuOne.classList.toggle('change');
	dropMenuContentOne.classList.toggle('change');
});

const sideArrow2 = document.querySelector('.side-menu-arrow2');
const dropMenuTwo = document.getElementById('dropmenutwo');
const dropMenuContentTwo = document.getElementById('dropdowntwo')
dropMenuTwo.addEventListener('click', ()=>{
	dropMenuTwo.classList.toggle('change');
	dropMenuContentTwo.classList.toggle('change');
});

const sideArrow3 = document.querySelector('.side-menu-arrow3');
const dropMenuThree = document.getElementById('dropmenuthree');
const dropMenuContentThree = document.getElementById('dropdownthree')
dropMenuThree.addEventListener('click', ()=>{
	dropMenuThree.classList.toggle('change');
	dropMenuContentThree.classList.toggle('change');
});

const sideArrow4 = document.querySelector('.side-menu-arrow4');
const dropMenuFour = document.getElementById('dropmenufour');
const dropMenuContentFour = document.getElementById('dropdownfour')
dropMenuFour.addEventListener('click', ()=>{
	dropMenuFour.classList.toggle('change');
	dropMenuContentFour.classList.toggle('change');
});

//side menu toggle End


//FOOT dropdown

const footArrow1 = document.querySelector('.foot-arrow1');
const footDropOne = document.getElementById('foot-drop1');
const footDropContent1 = document.getElementById('foot-dropdown-one')
footDropOne.addEventListener('click',()=>{
	footDropOne.classList.toggle('change');
	// footDropContent1.classList.toggle('show');
});

const footArrow2 = document.querySelector('.foot-arrow2');
const footDropTwo = document.getElementById('foot-drop2');
const footDropContent2 = document.getElementById('foot-dropdown-two')
footDropTwo.addEventListener('click',()=>{
	footDropTwo.classList.toggle('change');
	// footDropContent2.classList.toggle('show');
});

const footArrow3 = document.querySelector('.foot-arrow3');
const footDropThree = document.getElementById('foot-drop3');
footDropThree.addEventListener('click',()=>{
	footDropThree.classList.toggle('change');
});

//FOOT dropdown End

//Foot-dropdown

// document.addEventListener('DOMContentLoaded', dropdown);
// function dropdown(){
// 	let don = window.matchMedia("(max-width: 480px)");
//     if(don.matches){
// 		function footDropDown(){
// 			document.getElementById('foot-dropdown').classList.toggle("show");
// 		}
// 		window.onclick = function(event) {
// 			if (!event.target.matches('.foot-col-hd')) {
		  
// 			  var dropdowns = document.getElementsByClassName("foot-li");
// 			  var i;
// 			  for (i = 0; i < dropdowns.length; i++) {
// 				var openDropdown = dropdowns[i];
// 				if (openDropdown.classList.contains('show')) {
// 				  openDropdown.classList.remove('show');
// 				}
// 			  }
// 			}
// 		}
// 	}
// }

//disable on scroll
// const showBurger = ()=>{
// 	document.getElementById('nav-2').classList.toggle('show');
// 	const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
// 	const body = document.body;
// 	body.style.height = '100vh';
// 	body.style.overflowY = 'hidden';
// };
// window.addEventListener('scroll', ()=>{
// 	document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
// });





// topscrollbtn for scroll 

const topscrollbtn = document.querySelector("#topscrollbtn");
	window.addEventListener("scroll", ()=> {
		if(window.pageYOffset > 100) {
			topscrollbtn.classList.add("active");
		} else {
			topscrollbtn.classList.remove("active");
		}
	})
topscrollbtn.addEventListener("click",function(){
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth"
	});
});

// topscrollbtn for scroll  End

// scroll hidden
// const modal = document.querySelector("#burger");
// const body = document.querySelector("body");

// const showModal = function (e) {
// 	modal.classList.toggle("hidden");

// 	if (!modal.classList.contains("hidden")) {
// 		// Disable scroll
// 		body.style.overflow = "hidden";
// 	} else {
// 		// Enable scroll
// 		body.style.overflow = "auto";
// 	}
// };
//scorll hidden end