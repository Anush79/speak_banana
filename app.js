var serverurl = "https://api.funtranslations.com/translate/minion.json";

var textInput = document.querySelector("#input_text");
var btntranslate = document.querySelector("#btn_translate");
var textOutput = document.querySelector("#translated");
var pickaboo = document.querySelector("#pickaboo");
const song = new Audio("sound/banana_song.mp3");
const hello = new Audio("sound/hello.mp3");

function errorhandle(error) {
  console.log("Some Error Occured ", error);
  alert("Something went wrong, Please try again later");
}

function translatedURL(text) {
  return serverurl + "?" + "text=" + text;
}

function onclick() {
  var input = textInput.value;
  pickaboo.style.visibility = "visible";
  pickaboo.style.animationName = "pickaboo";
  hello.play();
  setTimeout( pickaboo.style.animationName = "", 5000)

  fetch(translatedURL(input))
    .then((response) => response.json())
    .then((json) => {
      var translatedtext = json.contents.translated;
      textOutput.innerText = translatedtext;
    })
    .catch(errorhandle);
}

function banana_song() {
  song.play();
}
btntranslate.addEventListener("click", onclick);
