let main=document.querySelector("#main");
const savenote = () =>{
    const notes=document.querySelectorAll(".container textarea");
    console.log(notes)
    const data=[];
    notes.forEach(
        (container)=>{
        data.push(container.value)
    }
    )
    if (data.length===0) {
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data))
    }
 
}

const addnote = (text="") => {
    const note =document.createElement("div");
    note.classList.add("container");
    note.innerHTML=`
    <div class="insidecontainer">
    <i class="save  fa fa-save" ></i>
    <i class="delete   fa fa-trash" ></i>
</div>
<textarea>${text}</textarea>
`;  
 

note.querySelector(".delete").addEventListener("click",function()
{note.remove()
savenote()}
)

note.querySelector(".save").addEventListener("click", function()
{savenote()})

main.appendChild(note);
savenote()
}

(
    function() {
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if (lsNotes === null) {
            addnote()
        } else {
            lsNotes.forEach(
                (lsNote) => {
                    addnote(lsNote)
                }
            )
        }
    }
    )()




/* <div class="container">
            <div class="insidecontainer">
                <i class="fa fa-save"></i>
                <i class="fa fa-trash"></i>
            </div>
            <textarea></textarea>
        </div> */