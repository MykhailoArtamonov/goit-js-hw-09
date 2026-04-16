let formData = {
    email: "",
    message: ""
}

const formInput = document.querySelector(".feedback-form");

formInput.addEventListener("input", (event) => {
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem("user", JSON.stringify(formData));
});

formInput.addEventListener("submit", (event) => {
    event.preventDefault();
    if(!formData.email || !formData.message) alert("Fill please all fields");
    else {
        console.log(formData);
        localStorage.removeItem("user");
        event.currentTarget.reset();
        formData = { email: "", message: "" };
    }
});

const { email, message } = JSON.parse(localStorage.getItem("user")) ?? {};
if ( email || message) {
    formData = {email: email, message: message}
    formInput.elements.email.value = email;
    formInput.elements.message.value = message;
}
