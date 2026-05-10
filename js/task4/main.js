nameElement = document.querySelector(".name");
surnameElement = document.querySelector(".surname");
btnElement = document.querySelector(".btn");
resultElement = document.querySelector(".result");

btnElement.addEventListener("click", function(){
    if(nameElement.value === "" && surnameElement.value === ""){
        resultElement.textContent = "Введите имя и фамилию";
    }
    else if(nameElement.value === ""){
        resultElement.textContent = "Введите имя";
    }
    else if(surnameElement.value === ""){
        resultElement.textContent = "Введите фамилию";
    }
    else{
        resultElement.textContent = `Здравствуйте, ${nameElement.value} ${surnameElement.value}!`;
    }
})