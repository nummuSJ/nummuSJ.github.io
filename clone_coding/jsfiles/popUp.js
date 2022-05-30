$(document).ready(function(){

  $('#menuimg').hover(function(){
      $('#menuimg').css('transform','rotate(90deg)');
      $('#menuPopUp').css('opacity','1');
    },function(){
      $('#menuimg').css('transform','rotate(0deg)');
      $('#menuPopUp').css('opacity','0');
    }
  );

  if($('#menuPopUp').css('opacity') >= '0.1'){
    $('#menuPopUp').hover(function(){
      $('#menuimg').css('transform','rotate(90deg)');
      $('#menuPopUp').css('opacity','1');
    },function(){
      $('#menuimg').css('transform','rotate(0deg)');
      $('#menuPopUp').css('opacity','0');
      //작동안함 !! 팝업창에 마우스 올려서 팝업이 유지되어야 하는데 그렇게 안됌
      }
    );
  }

});
