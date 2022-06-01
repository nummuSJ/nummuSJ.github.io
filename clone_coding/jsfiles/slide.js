var slide1 = $('#slide1');
var slide2 = $('#slide2');
var slide3 = $('#slide3');

$(document).ready(function(){

  setInterval("setTime()",0);
  // var slide1 = $('#slide1');
  // var slide2 = $('#slide2');
  // var slide3 = $('#slide3');

  // setInterval(function(){
  //   slide1.delay(1000);
  //   slide1.css('opacity','0');
  //   slide1.css('pointer-events','none');
  //   slide2.css('opacity','1');
  //   slide2.css('pointer-events','all');
  //   slide3.css('opacity','0');
  //   slide3.css('pointer-events','none');
  //   slide2.delay(1000);
  //   slide1.css('opacity','0');
  //   slide1.css('pointer-events','none');
  //   slide2.css('opacity','0');
  //   slide2.css('pointer-events','none');
  //   slide3.css('opacity','1');
  //   slide3.css('pointer-events','all');
  //   slide3.delay(1000);
  //   slide1.css('opacity','1');
  //   slide1.css('pointer-events','all');
  //   slide2.css('opacity','0');
  //   slide2.css('pointer-events','none');
  //   slide3.css('opacity','0');
  //   slide3.css('pointer-events','none');
  // },0);

});

function setTime(){
  slide1.delay(1000);
  slide1.css('opacity','0');
  slide1.css('pointer-events','none');
  slide2.css('opacity','1');
  slide2.css('pointer-events','all');
  slide3.css('opacity','0');
  slide3.css('pointer-events','none');
  slide2.delay(1000);
  slide1.css('opacity','0');
  slide1.css('pointer-events','none');
  slide2.css('opacity','0');
  slide2.css('pointer-events','none');
  slide3.css('opacity','1');
  slide3.css('pointer-events','all');
  slide3.delay(1000);
  slide1.css('opacity','1');
  slide1.css('pointer-events','all');
  slide2.css('opacity','0');
  slide2.css('pointer-events','none');
  slide3.css('opacity','0');
  slide3.css('pointer-events','none');
}
// 슬라이드 이벤트 덜 완성했음
