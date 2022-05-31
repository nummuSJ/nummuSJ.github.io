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

  // $('#menuPopUp').hover(function(){
  //   $('#menuimg1').css('transform','rotate(90deg)');
  //   $('#menuPopUp').css('opacity','1');
  // },function(){
  //   $('#menuimg1').css('transform','rotate(0deg)');
  //   $('#menuPopUp').css('opacity','0');
  //   //작동안함 !! 팝업창에 마우스 올려서 팝업이 유지되어야 하는데 그렇게 안됌
  //   }
  // );
  //
  // if($('#menuPopUp').css('opacity') == '1'){
  //   $('#menuPopUp').hover(function(){
  //     $('#menuimg1').css('transform','rotate(90deg)');
  //     $('#menuPopUp').css('opacity','1');
  //   },function(){
  //     $('#menuimg1').css('transform','rotate(0deg)');
  //     $('#menuPopUp').css('opacity','0');
  //     //작동안함 !! 팝업창에 마우스 올려서 팝업이 유지되어야 하는데 그렇게 안됌
  //     }
  //   );
  // }

});
