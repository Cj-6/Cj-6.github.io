function showWelcomeMessage() {
  var nameInput = document.getElementById("name-input").value;
  var feelingInput = document.getElementById("feeling-input").value;
  var message = "";

  if (nameInput.trim() === "") {
    alert("Please enter your name.");
  } else {
    message = "Welcome, " + nameInput + "!";
    if (feelingInput.trim() !== "") {
      message += " I hope you are feeling " + feelingInput + ".  :)";
    }
    document.getElementById("welcome-message").innerHTML = message;
  }
}

function getTime() {
  var currentDate = new Date();
  let Day = currentDate.getDate();
  let Month = currentDate.getMonth() + 1;
  let Year = currentDate.getFullYear();
  let hour = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let seconds = currentDate.getSeconds();
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let test =
    Month + "/" + Day + "/" + Year + " " + hour + ":" + minutes + ":" + seconds;
  document.getElementById("time").innerHTML = test;
}
setInterval(getTime, 100);

function generateCatfish() {
  var randNum = Math.floor(Math.random() * 7) + 1;
  var imgSrc = "images/catfish" + randNum + ".jpg";
  console.log(imgSrc);
  var generatedcode = document.getElementById("generatedcode");
  generatedcode.innerHTML =
    "<img src='" + imgSrc + "' alt='catfish'" + "' class='catfish'>";
}

function changeBodyColor(button) {
  var colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "turquoise",
    "maroon",
    "brown",
    "teal",
    "navy",
    "magenta",
    "indigo",
    "gray",
    "lime",
  ];
  var randColor = Math.floor(Math.random() * colors.length);
  button.style.backgroundColor = colors[randColor];
}

function additionCalculator() {
  var x = 1
  var y = 10
  result = x + " + " + y;

  document.getElementById("generatedcode").innerHTML = result;
}

function popUp() {
  var popUpText = [
    "This is a popup",
    "You look really nice today",
    "von Briesen",
    "I Love President Bush!",
  ];
  var result = Math.floor(Math.random() * popUpText.length);
  alert(popUpText[result]);
}

function playAudio() {
  var audio = document.getElementById("myAudio");
  audio.play();
}