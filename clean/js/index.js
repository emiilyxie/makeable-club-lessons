let sampleParagraph = document.getElementById("sample-paragraph");
let body = document.getElementsByTagName("body")[0];

sampleParagraph.onclick = function() {
  let textContent = "";
  textContent = Math.random();
  sampleParagraph.innerHTML = textContent;

  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  body.style.backgroundColor = randomColor;
}


