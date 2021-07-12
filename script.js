function fun()
{
    var mybtn=document.querySelector("#Myb");
    var ele=document.querySelector("#main");
    var btn=document.querySelector("#btn");
    var close=document.querySelector("#close");
    mybtn.addEventListener("click",function(){
          ele.style.display="block";                    
    });
    btn.addEventListener("click",function(){
        ele.style.display="none";                   
  });
    close.addEventListener("click",function(){
        ele.style.display="none";                    
  });
  window.onclick = function(event) {
    if (event.target == ele) {
        ele.style.display = "none";
    }
}
}