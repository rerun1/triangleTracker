// Equilateral: All sides are equal.
// Isosceles: Exactly 2 sides are equal.
// Scalene: No sides are equal.
// NOT a triangle: The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.
//

$(document).ready(function(){
  $("form#lengths").submit(function(event){
    event.preventDefault();

    var userSide1 = parseInt($("input#side1").val());
    var userSide2 = parseInt($("input#side2").val());
    var userSide3 = parseInt($("input#side3").val());

    alert(userSide1);
    alert(userSide2);
    alert(userSide3);

    
  });
});
