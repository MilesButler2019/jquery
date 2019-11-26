$("form").submit(function(event){
  if ( $('input[name=fruit]:checked').val()){
    return;
  }
  alert("You must pick a value")
  event.preventDefault();
})
