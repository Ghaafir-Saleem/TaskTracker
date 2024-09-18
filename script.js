let first_div = document.querySelector(`.btn1`)
let inputs = document.getElementById(`inputs`)
let second_div = document.querySelector(`.second-div`) 


function taskhandler(){
    if(inputs.value == 0){
        alert(`Please Enter Value`)
        return
    }else{

        let task_name = inputs.value
        inputs.value = "" 
        // console.log(task_name)
        second_div.innerHTML += ` <div class = "second_div_inner">  
                                        <span class = "text"> ${task_name} </span>
                                        <button class="material-symbols-outlined btn2">delete</button>
                                     </div> `

        // Removing tasks index by index                             
        let btn2 = document.querySelectorAll(`.btn2`)

        for(let i=0; i<btn2.length ;i++ ){

            btn2[i].addEventListener(`click`,function(){
               this.parentNode.remove();
            })
        }

        // Horizontal line on completed task

        let span_text = document.querySelectorAll(`.text`)

        for(let i=0; i<span_text.length; i++){
            span_text[i].onclick =  function(){
                this.classList.toggle(`cut`)
            }
        }

       

    }
}



first_div.addEventListener(`click`,taskhandler)
