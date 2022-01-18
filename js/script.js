
/* mode checkbox */
var checkbox = document.getElementById('colorsmode');
var Body=document.body;

function switchMode( ){
    console.log("cheacked");
    // document.body.classList.toggle("lightmode");
    Body.classList.toggle("lightmode")
}

checkbox.addEventListener("click", switchMode);

// ====================================================
// ====================================================

var navigtieknop = document.querySelector("header nav button");
var navigtielist = document.querySelector("header nav");

function openNavmenu(){
    console.log("click");
    navigtielist.classList.toggle("toonNavmenu");
}

navigtieknop.addEventListener("click", openNavmenu);


// Works nav 
var worksKnop = document.querySelector("main>nav button");
var workslist = document.querySelector("main>nav");

function openWorksmenu(){
    console.log("click");
    workslist.classList.toggle("toonWorksmenu");
}

worksKnop.addEventListener("click", openWorksmenu);



