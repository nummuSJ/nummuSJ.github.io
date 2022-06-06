$(document).ready(function(){

  $('#menuimg1').hover(function(){
      $('#menuimg1').css('transform','rotate(90deg)');
      $('#menuPopUp').css('opacity','1');
      $('#menuPopUp').css('pointer-events','all');
    },function(){
      $('#menuPopUp').css('pointer-events' , 'all');
      setTimeout(function(){
        if($('#menuPopUp').is(":hover") == true){
          $('#menuPopUp').hover(function(){
            $('#menuimg1').css('transform','rotate(90deg)');
            $('#menuPopUp').css('opacity','1');
            $('#menuPopUp').css('pointer-events','all');
          },function(){
            $('#menuimg1').css('transform','rotate(0deg)');
            $('#menuPopUp').css('opacity','0');
            $('#menuPopUp').css('pointer-events','none');
            }
          )
        }else{
          $('#menuimg1').css('transform','rotate(0deg)');
          $('#menuPopUp').css('opacity','0');
          $('#menuPopUp').css('pointer-events','none');
        }
      },100);
    }
  );

  setInterval(function(){
    $('.point_popup').css("top","5px").delay(500);
    $('.point_popup').css("top","10px").delay(500);
  },0);

});
