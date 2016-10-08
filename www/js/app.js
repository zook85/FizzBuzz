window.onload = function()
{
function CheckAnswer(answer) {
    if (answer == FizzBuzz[count]) {
        CorrectSound.pause();
        if (CorrectSound.currentTime > 0) {CorrectSound.currentTime = 0;}
        WrongSound.pause();
        if (WrongSound.currentTime > 0) {WrongSound.currentTime = 0;}
        CorrectSound.play();
        if (count == 100) {
            alert('You are victorious! Do it again.');
            count = 1;
            LA = 0;
            LoadScreen();
        }
        else {
            LA = answer;
            count++;
            LoadScreen();
             }
    }
    else {
        CorrectSound.pause();
        if (CorrectSound.currentTime > 0) {CorrectSound.currentTime = 0;}
        WrongSound.pause();
        if (WrongSound.currentTime > 0) {WrongSound.currentTime = 0;}
        WrongSound.play();
        alert('You failed! Your score was ' + (count - 1) + '. Please try again.');
        count = 1;
        LA = 0;
        LoadScreen();
    }
}
    
function LoadScreen() {
    
    document.getElementById("LastAnswer").innerHTML = '<h1 align=center>' + LA + '</h1>';
    var a = Math.floor((Math.random() * 3) - 1);
    b1 = (count + a - 1);
    b2 = (count + a);
    b3 = (count + a + 1);
    document.getElementById("BNR1").innerHTML = b1;
    document.getElementById("BNR2").innerHTML = b2;
    document.getElementById("BNR3").innerHTML = b3;
   
}
    




CorrectSound = new Audio("audio/correct.wav");
WrongSound = new Audio("audio/wrong.wav");    
var FizzBuzz = [];
    FizzBuzz.push(0);
var count = 1;
var LA = 0;
var b1 = 0;
var b2 = 0;
var b3 = 0;

    
for (var i = 1; i <= 100; i++) {
	var isDivisibleByThree = i % 3 === 0;
	var isDivisibleByFive = i % 5 === 0;

    if (isDivisibleByThree && isDivisibleByFive) {
		FizzBuzz.push("FizzBuzz");
	}
	else if (isDivisibleByThree) {
		FizzBuzz.push("Fizz");
	}
	else if (isDivisibleByFive) {
		FizzBuzz.push("Buzz");
	}
	else {
		FizzBuzz.push(i);
	}
}



LoadScreen();


    document.getElementById("BNR1").addEventListener("click", function (){CheckAnswer(b1);});
    document.getElementById("BNR2").addEventListener("click", function (){CheckAnswer(b2);});
    document.getElementById("BNR3").addEventListener("click", function (){CheckAnswer(b3);});
    document.getElementById("BFizz").addEventListener("click", function (){CheckAnswer('Fizz');});
    document.getElementById("BBuzz").addEventListener("click", function (){CheckAnswer('Buzz');});
    document.getElementById("BFizzBuzz").addEventListener("click", function (){CheckAnswer('FizzBuzz');});    

    
    
    
    
    
    
}