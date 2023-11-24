const questions=[
    {            //Question1
        'que': 'Which of the following is a markup language',
        'a':'HTML',
        'b':'PHP',
        'c':'Javascript',
        'd':'flask',
        'correct':'a'
    },
    {            //Question2
        'que': 'Which of the following is for styling a webpage',
        'a':'Nodejs',
        'b':'Reachjs',
        'c':'CSS',
        'd':'Flask',
        'correct':'c'
    },
    {            //Question3
        'que': 'Which of the following Planet is nearest to earth',
        'a':'Mercury',
        'b':'Venus',
        'c':'Jupiter',
        'd':'Moon',
        'correct':'b'
    },
]

let index=0;
let total=questions.length;
let correct=0;
let incorrect=0;
const question=document.getElementById("question");
let optioninputs=document.querySelectorAll("input[type='radio']")

const loadquestion = () => {
    if (index===total) {
      return endQuiz()
    } else {
        reset();
    }
    const data=questions[index];
    question.innerText=`${index+1}) ${data.que}`;
    optioninputs[0].nextElementSibling.innerText=data.a;
    optioninputs[1].nextElementSibling.innerText=data.b;
    optioninputs[2].nextElementSibling.innerText=data.c;
    optioninputs[3].nextElementSibling.innerText=data.d;
}


 function submitit() {
    const data =questions[index];
    const ans=getanswers(optioninputs);
    console.log(ans,data.correct)
    if (ans==data.correct) { 
        correct++
    } else {
        incorrect++
    }
    index++;
    loadquestion();
    return;
}

function getanswers(optioninputs){
    let answer;
    optioninputs.forEach(
        (input) => {
            if(input.checked){
                answer=input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optioninputs.forEach(
        (inputE1) => {
        inputE1.checked = false;
    });
}
const endQuiz = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementById("main").innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        </div>
    `
}    

loadquestion(index)

