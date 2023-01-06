//your code here
let text = document.getElementById("evaluatedText");
let count = document.getElementById("letterCount");

function charCount() {
	if(text.value.length == 0){
		count.innerHTML = 0;
	}
	else{
		count.innerHTML = text.value.length;
	}
}
text.oninput = charCount;