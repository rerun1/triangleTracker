// Equilateral: All sides are equal.
// Isosceles: Exactly 2 sides are equal.
// Scalene: No sides are equal.
// NOT a triangle: The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.
//


var inequality = function(number1, number2, number3) {
  var add1 = number1 + number2;
  var add2 = number1 + number3;
  var add3 = number2 + number3;

  if (add1 <= number3 || add2 <= number2 || add3 <= number1) {
    return true;
  } else {
    return false;
  }
};

var equilateral = function(number1, number2, number3) {
  if (number1 === number2 && number2 === number3) {
    return true;
  } else {
    return false;
  }
};

var isoceles = function(number1, number2, number3) {
  if (number1 === number2 || number1 === number3 || number2 === number3) {
    return true;
  } else {
    return false;
  }
};

var scalene = function(number1, number2, number3) {
  if (number1 != number2 && number2 != number3) {
    return true;
  } else {
    return false;
  }
}




$(document).ready(function(){
  $("form#lengths").submit(function(event){
    event.preventDefault();

    var userSide1 = parseInt($("input#side1").val());
    var userSide2 = parseInt($("input#side2").val());
    var userSide3 = parseInt($("input#side3").val());


    var inequalityTest = inequality(userSide1, userSide2, userSide3);
    var equilateralTest = equilateral(userSide1, userSide2, userSide3);
    var isocelesTest = isoceles(userSide1, userSide2, userSide3);
    var scaleneTest = scalene(userSide1, userSide2, userSide3);

    if  (inequalityTest) {
      $("p#answer").empty().text("This is not a triangle!");
      $("img#triangleType").remove("src alt").attr({"src": "img/inequality.png", "alt": "This is not a triangle"});
    } else if (equilateralTest){
      $("p#answer").empty().text("Your triangle is equilateral");
      $("img#triangleType").remove("src alt").attr({"src": "img/equilateral.png", "alt": "Your triangle is an equilateral triangle"});
    } else if (isocelesTest) {
      $("p#answer").empty().text("Your triangle is isoceles");
      $("img#triangleType").remove("src alt").attr({"src": "img/isoceles.png", "alt": "Your triangle is an isoceles triangle"});
    } else if (scaleneTest) {
      $("p#answer").empty().text("Your triangle is scalene");
      $("img#triangleType").remove("src alt").attr({"src": "img/scalene.png", "alt": "Your triangle is a scalene"});
    } else {
      $("p#answer").empty().text("Oops! Triangle Typer must be broken. Did you enter a whole positive number in each field?");
      $("img#triangleType").remove("src alt").attr({"src": "img/notTriangle.png", "alt": "Type in triangle that looks like a mountain"});
    }


  });
});
