Tony & Nate 

Professionalism 
* 2
* README is only missing installation instructions.
* Would like to see a branch per feature
* Would like to see commits be closer to even 


JavaScript Style & Implementation

* 2.5
* I am impressed that you were able to make this function work using .some()! There is an opportunity to use truth/falsy values to clean this function up.
* `function saveCover(){
  var currentCover = new Poster(title.innerText, tl1.innerText, tl2.innerText, cover.src)
  if (savedCovers.some(savedCover => savedCover.ID === currentCover.ID) === false){
    savedCovers.push(new Poster(title.innerText, tl1.innerText, tl2.innerText, cover.src))
  }
}`
Your Conditional coul dhave been written as - `if (!savedCovers.some(savedCover => savedCover.ID === currentCover.ID))`
* There is not a need for a poster class because it does the same thing as the cover class.
* Don’t need anonymous functions in the event listeners - just use the named functions
* `makeYourOwnBtn.addEventListener('click', function(){viewForm()});`
Could have been written
* `makeYourOwnBtn.addEventListener('click', viewForm());`





Functional Expectations 
* 3
* Good job getting the saved covers functionality to work
