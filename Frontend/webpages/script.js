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
const arr=["Minimal Mania (Aparoksha'24)","3 Musketeers (Aparoksha'24)","Inter IIIT (Asmita'24)","Cultural Evening (Asmita'24)","losing Ceremony(Asmita'24)","Jam Night (Virtuosi)","DJ Night(Asmita'24)","C-fresh (Aparoksha'24)","Decode (Aparoksha'24)","Prove Me Wrong (Aparoksha'24)","Git Hero (Aparoksha'24)","Functional Programming (Geek Haven)"];
let i=8;
 setInterval(live,2000);
function live(){
    const list = document.getElementById("feed");
    list.removeChild(list.firstElementChild);
    const li =document.createElement("li");
    li.innerHTML=arr[i];
    list.appendChild(li);
    i++;
    if(i>=arr.length)
    i=0;
console.log("yes");
}





