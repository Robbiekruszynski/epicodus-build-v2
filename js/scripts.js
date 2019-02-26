$(document).ready(function(){
  $(".splash").click(function(event){
    event.preventDefault();
    $(".splash").fadeToggle();
    $(".page").fadeToggle();
  })
});
