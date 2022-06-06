$(document).ready(function(){

  $('#slideImage>ul>li').hide();
  $('#slideImage>ul>li:first-child').fadeIn(500);

  setInterval(function(){
    $('#progressShow_1').animate({'width':"100px"},5000).delay(500);
    $('#progressShow_1').animate({"width":"0px"},0);
  }); // 선택자 공부해서 프로그래스 바 분할 조작 해야댐
  setInterval(function(){
    $('#slideImage>ul>li:first-child').fadeOut(500).next().delay(500).fadeIn(500).end().appendTo('#slideImage>ul');
  },5500);
  setTimeout(function(){
    setInterval(function(){
      $('#progressBarBase >li:last-child').prependTo('#progressBarBase');
    },5500);
  },500);
  // fadeOut() 과 fadeIn은 시작과 동시에 다음 함수로 넘어간다.
  // 고로 fadeOut(2000).fadeIn(1000) 할 시엔 반쯤 사라질때 다시 뜬다.

});
