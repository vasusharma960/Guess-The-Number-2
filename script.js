var randomNumber = generateNumber();

function generateNumber(){
  var num = Math.floor(Math.random() * 100) + 1;
  return num;
}

function checkNumber(){
  var inputNumber = document.getElementById("num").value;

  if(inputNumber == "")
  alert("Enter a Number to Guess");

  else if(inputNumber <= 0 || inputNumber > 100)
  alert("Please enter a number between 1 and 100");

  else{
    if(inputNumber > randomNumber)
    document.getElementById("result").innerText = "Guess a Lesser Number";

    else if(inputNumber < randomNumber)
    document.getElementById("result").innerText = "Guess a Larger Number";

    else{
      document.getElementById("result").innerHTML = "You Got It! <br> Play Again";
      randomNumber = generateNumber();
    }
  }
}
