var countTo;
var countBy;

function counter(countTo, countBy) {
  console.log("Counter Test");

  for(i=countBy; i<=countTo; i+=countBy) {
    console.log(i);
    $("ul").append("<li>" + i + "</li>");
  };

};


$(function() {
  $("body").append("<h1 class=\"jumbotron\">Let's count numbers</h1>");
  $("body").append("<form></form>");
  $("form").append("<div class=\"form-group\" id=\"field1\"></div> <div class=\"form-group\" id=\"field2\"></div>");
  $("#field1").append("<label for=\"count-to\">What number do you want to count to?</label><input id=\"count-to\" class=\"form-control\" type=\"text\">");
  $("#field2").append("<label for=\"count-by\">What would you like to count by?</label><input id=\"count-by\" class=\"form-control\" type=\"text\">");
  $("form").append("<button type=\"submit\" class=\"btn\">Submit</button>");
  $("body").append("<ul></ul>");

  $("form").submit(function(event) {
    event.preventDefault();
    console.log("Submit test");
    $("ul").empty();

    countTo = parseInt($("#count-to").val());
    countBy = parseInt($("#count-by").val());
    console.log(countTo+","+ countBy)

    counter(countTo, countBy);
  });



});
