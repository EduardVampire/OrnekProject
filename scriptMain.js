$(document).ready(function(){
    var ch = true;
      $("#slideDown").click(function(){
        if(ch == true){
        $("#panel").slideDown(1000);
        ch = false;
        }else{
        $("#panel").slideUp(1000);
        ch = true;
        }
      });
});