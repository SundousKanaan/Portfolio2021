
// Mode

var ModeKnop = document.getElementById('modeknop');
var Body=document.body;

function switchMode(){
    console.log("clicked");
    
    if(ModeKnop.innerHTML==="Dark"){
        console.log("Light");
        ModeKnop.innerHTML = "Light";

        document.body.classList.add("darkMode");
        // Key: modeknop Zijn value: true
        localStorage.setItem("modeknop", JSON.stringify(true));
    } else {
        console.log("Dark");
        ModeKnop.innerHTML = "Dark";

        document.body.classList.remove("darkMode");
        // Key: modeknop Zijn value: false
        localStorage.setItem("modeknop", JSON.stringify(false));
    }
}

ModeKnop.addEventListener('click', switchMode);

// Auto check en werken voor het mode
if (localStorage.getItem('modeknop')==="true"){
    document.body.classList.add("darkMode");
    ModeKnop.innerHTML="Light";
}

// ===========================================================
// ===========================================================

var navigtieknop = document.querySelector("header nav button");
var navigtielist = document.querySelector("header nav");

function openNavmenu(){
    console.log("clicked");
    navigtielist.classList.toggle("toonNavmenu");
}

navigtieknop.addEventListener("click", openNavmenu);







