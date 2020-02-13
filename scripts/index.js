

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
        console.log(history.state);

    });

};




// window.onload = function() {
 

  
  
//     // Get references to the page elements.
//     var navLinks = document.querySelectorAll('.load-content');
//     var contentElement = document.getElementById('content');
  
  
//     // Update the page content.
//     var updateContent = function(stateObj) {
//       // Check to make sure that this state object is not null.
//       if (stateObj) {
//         contentElement.innerHTML = stateObj.content;
//       }
//     };
  
  
//     // Load the page content via AJAX.
//     var loadContent = function(url, callback) {
//       var request = new XMLHttpRequest();
  
//       request.onload = function(response) {
//         // Save the html in the pages object so that it doesn't need
//         // to be loaded again.
//         pages[url.split('.')[0]].content = response.target.response;
  
//         var pageData = pages[url.split('.')[0]];
  
//         // Update the title and content.
//         updateContent(pageData);
       
//         // Execute the callback function.
//         callback();
//       };
  
//     console.log(url);
//       if (url != 'index.html') {
//         request.open('get', 'pages/' + url, true);
//       }
//       else {
//         request.open('get', url, true);
//       }
      
//       request.send();
//     };
  
  
//     // Attach click listeners for each of the nav links.
//     for (var i = 0; i < navLinks.length; i++) {
//       navLinks[i].addEventListener('click', function(e) {
//         e.preventDefault();
  
//         // Fetch the page data using the URL in the link.
//         var pageURL = this.attributes['href'].value;
  
//         loadContent(pageURL, function() {
//           var pageData = pages[pageURL.split('.')[0]];
  
//           // Create a new history item.
//           history.pushState(pageData, pageData.title, pageURL);
//         });
//       });
//     }
   
  
//     // Update the page content when the popstate event is called.
//     window.addEventListener('popstate', function(event) {
//       updateContent(event.state);
//     });
  
  
//     // Load initial content.
//     loadContent('index.html', function() {
//       // Update this history event so that the state object contains the data
//       // for the homepage.
//       history.replaceState(pages.index, pages.index.title, '');
//     });
   
//   };