$(document).ready(function(){
  $('#subscribe').change(function(){
    if(this.checked == true){
      $('#emailField').css('display','block')
    }
    else {
      $('#emailField').css('display','none')
    }

  })
})
