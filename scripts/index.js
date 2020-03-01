
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
    $("#content").fadeOut(function() {
        if(content == home){
            $("#particles-js").fadeIn();
        }
        else {
            $("#particles-js").fadeOut();
        }

        $("#content").load(content, function(){
            $("#content").fadeIn(function(){
                switch(content){
                    case "../pages/creative.html":
                        creativeSetup();
                        break;
                    // case "../pages/research.html":
                    //     researchSetup();
                    //     break;
                    // case "../pages/projects.html":
                    //     projectsSetup();
                    //     break;
                    case "../pages/about.html":
                        aboutSetup();
                        break;
                    default:
                        break;
                }
            });
        });    
    });

    currentState = content;
}


// ABOUT
var brandColor;

function aboutSetup() {
    $("i").hover(function(){
        if(this.getAttribute("brand") != null) {
            switch(this.getAttribute("brand")) {
                case "linkedin":
                    brandColor = "#00a0dc";
                    break;
                case "github":
                    brandColor = "#b19cd9";
                    break;
                case "instagram":
                    brandColor = "#fcaf45";
                    break;
                case "medium":
                    brandColor = "#00ab6c";
                    break;
                case "youtube":
                    brandColor = "#ff0000";
                    break;
            }
        }
        else {
            brandColor = "silver";
        }

        $(this).css("color", brandColor);
        }, function(){
        $(this).css("color", "white");
    });
}

// CREATIVE 
var cnavSelected = false;

function creativeSetup() {
    var cnavs = document.querySelectorAll(".cnav-link");

    $(".cnav-link").each(function(index) {

        $(this).click(function() {
            if(cnavSelected && $(this)[0] != $(".active")[0]){
                $(".active").toggleClass("active");
            }
            else if(cnavSelected && $(this)[0] == $(".active")[0]){
                cnavSelected = false;
            }
            else {
                cnavSelected = true;
            }
            
            $(this).toggleClass("active");
        });

        // $(this).addEventListener("click", function() { 
        //     $(this).toggleClass("active");
        //     // cnav.toggleClass(".cnav-link.active");
        //     // clickedLink = this.innerText.toLowerCase();
        //     // loadCreative("../pages/" + clickedLink + ".html");
        // });
    });


    return cnavs;
}
  
function loadCreative() {


}