// function sayHello(firstName=0,secondName=0){
//     console.log(`hello ${firstName} ${secondName}`)
// }
// sayHello()
// setTimeout(sayHello,5000)   //callbacks have no peranthesis.
// setTimeout(sayHello, 5000,'charan', 'k')    //with arguments
// setTimeout(()=>sayHello("charan","k"),5000) //with args




// let text = document.getElementById('text')
// let str = "charan";
// const NUM = 500
// let time = document.getElementById('time').value
// let timef = NUM/time.value

// time.addEventListener("input",(e)=> {timef = NUM/e.target.value})
// console.log(timef)
// str = str.split("");
// let i = 0;
// time.addEventlistener("input", ()=>{let interval = setInterval(() => {
//   if (i < str.length) {
//     text.innerText += str[i];
//     i++;
//   } else {
//     clearInterval(interval);
//   }
// }, timef);})


const textEl = document.getElementById("text")
const speedEl = document.getElementById("speed")

const text = "We love Programming!"

let idx = 1

const NUM = 500
let time = NUM/speedEl.value

writeText()

function writeText(){
    textEl.innerHTML = text.slice(0,idx)

    idx++;

    if(idx>text.length){
        idx=1
    }

    setTimeout(writeText,time)
}

speedEl.addEventListener("input",(e)=> {time = NUM/e.target.value
    
})