const messageButton=document.getElementById('messageButton')
    const title=document.getElementById('title')
    const button=document.getElementById('button')
//console.log(messageButton)
// function showMessage()
// {
//     console.log("Hello World!");
    
// }
// messageButton.addEventListener('click',function showMessage()
// {
//     console.log("Hello World!");
    
// })
//1.click
messageButton.addEventListener('click',()=>
{
    console.log("Hello World!");

title.style.color='black'
title.innerHTML="Button Clicked"
//title.style.backgroundColor="yellow"
})

//2.mouseover
messageButton.addEventListener('mouseover',()=>
{
    //alert("Success")
   
})
title.addEventListener('mouseover',()=>
{
     title.style.color='green'
title.innerHTML="mouse hover"
title.style.backgroundColor="yellow"
})
title.addEventListener('mouseout',()=>{
    title.style.color='white'
title.innerHTML="Mouse out"
title.style.backgroundColor="blue"
})


// doubleclick
button.addEventListener("dblclick",()=>
{
alert("working")
})


//mouseup
const div=document.getElementById('div')
div.addEventListener('mouseup',()=>
{
    div.style.backgroundColor="red"// conflict with bootstrap not changed
    div.innerHTML="Background Color Changed"
})

// keydown
const div2=document.getElementById('div2')
div2.addEventListener('keydown',()=>
{
    div2.innerHTML="Key down worked"
    console.log('key down working')
})
div2.addEventListener('keydown',()=>
{
    div2.innerHTML="Key up worked"
    console.log('key upworking')
})












// EVENT OBJECT

// messageButton.addEventListener('click',(event)=>
// {
//     console.log(event);//PointerEvent {isTrusted: true, pointerId: 2, width: 1, height: 1, pressure: 0, …}

//     console.log(event.target);//<button id="messageButton">Click Me for Message</button>
//     console.log(event.type);//click
    
    


//     console.log("Hello World!");

    
// })

