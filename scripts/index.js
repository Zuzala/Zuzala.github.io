
var indexNav = {"index": {location: "index"}};

var contentElement = document.getElementById("content");

var navs = document.querySelectorAll(".nav");
var navJSON = {};

for (i = 0; i < navs.length; i++) {
    nav = navs[i];
    navLink = nav.innerText.toLowerCase();
    navJSON[navLink] = {location: navLink};

    nav.addEventListener("click", function() { 
        clickedLink = this.innerText.toLowerCase();
        history.pushState(navJSON[clickedLink], null, clickedLink + ".html");
        $("#content").load( "../pages/" + clickedLink + ".html" ); 
    });
};

function navHome(){
    window.history.back();
}

window.onpopstate = function(event) {
    if (event.state != null) {
        $("#content").load( "../pages/" + event.state.location + ".html" );
    }
    else {
        $("#content").load( "../index.html" );
    }    
}


