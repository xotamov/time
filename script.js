const minuts = document.querySelector('.minuts')
const seconds = document.querySelector('.seconds')
const hunsecond = document.querySelector('.hunsecond')
const btnstart = document.querySelector('.jsStat')
const btnstop = document.querySelector('.jsStop')
const btnreset = document.querySelector('.jsReset')

let interval
let minutes = 0
let Blocksecondes = 0
let milliseconds = 0


const startTimer = () => {
    milliseconds++
    
    if(milliseconds <= 59){
        hunsecond.innerHTML = milliseconds;
    }
    
    if(milliseconds == 60){
        hunsecond.innerHTML = '00';
    }
    if( milliseconds > 60){
        Blocksecondes++;
        seconds.innerHTML = '0' + Blocksecondes     
        
        milliseconds = 0
    }
    if(seconds > 60){
        Blocksecondes.innerHTML = seconds
    }
    if(seconds > 60){
        minutes++
        minuts.innerHTML = '0' + minutes

        seconds = 0
        Blocksecondes.innerHTML = '0' +seconds 
    }
    if(minutes > 60){
        minuts.innerHTML = minutes
    }
}

btnstart.addEventListener('click',() =>{
    clearInterval(interval)
    interval = setInterval(startTimer,10)
})

btnstop.addEventListener('click',() =>{
    clearInterval(interval)
})

btnreset.addEventListener('click',() =>{
    clearInterval(interval)
    
    minutes = 0
    Blocksecondes = 0
    milliseconds = 0
    
    minuts.innerHTML = '00'
    seconds.innerHTML = '00'
    hunsecond.innerHTML = '00'
})



const counter = document.getElementById('counter') 
const button_plus = document.getElementById('add')
const button_minus = document.getElementById('sub')
let Reset = document.querySelector('.Reset')
let random = document.querySelector('.random')

let value = 0;
let number = 100    
let intervale

function render(){
    counter.textContent = value.toString();
}
random.addEventListener('click', () =>{
    Math.floor(Math.random() * number)
    render()
})
button_plus.addEventListener('click', () => {
    value++;
    render()
})
button_minus.addEventListener('click', () => {
    value--;
    render()
})
if(value === 0){
    value = 0;
} 

Reset.addEventListener('click',() =>{    
    value = 0
    value.innerHTML = '0'
    render()
})