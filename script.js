const formVal = document.getElementById('form');
const usernameVal = document.getElementById('username');
const emailVal = document.getElementById('email');
const phoneVal = document.getElementById('phone');
const passwordVal = document.getElementById('password');
const cpasswordVal = document.getElementById('cpassword');

// Add Event

formVal.addEventListener('submit',(Event) =>{
    Event.preventDefault()
    validate();
})

const sendData = (sRate, count) =>{
    if(sRate === count){
        alert('registration succesfull')
        location.href = `demo.html?username=${usernameVal}`
    }
}

// for final data validation
const successMsg = () => {
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length - 1;
    for(var i =0; i< formCon.length; i++){
        if(formCon[i].className === "form-control succcess"){
            var sRate = 0+i;
            sendData(count)
        }else{
            return false;
        }
    }
}

// Validate E-mail

const isemail = (emailVal) =>{
    var atSymbol = emailVal.indexOf('@');
    if(atSymbol<1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false ;
    if(dot === emailVal.length - 1) return false;
    return true;
}

// define the validate function

const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    // Validate Username 

    if(usernameVal === ""){
        setErrorMsg(username,'username cannot be blank');
    }else if(usernameVal.length<=2){
        setErrorMsg(username, 'username min 3 char');
    }else{
        setSuccessMsg(username);
    }


    // Validate email

    if(emailVal === ""){
        setErrorMsg(email,'email cannot be blank');
    }else if(!isemail(emailVal)){
        setErrorMsg(email, 'not a valid email');
    }else{
        setSuccessMsg(email);
    }

    // validate phone
    if(phoneVal === ""){
        setErrorMsg(phone,'phone no. cannot be blank');
    }else if(phoneVal.length != 10){
        setErrorMsg(phone, 'not a valid mobile no.');
    }else{
        setSuccessMsg(phone);
    }


    // Validate Password
    if(passwordVal === ""){
        setErrorMsg(password,'password cannot be blank');
    }else if(passwordVal!== cpasswordVal){
        setErrorMsg(cpassword, 'password is not same');
    }else{
        setSuccessMsg(cpassword);
    }


    // Validate cPassword
    if(cpasswordVal === ""){
        setErrorMsg(cpassword,'password cannot be blank');
    }else if(cpasswordVal.length <= 5 ){
        setErrorMsg(cpassword, 'minimum 6 char');
    }else{
        setSuccessMsg(cpassword);
    }


}

function setErrorMsg(input,errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error"
    small.innerText = "errormsgs"
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}
