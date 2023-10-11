const button = document.querySelector("button");
const pwd = document.querySelector("#pwd");
const pwdConfirmation = document.querySelector("#pwd-confirmation");
const form = document.querySelector("form");
const errorText = document.createElement("p");

errorText.textContent = "*Passwords do not match";
errorText.classList.add("errorText");

button.addEventListener("click", (e) => {
    if (pwd.value !== pwdConfirmation.value){
        pwd.classList.add("error");
        pwdConfirmation.classList.add("error");
        form.appendChild(errorText);
    }
    else if (pwd.classList.contains("error")){
        pwd.classList.remove("error");
        pwdConfirmation.classList.remove("error");
        form.removeChild(errorText);
    }
})