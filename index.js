const user=document.getElementById("user");
const comp=document.getElementById("comp");
const win=document.getElementById("win");
const btn1=document.getElementById("rock");
const btn2=document.getElementById("paper");
const btn3=document.getElementById("scissor");
const myarr=["Rock","Paper","Scissors"];
const myarr2=["You","Computer"];
btn1.addEventListener("click",myfunction);
function myfunction(){
    const user1=user.textContent="Rock";
    const comp1=comp.textContent=myarr[Math.floor(Math.random()*myarr.length)]
    console.log(user1.length);
        win.textContent=myarr2[1];
    
}
btn2.addEventListener("click",myfunction2);
function myfunction2(){
    user.textContent="Paper";
}
btn3.addEventListener("click",myfunction3);
function myfunction3(){
    user.textContent="Scissors";
}

