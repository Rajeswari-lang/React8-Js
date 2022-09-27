let child = document.getElementById("child")
child.addEventListener('click',(event)=>{
  event.target.classList.toggle("completed")
},true)
let event1 = document.getElementById('event1')
event1.addEventListener('click',()=>{
    console.log("event1 clicked")
},true)
let parent = document.getElementById("parent")
parent.addEventListener('click',()=>{
    console.log("parent clicked")
},true)
