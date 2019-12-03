$('form').submit(function(event) {
  var input = true;
  var address = $("#streetaddr").val();
  var full_names = $("#fullname").val();
  if (full_names == 0){
    $("#nameerrormsg").css("display", "block")
    event.preventDefault();
    correctinput = false;
  }
  else {
    $("#nameerrrormsg").css("display", "none");
  }
  if (address == 0) {
    $("#addrerrormsg").css("display", "block");
    event.preventDefault();
    input = false;
  }
  else {
    $("#addrerrormsg").css("display", "none");
  }
return input;
});
