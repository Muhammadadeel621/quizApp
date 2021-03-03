
// let name=document.getElementById("input").value
// console.log(name)
function on(){
let user=document.getElementById("input");

var joker={
    name:user.value,
  
}

firebase.database().ref("user").set(joker)

}


// ************************************
firebase.database().ref("user").once("value",function(data){

    let t=document.getElementById("welcome_user")
    t.innerHTML=data.val().name
    console.log(data.val())

})



// ***********************************
function user_name(){
    location.href="quiz.html"
    
    }
    