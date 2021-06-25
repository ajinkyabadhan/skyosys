function setValues() {
    localStorage.setItem("name", document.getElementsByName("fullname")[0].value);
    localStorage.setItem("email", document.getElementsByName("email")[0].value);
    localStorage.setItem("phone", document.getElementsByName("phone")[0].value);
    localStorage.setItem("message", document.getElementsByName("message")[0].value);
}

function getValues() {
    console.log(localStorage.getItem("name"));
    console.log(localStorage.getItem("email"));
    console.log(localStorage.getItem("phone"));
    console.log(localStorage.getItem("message"));
}