var countTo;
var countBy;

function counter(countTo, countBy) {
  for(i=countBy; i<=countTo; i+=countBy) {
    $("ul").append("<li>" + i + "</li>");
  };
};

function inputValidation(countTo, countBy) {
  if ($.isNumeric(countTo) === false || $.isNumeric(countBy) === false) {
    alert("Please enter a valid number");
    return false;
  } else if (countTo <= 0 || countBy <= 0) {
    alert("Please enter a non-negative number");
    return false;
  } else if (countBy > countTo) {
    alert("Please enter a count number that is smaller than the number you wish to count to.");
    return false;
  }
  return true;
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
    $("ul").empty();
    countTo = parseInt($("#count-to").val());
    countBy = parseInt($("#count-by").val());
    if (inputValidation(countTo, countBy) === true) {
          counter(countTo, countBy);
    };
  });
});
