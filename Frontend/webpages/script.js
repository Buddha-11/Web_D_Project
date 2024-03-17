function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active")
}


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
        togglePopup();
    }
}
const arr=["lorem1","lorem2","lorem3","lorem4","lorem5","lorem6","lorem7","lorem8","lorem9","lorem10","lorem11","lorem12","lorem13"];
let i=0;
 setInterval(live,2500);
function live(){
    const list = document.getElementById("feed");
    list.removeChild(list.firstElementChild);
    const li =document.createElement("li");
    li.innerHTML=arr[i];
    list.appendChild(li);
    i++;
    if(i>6)
    i=0;
console.log("yes");
}





