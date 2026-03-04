const agreeCheckBox = document.querySelector("#agreeCheckBox")
const citySelect = document.querySelector("#citySelect");


agreeCheckBox.addEventListener("change", function () {
    console.log("Checkbox changed.", this.checked)
})
citySelect.addEventListener("change", function (){
    console.log("Selected", this.value)
})
