// Create variables targetting the relevant DOM elements here


// DOM VARIABLES =====================

var title = document.querySelector('.cover-title');
var cover = document.querySelector('.cover-image');
var descriptor1 = document.querySelector('.tagline-1')
var descriptor2 = document.querySelector('.tagline-2')

// RELEVANT RANDOMIZED VARIABLES =====
var randomTitle = titles[getRandomIndex(titles)];
//declare variable randomTitle to populate data as value from the array of titles in data.js
var randomCover = covers[getRandomIndex(covers)];
// same as above ^
var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
//same as above ^^
var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
//same as above but we must make sure the words are the same.
  if (randomDescriptor1 === randomDescriptor2){
    //if statement that says if they equal the same thing do this:
    var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
    //declares/refreshes the randomized descriptors
  }

//    -=-= RANDOMIZED COVER =-=-


// UPDATE TITLE ================
function newTitle(customTitle = randomTitle){
  //function to invoke the new title to appear default value should be randomTitle
  randomTitle = titles[getRandomIndex(titles)];
  //declare randomTitle variable again to refresh the title each time the function is ran
  title.innerText = customTitle
  //change the text with title class in index.html to refreshed/redefine randomTitle variable.
}

// UPDATE COVER ================  
  function newCover(imgSrc = randomCover){
    //function to invoke a new image to appear.
    randomCover = covers[getRandomIndex(covers)];
    //redeclare the randomCover variable to reload it each time the function is ran
    cover.src = imgSrc
    //sets html id "cover-img"'s src to "randomCover" variable.
  }


// UPDATE TAGLINES =============
  function newTagline(tagline1 = randomDescriptor1, tagline2 = randomDescriptor2){
    var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
    var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
  //we must make sure that each time the function is ran the descriptors are refreshed
    descriptor1.innerText = tagline1
    descriptor2.innerText = tagline2
  //we must update each html value inside the span tags with classes tagline-<1/2>
}


// UPDATE WHOLE POSTER =========
  function newPoster(title, tagline1, tagline2, imgSrc){
    // this function is used to update tagline/cover/title all at once.
    newTagline(tagline1, tagline2);
    newCover(imgSrc);
    newTitle(title);
  }

  newPoster();
  //invoke the function each time the page loads


// variable currentview = current page with homeview being default
// if view savedcovers button / make your own button is clicked home should reappear
//


//define variables for all buttons and apply event listeners to each button
var homeBtn = document.querySelector('.home-button');
var showNewCoverBtn = document.querySelector('.random-cover-button');
var saveCoverBtn = document.querySelector('.save-cover-button');
var viewSavedCoversBtn = document.querySelector('.view-saved-button');
var makeYourOwnBtn = document.querySelector('.make-new-button');

//event listeners for nav buttons - on click of button each function is ran
homeBtn.addEventListener('click' , function(){viewHome()});
showNewCoverBtn.addEventListener('click' , function(){newPoster()});
saveCoverBtn.addEventListener('click' , function(){/*PUT SAVE COVER FUNCTION HERE*/});
viewSavedCoversBtn.addEventListener('click', function(){viewSaved()});
makeYourOwnBtn.addEventListener('click', function(){viewForm()});

//define variables for access to all views provided
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');

var currentView = homeView // define a variable that tracks which view is currently being viewed by user

//button functions / functionality
  //home button
function viewHome (){ //this function when invoked must apply the class hidden to the other views and also hide the homebutton
  homeView.classList.remove('hidden'); //remove hidden class from homeView
  savedView.classList.add('hidden'); // add hidden class to savedView
  formView.classList.add('hidden') // add hidden class to formView
  homeBtn.classList.add('hidden'); // add hidden class to home button so it doesn't show when on home view
  currentView = homeView; // set the currentview to home view
  showNewCoverBtn.classList.remove('hidden'); // shows NewCoverBtn
  saveCoverBtn.classList.remove('hidden'); // shows saveCoverBtn
}
viewHome() // we want to run the function on page load to make sure the home button is hidden by default

  //view saved covers button
function viewSaved(){
  savedView.classList.remove('hidden');
  homeView.classList.add('hidden');
  formView.classList.add('hidden');
  saveCoverBtn.classList.add('hidden'); // we only want to see the "save cover" button while on home view
  showNewCoverBtn.classList.add('hidden') // we only want to show the "Show new Random Cover" on home view
  homeBtn.classList.remove('hidden'); // make sure the home buttom is showing up when on this view
  currentView = savedView;
}

  //make your own cover button
function viewForm(){
  formView.classList.remove('hidden');
  homeView.classList.add('hidden');
  savedView.classList.add('hidden');
  saveCoverBtn.classList.add('hidden'); // we only want to see the "save cover" button while on home view
  showNewCoverBtn.classList.add('hidden') // we only want to show the "Show new Random Cover" on home view
  homeBtn.classList.remove('hidden'); // make sure the home buttom is showing up when on this view
}



// We've provided a few variables below
// var savedCovers = [
//   new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
// ];
// var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
