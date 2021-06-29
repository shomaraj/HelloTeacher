
var numberOfDrumButtons = document.querySelectorAll(".alpha").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".alpha")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}
var numberOfNumButtons = document.querySelectorAll(".number").length;

for (var i = 0; i < numberOfNumButtons; i++) {

  document.querySelectorAll(".number")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    numButtonAnimation(buttonInnerHTML);

  });

}


document.addEventListener("keydown", function(event) {
// console.log("event code is "+event);
// console.log("event value is:"+(event.keyCode));
if(event.keyCode>=64){

  buttonAnimation(event.key);}
  else{
    numButtonAnimation(event.key);
  }
  makeSound(event.key);

});


function makeSound(key) {
key=key.toUpperCase(key);
  switch (key) {
    case "A":
      var soundA = new Audio("sounds/apple.mp3");
      soundA.play();
      break;

    case "B":
      var soundB = new Audio("sounds/ball.mp3");
      soundB.play();
      break;

    case "C":
      var soundC = new Audio('sounds/cat.mp3');
      soundC.play();
      break;

    case "D":
      var soundD = new Audio('sounds/dog.mp3');
      soundD.play();
      break;

    case "E":
      var soundE = new Audio('sounds/elephant.mp3');
      soundE.play();
      break;

    case "F":
      var soundF = new Audio('sounds/fox.mp3');
      soundF.play();
      break;
    case "G":
        var soundG = new Audio('sounds/gift.mp3');
        soundG.play();
        break;
    case "H":
        var soundH = new Audio('sounds/helicopter.mp3');
        soundH.play();
        break;
     case "I":
        var soundI = new Audio('sounds/igloo.mp3');
        soundI.play();
        break;

    case "J":
          var soundJ = new Audio('sounds/jam.mp3');
          soundJ.play();
       break;
    case "K":
       var soundK = new Audio('sounds/kite.mp3');
       soundK.play();
       break;

    case "L":
       var soundL = new Audio('sounds/lizard.mp3');
       soundL.play();
       break;
    case "M":
      var soundM = new Audio('sounds/monkey.mp3');
      soundM.play();
      break;
    case "N":
      var soundN= new Audio('sounds/nose.mp3');
      soundN.play();
      break;
    case "O":
      var soundO = new Audio('sounds/owl.mp3');
      soundO.play();
      break;
    case "P":
       var soundP = new Audio('sounds/parrot.mp3');
       soundP.play();
       break;

   case "Q":
     var soundQ= new Audio('sounds/quill.mp3');
     soundQ.play();
     break;
  case "R":
     var soundR= new Audio('sounds/rocket.mp3');
     soundR.play();
     break;
  case "S":
     var soundS= new Audio('sounds/squirrel.mp3');
     soundS.play();
     break;
  case "T":
     var soundT= new Audio('sounds/tiger.mp3');
     soundT.play();
     break;
  case "U":
     var soundU= new Audio('sounds/umbrella.mp3');
     soundU.play();
     break;
  case "V":
     var soundV= new Audio('sounds/van.mp3');
     soundV.play();
     break;
   case "W":
     var soundW= new Audio('sounds/well.mp3');
     soundW.play();
     break;
   case "X":
     var soundX= new Audio('sounds/xylophone.mp3');
     soundX.play();
     break;

   case "Y":
      var soundY= new Audio('sounds/yak.mp3');
     soundY.play();
     break;

   case "Z":
     var soundZ= new Audio('sounds/zip.mp3');
     soundZ.play();
     break;

   case "0":
    var sound0= new Audio('sounds/zero.mp3');
    sound0.play();
    break;
   case "1":
     var sound1= new Audio('sounds/one.mp3');
     sound1.play();
     break;

    case "2":
      var sound2= new Audio('sounds/two.mp3');
      sound2.play();
      break;

    case "3":
      var sound3= new Audio('sounds/three.mp3');
      sound3.play();
      break;

    case "4":
      var sound4= new Audio('sounds/four.mp3');
      sound4.play();
      break;

     case "5":
       var sound5= new Audio('sounds/five.mp3');
       sound5.play();
       break;

     case "6":
       var sound6= new Audio('sounds/six.mp3');
       sound6.play();
       break;

     case "7":
       var sound7= new Audio('sounds/seven.mp3');
       sound7.play();
       break;

      case "8":
       var sound8= new Audio('sounds/eight.mp3');
       sound8.play();
       break;

     case "9":
       var sound9= new Audio('sounds/nine.mp3');
       sound9.play();
       break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {
console.log("currentKeycodelet :"+ currentKey.keyCode);

currentKey=currentKey.toUpperCase();

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 500);

}


function numButtonAnimation(currentKey) {

   console.log("number is"+currentKey);
   var activeButtonNum=document.querySelector(".n"+currentKey);
   activeButtonNum.classList.add("pressed");
   setTimeout(function() {
   activeButtonNum.classList.remove("pressed");
   }, 500);
}
