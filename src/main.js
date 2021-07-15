// Create variables targetting the relevant DOM elements here 👇
var titles = require('./data.js');
var covers = require('./data.js');
var descriptors = require('./data.js');
var Cover = require('./cover.js');


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
