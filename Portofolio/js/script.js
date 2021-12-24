


var navigtieknop = document.querySelector("header nav button");
var navigtielist = document.querySelector("header nav");
var worksknop = document.querySelector("main>nav button");
var workslist = document.querySelector("main>nav");


function openNavmenu(){
    console.log("click");
    navigtielist.classList.toggle("toonNavmenu");
}

navigtieknop.addEventListener("click", openNavmenu);

function openWorksmenu(){
    console.log("click");
    workslist.classList.toggle("toonWorksmenu");
}

worksknop.addEventListener("click", openWorksmenu);