$(document).ready(function(){
  // setInterval(function(){
  //   $('#layout_2_slide > ul > li').animate({"right":"310px"},2000).delay(2000);
  //   $('#layout_2_slide > ul > li:first-child').appendTo('#layout_2_slide > ul');
  // },0);
  setInterval(function(){
    $('#layout_2_slide > ul > li').css('transform','translate(-310px)');
    $('#layout_2_slide > ul > li:last-child').prependTo('#layout_2_slide > ul');
  },2000)
});
