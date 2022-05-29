function screenConver(a , b){
  var convert = document.getElementById(a);
  var target = document.getElementById(b);
  if(target.style.backgroundColor != "#191a1f"){
    target.style.backgroundColor = "#191a1f";
    convert.style.backgroundColor = "transparent";
  }
}
