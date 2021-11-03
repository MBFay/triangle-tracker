$(document).ready(function() {
  $("#triangle-form").submit(function(event) {
    event.preventDefault();
    let side1 = parseInt($("#side1").val()); 
    let side2 = parseInt($("#side2").val());
    let side3 = parseInt($("#side3").val());

    if (((side1 + side2) <= side3) || ((side2 + side3) <= side1) || ((side3 + side1) <= side2)) {
      $(".result").text("This is not a triangle");
    } else if (side1 === side2 && side2 === side3 && side1 === side3) {
      $(".result").text("This is an equilateral triangle");
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      $(".result").text("This is an iscosceles triangle");
    } else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
      $(".result").text("This is an scalene triangle");
    } 
  });
});