const submitButton=document.getElementById('submit-button')
// console.log(submitButton)
submitButton.addEventListener('click',(event)=>
{
    event.preventDefault();
    const name=document.getElementById('name-input')
    const email=document.getElementById('email-input')
    const phone=document.getElementById('phone-input')
    const password=document.getElementById('password-input')
    //console.log(name,email,phone,password);


    const emailRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const phoneRegex=/^\d{10}$/
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/

    let flag=false ; // no error in any field

    if(!name.value)
    {
        alert("Name field is Empty")
        name.style.borderColor="red"
        name.style.borderWidth='3px'
        flag=true;
    }
    else{
        name.style.borderColor='green';
         name.style.borderWidth='3px'
    }

     if(!email.value)
    {
        alert("email field is Empty")
        email.style.borderColor="red"
         email.style.borderWidth='3px'
         flag=true;
    }
    else{
        if(emailRegex.test(email.value))
       {
        email.style.borderColor='green';
         email.style.borderWidth='3px'
       }
       else{
          email.style.borderColor="red"
           email.style.borderWidth='3px'
           alert("Please Enter a valid Email")
           flag=true;
       }
        
    }
    if(!phone.value)
    {
        alert("Phone Number field is Empty")
        phone.style.borderColor="red"
        phone.style.borderWidth='3px'
        flag=true;
    }
    else{
        if(phoneRegex.test(phone.value))
        {
            phone.style.borderColor='green';
             phone.style.borderWidth='3px'
        }
        else{
            phone.style.borderColor="red"
           phone.style.borderWidth='3px'
           alert("Please Enter a valid Phone Number") 
           flag=true;
        }
        
    }

    if(!password.value)
    {
        alert("Password field is Empty")
        password.style.borderColor="red"
        password.style.borderWidth='3px'
        flag=true;
    }
    else{
        if(passwordRegex.test(password.value))
        {
            password.style.borderColor='green';
             password.style.borderWidth='3px'
        }
        else{
            password.style.borderColor="red"
           password.style.borderWidth='3px'
           alert("Password must be at least 6 characters long, include one uppercase letter, one number, and one special character")
           flag=true; 
        }
        
    }
    if(!flag)
    {
        console.log("Resistration Completed Successfully");
        
    }
    else
    {
        console.log("Resistration Failed");
    }


    
})