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
function newTitle(){
  //function to invoke the new title to appear
  var randomTitle = titles[getRandomIndex(titles)];
  //declare  randomTitle variable again to refresh the title each time the function is ran
  title.innerText = randomTitle
  //change the text wrapped in h2 tags in index.html to refreshed/redefine randomTitle variable.
}


// UPDATE COVER ================  
  function newCover(){
    //function to invoke a new image to appear.
    var randomCover = covers[getRandomIndex(covers)];
    //redeclare the randomCover variable to reload it each time the function is ran
    cover.src = randomCover
    //sets html id "cover-img"'s src to "randomCover" variable.
  }


// UPDATE TAGLINES =============
  function newTagline(){
    var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
    var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
  //we must make sure that each time the function is ran the descriptors are refreshed
    descriptor1.innerText = randomDescriptor1
    descriptor2.innerText = randomDescriptor2
  //we must update each html value inside the span tags with classes tagline-<1/2>
}


// UPDATE WHOLE POSTER =========
  function newPoster(){
    // this function is used to update tagline/cover/title all at once.
    newTagline();
    newCover();
    newTitle();
  }

  newPoster();
  //invoke the function each time the page loads

document.querySelector('.random-cover-button').addEventListener('click' , function(){newPoster()})


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
