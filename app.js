let userscore=0
let compscore=0
let msg=document.querySelector("#msg")
let userscores=document.querySelector("#userscore")
let compscores=document.querySelector("#compscore")

const choices=document.querySelectorAll(".choice")
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        playgame(userchoice);
    })
})
const gencompchoice=()=>{
    const options=["stone","paper","scissor"]
    randomidx=Math.floor(Math.random()*3)
    return options[randomidx]
}
const playgame=(userchoice)=>{
    const compchoice=gencompchoice()
    if(userchoice===compchoice){
draw()
    }else{
        userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissor"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}
const draw=()=>{
    msg.innerText="Game was draw,Play again"
    msg.style.backgroundColor="black"
}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        msg.innerText=`You win! ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor="green"
        userscore++
        userscores.innerText=userscore
    }else{
          msg.innerText=`You lose ${compchoice} beats your ${userchoice}`
          msg.style.backgroundColor="red"
        compscore++
        compscores.innerText=compscore
    }
}