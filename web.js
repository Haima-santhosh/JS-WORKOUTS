const button=document.getElementById('button-click')
 const emailRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//console.log(button)
button.addEventListener('click',(event)=>
    
{
    event.preventDefault()
   
    //console.log("clicked");
    
    //console.log(para);
    // para.innerHTML="Hello"
//     const container=document.getElementById('container')
//    console.log(container);
    
//     container.style.borderWidth='2px'
//     container.style.borderColor='red'
//     container.style.backgroundColor='green'
    
//     container.style.height='2rem'
    // container.appendChild(para)


    let para=document.getElementById('error-value')
    if(!para)
    {
        para=document.createElement('p')
        para.setAttribute('id','error-value')
    }

     const inputEmail=document.getElementById('email')
    const errorContent=document.getElementById('error-content')
   
    para.style.fontSize='1.1rem'
    inputEmail.style.borderColor='red'
         inputEmail.style.borderWidth='3px'
         para.style.color='red'
        
    

   
    if(!inputEmail.value)

    {
         para.innerHTML="Please Enter Your Email"
         
    
    }
    else if(!emailRegex.test(inputEmail.value))
    {
         para.innerHTML="Please Enter a valid Email"
          
    }
    else{
           para.innerHTML="Email Validation Done Successfully"
           inputEmail.style.borderColor='green'
            inputEmail.style.borderWidth='3px'
             para.style.color='green'

    }
     errorContent.appendChild(para)
     setTimeout(()=>
     {
     para.remove()
     }
     ,2000)
    
    
})