//var usern=sessionStorage.getItem("usernames",usernameAdd);
//var contentArea=document.getElementById("content");
//contentArea.append(usern);


$(document).ready(() => {
    var numb1 = document.getElementById("num1");
    $("#num1valid").hide();
    var num1Error = true;
    numb1.addEventListener("blur", () => {
        var regex1 = /[+-]?([0-9]*[.])?[0-9]+/;
        var n1 = numb1.value;
        
        if (regex1.test(n1)) {
            $("#num1valid").hide();
        } else {
            $("#num1valid").show();
           num1Error = false;
            return false;
        }
    });

    var numb2 = document.getElementById("num2");
    $("#num2valid").hide();
    var num2Error = true;
    numb2.addEventListener("blur", () => {
        var regex2 = /[+-]?([0-9]*[.])?[0-9]+/;
        var n2 = numb2.value;
        
        if (regex2.test(n2)) {
            $("#num2valid").hide();
        } else {
            $("#num2valid").show();
           num2Error = false;
            return false;
        }
    });

    const resultElement = document.querySelector("#result");
            const num1Element = document.querySelector("#num1");
            const num2Element = document.querySelector("#num2");
        
            document.querySelector("#add").addEventListener("click", event => {
                resultElement.value = +num1Element.value + +num2Element.value;
            });
            
            document.querySelector("#subtract").addEventListener("click", event => {
                resultElement.value = +num1Element.value - +num2Element.value;
            });

            document.querySelector("#mul").addEventListener("click", event => {
                resultElement.value = +num1Element.value * +num2Element.value;
            });

            document.querySelector("#div").addEventListener("click", event => {
                resultElement.value = +num1Element.value / +num2Element.value;
            });
});