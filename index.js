document.querySelector(".btn").addEventListener("click", function() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.body.querySelector(".container h1").textContent = "Player 1 Wins!";
  } else if (randomNumber1 === randomNumber2) {
    document.body.querySelector(".container h1").textContent = "Draw!"
  } else {
    document.body.querySelector(".container h1").textContent = "Player 2 Wins!"
  }

  var button = document.querySelector(".btn");
  buttonPressed(button);
});



function buttonPressed(currentKey) {
  var activeButton = document.querySelector(".btn");
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
