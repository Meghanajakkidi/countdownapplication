const heading = document.createElement('h1')
heading.textContent='countdown for WELCOMING 2024'
heading.style.fontSize='50px'
heading.style.textAlign='center'
heading.style.color='hotpink'
heading.style.fontFamily='italic'
document.body.appendChild(heading)


const a = document.createElement('div')
a.textContent = '0:00'
a.style.textShadow='2px 2px 2px'
a.style.color='lavender'
a.style.width = '200px'
a.style.height = '100px'
a.style.marginLeft='45%'
a.style.marginTop='5%'
a.id = 'test'
a.style.fontSize='80px'
document.body.appendChild(a)

const button = document.createElement('button')
button.textContent = 'start'
button.style.backgroundColor = 'yellow'
button.style.width='100px'
button.style.height='60px'
button.style.borderRadius='10%'
button.style.marginLeft='45%'
button.style.marginTop='50px'
button.id = 'startbtn'
document.body.appendChild(button)


const resetbutton = document.createElement('button')
resetbutton.textContent = 'reset'
resetbutton.style.width='100px'
resetbutton.style.height='60px'
resetbutton.style.borderRadius='10%'
resetbutton.style.backgroundColor = 'orange'
resetbutton.style.marginLeft='30px'
resetbutton.id = 'resetbtn'
document.body.appendChild(resetbutton)

async function start() {
    let increment = 0
     let p = document.getElementById("startbtn");
    let progInterval = setInterval(function(){
        if(increment===20){
            clearInterval(progInterval)
            alert("HAPPY NEW YEAR !")
        }else{
            increment=increment+1
            a.textContent=increment;
           
            }
    } ,1000) 
}
function reset(){
   // let increment1=0
   clearInterval(increment)
   // let e= document.getElementById('resetbtn');
   // if(e){
       //a.textContent=0;
   // }else{
        //increment1=0
        //a.textContent=0
        //}
}
addEventListener("click", start)
addEventListener("click", reset)
