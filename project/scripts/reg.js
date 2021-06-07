/* ======== Buttons switch (log / reg) ======== */ 

let l = document.getElementById('login');
let r = document.getElementById('register');
let b = document.getElementById('btn2');

function switchtoregister() {
  l.style.left = '-400px';
  r.style.left = '80px';
  b.style.left = '130px';
}

function switchtologin() {
  l.style.left = '80px';
  r.style.left = '480px';
  b.style.left = '0px';

}

/* ======== Buttons switch (log / reg) ======== */ 




var arr  =  new Map([
['Flex','Quake'],
['Adamemes','123']
]);


function logIn(){
let userlog = document.getElementById('usernamelog').value;
let passwordlog = document.getElementById('passwordlog').value;

 if (  arr.has(userlog) == true ){
        if(arr.get(userlog) == passwordlog){
            window.location.href="index.html";
        }
        else{
            alert("Wrong password");
        }
    } 
    else {
    alert("User not found ):");
    }
}



function registerIn(){
    let userreg = document.getElementById("usernamereg").value;
    let passwordreg = document.getElementById("passwordreg").value;
    let passwordreg2 = document.getElementById("passwordreg2").value;
    if (  arr.has(userreg) == true ){
        alert("User with the same name is already exist. Please, enter another");
    }

    else if(passwordreg !== passwordreg2){
        alert("Passwords are not equal")
    } else if(userreg == null || userreg == "", passwordreg == null ||
    passwordreg == "", passwordreg == null ||
    passwordreg2 == null ||
    passwordreg2 == ""){

        alert("Please, fill in all the fields");

    } else {
        if($('.check-box').prop('checked')) {
            alert("You have been added. Go back and login");
            switchtologin();
            arr.set(userreg, passwordreg);
        } else {
            alert("You forgot to keep Terms & Conditions");
        }
    }
}
