function Validate() {
    if(document.myForm.Email.value == ""){
        alert("please enter your email address");
        document.myForm.Email.focus();
        return false;
    }else if(document.myForm.Password.value == ""){
        alert("please enter your password");
        document.myForm.Password.focus();
        return false;
    }
    else{
        return true;
    }
}

