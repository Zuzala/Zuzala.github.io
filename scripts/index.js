
var home = "../index.html";
var currentState = null;

window.onload = function() {
    currentState = sessionStorage.getItem("reloading");

    if (currentState !== null && currentState != "null") {
        sessionStorage.removeItem("reloading");
        loadContent(currentState); 
    }
}

window.onbeforeunload = function() { 
    window.setTimeout(function () { 
        sessionStorage.setItem("reloading", currentState);
    }, 0);

    window.onbeforeunload = null; // necessary to prevent infinite loop, that kills your browser 
}

var contentElement = document.getElementById("content");

var navs = document.querySelectorAll(".nav");
var navJSON = {};

for (i = 0; i < navs.length; i++) {
    nav = navs[i];
    navLink = nav.innerText.toLowerCase();

    nav.addEventListener("click", function() { 
        clickedLink = this.innerText.toLowerCase();
        loadContent("../pages/" + clickedLink + ".html");
    });
};

function navHome(){
    loadContent(home);
}

function loadContent(content) {
    $("#content").load(content); 
    currentState = content;
}
