console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit')
}

function happyMouse(evt) {
	evt.preventDefault();

	alert("Great job")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector("img").addEventListener("mouseover", happyMouse)