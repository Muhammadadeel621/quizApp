
let question_array=[
{question : "what is the name of your city ? ",
answer : "karachi",  options:["islamabad","karachi","lahore"] },

{question : "what is the name of your institution name ? ",
answer : "saylani",  options:["Al-khidmat","Saylani","Edhi"]},
{question : "what is your favourite book ? ",
answer : "maths",  options:["physics","chemistry","maths"]}


]
let question_count=0
let score=0
function next_btn(){


let user_ans=document.querySelector("p.optionsc.active").innerHTML
op={question_count:user_ans}
firebase.database().ref("right_options").push(op)
if(user_ans==question_array[question_count].answer){
   score +=10

   console.log(score)
  
}
let n=document.getElementById("time-min").innerHTML
let secon=document.getElementById("time_sec").innerHTML
// consoel.log(n)
if(question_count==question_array.length-1){
  alert("your score is" + score)
  let doctor={
      sec:secon,
      min:n
  }
  firebase.database().ref("time").set(doctor)
 
  firebase.database().ref("user_score").child("score").set(score)
  clearInterval(interval)
  
   
  location.href="endpage.html"
   
  
    
    
    }
    
    
question_count++
question_show(question_count)
removeactive()

}


function question_show(q){
    let target_question=document.getElementById("question")
    let put_question=question_array[q].question;
    target_question.innerHTML=put_question
    // oper question chl gaya ap options donga

    var optionsc=document.getElementsByClassName("optionsc")
   
     for(let i=0;i<optionsc.length;i++){
       
    

    optionsc[i].innerHTML=question_array[q].options[i]}

}

function addactive(e){
   removeactive()
    e.classList.add("active")
}
   
function removeactive(){
let optionsac=document.getElementsByClassName("active")

for(let i=0;i<optionsac.length;i++){
      optionsac[i].classList.remove("active")
      

}

}
    //   target_options.innerHTML=` <p class="card-text" id="optionsid1" class="optionsc"  >${question_array[0].options[0]}</p>
    //   <p class="card-text" id="optionsid2" class="optionsc" > ${question_array[0].options[1]}</p>
  
    //   <p class="card-text" id="optionsid3" class="optionsc" >${question_array[0].options[2]} </p>`
    var timer=0
    var minute=0
    let time=document.getElementById("time_sec");
    let min=document.getElementById("time-min")
    function timeshow(){
    
    
    
    
    
        timer++
       
        time.innerHTML=timer+"sec";
        
        if(timer>=2){
           
            minute++
          
            min.innerHTML=minute+"minute"
            timer=0

            
            
        }

        
       
    

    

}

var interval;
function chala(){
     interval=setInterval(timeshow,1000)
}
