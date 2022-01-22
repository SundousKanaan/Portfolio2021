
/* mode checkbox */
// var checkbox = document.getElementById('colorsmode');
// var Body=document.body;

// function switchMode( ){
//     console.log("checked");
//     // document.body.classList.toggle("lightmode");
//     Body.classList.toggle("lightmode");
// }

// checkbox.addEventListener("click", switchMode);

// ===========================================================
// ===========================================================

// var modeKnop = document.getElementById('mode');
// var Body=document.body;

// function switchMode(){
//     console.log("clicked");
//     Body.classList.toggle("darkmode");
    
//     if(modeKnop.innerHTML==="Dark"){
//         console.log("Light");
//         modeKnop.innerHTML = "Light";
//         Body.classList.add("darkMode")
//     } else {
//         console.log("Dark");
//         modeKnop.innerHTML = "Dark";
//         Body.classList.remove("darkMode")
//     }
// }

// modeKnop.addEventListener('click', switchMode);


// ====================================================
// ====================================================

var navigtieknop = document.querySelector("header nav button");
var navigtielist = document.querySelector("header nav");

function openNavmenu(){
    console.log("clicked");
    navigtielist.classList.toggle("toonNavmenu");
}

navigtieknop.addEventListener("click", openNavmenu);


// works nav 
var worksKnop = document.querySelector('worksKnop');
var workslist = document.querySelector("main>nav");

document.addEventListener('load', function (openWorkmenu) {
    // alert("It's loaded!")
    console.log("loaded");
  })

function openWorkmenu(){
    console.log("clicked");
    workslist.classList.toggle("toonworksmenu");

}

worksKnop.addEventListener('click', openWorkmenu);

worksKnop.addEventListener
console.log("load");



// ===========================================================
// ===========================================================
// var colorKnop = document.getElementById("colorsmode");
// var Body=document.body;

// if(localStorage.getItem("colormode") !== null){
//     var colormode = JSON.parse(localStorage.getItem("colormode"));

//     colorKnop.checked = colormode;

//     if(colormode){
//         document.documentElement.classList.add("darkMode");
//     }
// }

// function switchMode(){
//     if(colorKnop.checked){
//         document.body.classList.add("darkMode");
//         localStorage.setItem("colormode", JSON.stringify(true));
//     }
//     else {
//         document.body.classList.remove("darkMode");
//         localStorage.setItem("colormode", JSON.stringify(false));
//     }
// }

// colorKnop.addEventListener('change', switchMode);



