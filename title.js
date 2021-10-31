var subject = ["HTML","CSS","JAVASCRIPT"]; //목록
var i = 0;
while(i<subject.length){
  document.write('<li><a href="'+subject[i]+'.html">'+subject[i]+'</a></li>');
  i++;
}
