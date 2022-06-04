$(document).ready(function(){

  $('#slideImage>ul>li').hide();
  $('#slideImage>ul>li:first-child').show();

  setInterval(function(){
    $('#progress div:odd').css("width","90px")
  },0); // 선택자 공부해서 프로그래스 바 분할 조작 해야댐
  setInterval(function(){
    $('#slideImage>ul>li:first-child').fadeOut(1000).next().delay(1100).fadeIn(1000).end().appendTo('#slideImage>ul');
  },5000);
  // fadeOut() 과 fadeIn은 시작과 동시에 다음 함수로 넘어간다.
  // 고로 fadeOut(2000).fadeIn(1000) 할 시엔 반쯤 사라질때 다시 뜬다.

});
