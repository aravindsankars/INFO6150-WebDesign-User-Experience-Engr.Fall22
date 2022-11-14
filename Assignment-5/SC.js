$(document).ready(function () {
    // Validate Username
//    $("#usercheck").hide();
//    let usernameError = true;
//    $("#usernames").keyup(function () {
//        validateUsername();
//    });
//
//    function validateUsername() {
//        let usernameValue = $("#usernames").val();
//        if (usernameValue.length == "") {
//            $("#usercheck").show();
//            usernameError = false;
//            return false;
//        } else if (usernameValue.length < 3 || usernameValue.length > 10) {
//            $("#usercheck").show();
//            $("#usercheck").html("**length of username must be between 3 and 10");
//            usernameError = false;
//            return false;
//        } else {
//            $("#usercheck").hide();
//        }
//    }


let usern = document.getElementById("usernames");
    $("#usercheck").hide();
    var usernameError = true;
    usern.addEventListener("blur", () => {
        let regexU = /^[a-zA-Z]{3,10}$/;
        let u = usern.value;
        
        if (regexU.test(u)) {
            $("#usercheck").hide();
            usernameError = false;
        } else {
            $("#usercheck").show();
            usernameError = true;
            return false;
        }
    });


    // Validate Email
    let email = document.getElementById("email");
    $("#emailvalid").hide();
    var emailError = true;
    email.addEventListener("blur", () => {
        let regexE = /^[a-zA-Z0-9\\.]+@northeastern.edu$/;
        let s = email.value;
        
        if (regexE.test(s)) {
            $("#emailvalid").hide();
            emailError = false;
        } else {
            $("#emailvalid").show();
           emailError = true;
            return false;
        }
    });

    // Validate Password

   // const pass = document.getElementById("password");
   // $("#passcheck").hide();
   // $("passchk").hide();
   // let passwordError = true;
   // pass.addEventListener("blur", () => {
   //     let regex = /^[a-zA-Z]+$/;
   //     let p = pass.value;
   //     
   //     if (regex.test(p)) {
   //         $("#passcheck").hide();
   //         $("passchk").hide();
   //     } 
//
   //     else if (p.length < 3 || p.length > 10) {
   //         $("#passcheck").hide();
   //         $("passchk").show();
   //         passwordError = false;
   //         return false;
   //     }
   //     
   //     else {
   //         $("#passcheck").show();
   //         $("passchk").hide();
   //        passwordError = false;
   //         return false;
   //     }
   // });
//
let pass = document.getElementById("password");
$("#passcheck").hide();
var passwordError = true;
pass.addEventListener("blur", () => {
    let regexP = /^\w{3,10}$/;
    let p = pass.value;
    
    if (regexP.test(p)) {
        $("#passcheck").hide();
        passwordError = false;
    } else {
        $("#passcheck").show();
        passwordError = true;
        return false;
    }
});
//
    // Submit button
    $('#submitbtn').click(function(){
       // validateUsername();
       // validatePassword();
       // validateEmail();
       //let u = usern.value;
       var usernameAdd = $('#usernames').val();
        if (usernameError == true &&
            passwordError == true &&
            emailError == true) 
            {
            alert("Enter correct details!");
            return false;
            
        } else {
            var page = $(location).attr("href","SimpleCalc.html");
            alert("Moving on to Calculator!");
            sessionStorage.setItem("usernames",usernameAdd);
            return true;
        }
    });
});