const contain=document.querySelector("#container");
const unorder=document.querySelector("#unodered");
const input=document.querySelector("#inputtag");



    input.addEventListener(
        "keyup", function(event){
          if (event.key=="Enter") {
            addtodo(this.value);
            console.log(this.value);
            localStorage.setItem("input", JSON.stringify(this.value))
            this.value="";
          } 
        }
        )



const addtodo = (input) =>{
    const listitem=document.createElement("li")
    listitem.innerHTML=`
                    <label name="listing">
                        <input type="checkbox"><span class="text">${input}</span> <span class="cross"> &#x2716</span>
                    </label>   
                `
                listitem.addEventListener("click",
                function(){
                    this.classList.toggle("done");
                })

                listitem.querySelector(".cross").addEventListener("click" ,
                function(){
                    listitem.remove()
                })
        
               
                unorder.appendChild(listitem);

}


