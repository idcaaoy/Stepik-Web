let radioButtons =document.querySelectorAll('[name="price"]')
let btnElement  = document.querySelector(".btn");
let result      = document.querySelector(".result");

btnElement.addEventListener("click", function(){
    let total = 0;

    for(const radioButton of radioButtons){
        if(radioButton.checked){
            total += parseInt(radioButton.value);
        }
    }

    result.textContent = total;
})