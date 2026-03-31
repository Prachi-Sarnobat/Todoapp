const checkbox = document.getElementById("agree");
const button = document.getElementById("continueBtn");

checkbox.addEventListener("change", () => {
    button.disabled = !checkbox.checked;
});