$("form").submit(function(event){
  var input = true
  var location = $("streetaddr").val();
  var full_name = $("#fullname").val()
  if(full_name==0){
    $("#nameerrormsg").css('display','block');
    event.preventDefault();
    input = false;
  }
  else{
    $("#nameerrormsg").css('display','none');
  }
  if(location==0){
    $("#nameerrormsg").css('display','block');
    event.preventDefault();
    input = false;
  }
  else{
    $("#nameerrormsg").css('display','none');
  }
return input
})
