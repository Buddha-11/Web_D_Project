function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active")
}
window.onscroll = function() {scrollFunction()};

function validate() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var error = document.getElementById("errorMessage");

    if (email === "" && pass === "") {
        error.textContent = "Please fill out all fields !";
    }

    else if(email=="")
    error.textContent = "Please enter your Email!";

    else if(pass=="")
    error.textContent = "Please enter your Password !";

    else {
        error.textContent = "";
        alert("Sign In successfully!");
    }
}

function scrollToDiv() {
    var element = document.getElementByClass("gallery-container");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
}



