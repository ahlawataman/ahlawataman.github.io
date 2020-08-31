var numberInput = document.getElementById("number");
var validationMessage = document.getElementById("validationMessage");

function verify()
{
    if(numberInput.value < 40 || numberInput.value > 90)
    {
        validationMessage.style.display = "block";
        return false;
    }
    else if(isNaN(numberInput.value)){
        nanMessage.style.display = "block";
    }
    else{
        validationMessage.style.display = "none";
        return true;
    }
}

numberInput.onchange = function()
{
    if(isNaN(numberInput.value))
    {
        nanMessage.style.display = "block";
    }
    else{
        nanMessage.style.display = "none";
    }
}