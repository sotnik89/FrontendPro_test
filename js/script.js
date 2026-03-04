const agreeCheckBox = document.querySelector("#agreeCheckBox")
const citySelect = document.querySelector("#citySelect");
const radioContainer = document.querySelector("#radioContainer");

agreeCheckBox.addEventListener("change", function () {
    console.log("Checkbox changed.", this.checked)
})
citySelect.addEventListener("change", function () {
    console.log("Selected", this.value)
})

radioContainer.addEventListener("change", function (e) {
    if (e.target.type === "radio") {
        console.log("Radio changed", e.target.value)
    }
})

// Form simple
const loginForm = document.querySelector("#loginForm")
const emailInput = document.querySelector("#emailInput");
const passInput = document.querySelector("#passInput");
const submitButton = document.querySelector("#submitButton");
const clearButton = document.querySelector("#clearButton");

loginForm.addEventListener("submit", function (e){
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passInput.value;
    console.log(this.checkValidity());

    if(!email){
        console.log("Email is empty");
        return;
    }
    if (password.length < 8){
        console.log("Password is weak");
        return;
    }
console.log("Sending data ...->", email, password);
    this.reset()
    // console.log("Form submitted", e.target)
})

clearButton.addEventListener("click", function (){
    console.log(loginForm.checkValidity(),
    loginForm.reportValidity()
    );
    loginForm.reset()
})

