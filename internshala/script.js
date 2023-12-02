let readmore=document.querySelector("#readmore");
let linkmore=document.querySelector("#link-for-more"); 
let dots=document.getElementById("blank")   ;
let sizebtn=document.querySelector("#plus");
let borderbtn=document.querySelector(".size-of-kurti");

linkmore.addEventListener("click",function(){
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        linkmore.innerHTML = "Readmore"; 
        readmore.style.display = "none";
      } else {
        dots.style.display = "none";
        linkmore.innerHTML = "Readless"; 
        readmore.style.display = "inline";
      }
    
})
colorblack=()=>{
  document.getElementById("bigger-display").style.background="black";
}
colorpurple=()=>{
  document.getElementById("bigger-display").style.background="purple";
}
colororange=()=>{
  document.getElementById("bigger-display").style.background=" rgb(223, 190, 128)";
}

size32shadow=()=>{
  document.getElementById("size32").style.boxShadow="2px 4px black";
  document.getElementById("size34").style.boxShadow="none";
  document.getElementById("size36").style.boxShadow="none";
  document.getElementById("size38").style.boxShadow="none";
  document.getElementById("size40").style.boxShadow="none";
  document.getElementById("plus").style.boxShadow="none";
}
size34shadow=()=>{
 document.getElementById("size32").style.boxShadow="none";
  document.getElementById("size34").style.boxShadow="2px 4px black";
  document.getElementById("size36").style.boxShadow="none";
  document.getElementById("size38").style.boxShadow="none";
  document.getElementById("size40").style.boxShadow="none";
  document.getElementById("plus").style.boxShadow="none";
}
size36shadow=()=>{
  document.getElementById("size32").style.boxShadow="none";
  document.getElementById("size34").style.boxShadow="none";
  document.getElementById("size36").style.boxShadow="2px 4px black";
  document.getElementById("size38").style.boxShadow="none";
  document.getElementById("size40").style.boxShadow="none";
  document.getElementById("plus").style.boxShadow="none";
}
size38shadow=()=>{
  document.getElementById("size32").style.boxShadow="none";
  document.getElementById("size34").style.boxShadow="none";
  document.getElementById("size36").style.boxShadow="none";
  document.getElementById("size38").style.boxShadow="2px 4px black";
  document.getElementById("size40").style.boxShadow="none";
  document.getElementById("plus").style.boxShadow="none";
}
size40shadow=()=>{
 document.getElementById("size32").style.boxShadow="none";
  document.getElementById("size34").style.boxShadow="none";
  document.getElementById("size36").style.boxShadow="none";
  document.getElementById("size38").style.boxShadow="none";
  document.getElementById("size40").style.boxShadow="2px 4px black";
  document.getElementById("plus").style.boxShadow="none";
}
sizebtn.addEventListener("click",
addsize=()=>{
  document.getElementById("plus").innerHTML="42";
  document.getElementById("size32").style.boxShadow="none";
  document.getElementById("size34").style.boxShadow="none";
  document.getElementById("size36").style.boxShadow="none";
  document.getElementById("size38").style.boxShadow="none";
  document.getElementById("size40").style.boxShadow="none";
  document.getElementById("plus").style.boxShadow="2px 4px black";
})
pic1replace=()=>{
  document.getElementById("bigger-display").style.background="url(pic1.jpeg) no-repeat center center/cover"
  document.getElementById("pic1").style.boxShadow="2px 5px black"
  document.getElementById("pic2").style.boxShadow="none"
  document.getElementById("pic3").style.boxShadow="none"
  document.getElementById("pic4").style.boxShadow="none"
  document.getElementById("pic5").style.boxShadow="none"

}
pic2replace=()=>{
  document.getElementById("bigger-display").style.background="url(pic2.jpeg) no-repeat center center/cover"
  document.getElementById("pic1").style.boxShadow="none"
  document.getElementById("pic2").style.boxShadow="2px 5px black"
  document.getElementById("pic3").style.boxShadow="none"
  document.getElementById("pic4").style.boxShadow="none"
  document.getElementById("pic5").style.boxShadow="none"

}
pic3replace=()=>{
  document.getElementById("bigger-display").style.background="url(pic3.jpeg) no-repeat center center/cover"
 document.getElementById("pic1").style.boxShadow="none"
  document.getElementById("pic2").style.boxShadow="none"
  document.getElementById("pic3").style.boxShadow="2px 5px black"
  document.getElementById("pic4").style.boxShadow="none"
  document.getElementById("pic5").style.boxShadow="none"

}
pic4replace=()=>{
  document.getElementById("bigger-display").style.background="url(pic4.jpeg) no-repeat center center/cover"
 document.getElementById("pic1").style.boxShadow=""
  document.getElementById("pic2").style.boxShadow="none"
  document.getElementById("pic3").style.boxShadow="none"
  document.getElementById("pic4").style.boxShadow="2px 5px black"
  document.getElementById("pic5").style.boxShadow="none"

}
pic5replace=()=>{
  document.getElementById("bigger-display").style.background="url(pic5.jpeg) no-repeat center center/cover"
  document.getElementById("pic1").style.boxShadow="none"
  document.getElementById("pic2").style.boxShadow="none"
  document.getElementById("pic3").style.boxShadow="none"
  document.getElementById("pic4").style.boxShadow="none"
  document.getElementById("pic5").style.boxShadow="2px 5px black"
}
