let readmore=document.querySelector("#readmore")
let linkmore=document.querySelector("#link-for-more") 
let dots=document.getElementById("blank")   
let sizebtn=document.querySelector("#plus")

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
  document.getElementById("bigger-display").style.background="black"
}
colorpurple=()=>{
  document.getElementById("bigger-display").style.background="purple"
}
colororange=()=>{
  document.getElementById("bigger-display").style.background=" rgb(223, 190, 128)"
}
sizebtn.addEventListener("click",function(){
sizebtn.innerHTML="42"
})