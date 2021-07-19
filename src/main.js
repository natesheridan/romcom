//Tony Hsu's and Nate Sheridan's RomCom project

var title = document.querySelector('.cover-title');
var cover = document.querySelector('.cover-image');
var tl1 = document.querySelector('.tagline-1')
var tl2 = document.querySelector('.tagline-2')
var randomTitle = titles[getRandomIndex(titles)];
var randomCover = covers[getRandomIndex(covers)];
var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
if (randomDescriptor1 === randomDescriptor2){
  var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
}

var userTitle = document.querySelector('.user-title');
var userDesc1 = document.querySelector('.user-desc1')
var userDesc2 = document.querySelector('.user-desc2')
var userCover = document.querySelector('.user-cover');
var homeBtn = document.querySelector('.home-button');
var showNewCoverBtn = document.querySelector('.random-cover-button');
var saveCoverBtn = document.querySelector('.save-cover-button');
var viewSavedCoversBtn = document.querySelector('.view-saved-button');
var makeYourOwnBtn = document.querySelector('.make-new-button');
var makeMyBookBtn = document.querySelector('.create-new-book-button');
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');
var savedCoverSection = document.querySelector('.saved-covers-section');
class Poster{
  constructor(title, tl1, tl2, cover = randomCover){
    this.title = title;
    this.tl1 = tl1;
    this.tl2 = tl2;
    this.cover = cover;
    this.ID = this.title + this.tl1 + this.tl2 + this.cover;
  }
  
}

var savedCovers = [ //saved covers should be saved in the format - Title, Desc1, Desc2, CoverImgSrc
  new Poster("Shrek", "Shrek", "more Shrek", "https://static.wikia.nocookie.net/shrek/images/7/7c/1754181-b.jpg/revision/latest/scale-to-width-down/250?cb=20210619181030"),
];
var currentCover = new Poster(title.innerText, tl1.innerText, tl2.innerText, cover.src)

function newTitle(customTitle = randomTitle){
  randomTitle = titles[getRandomIndex(titles)];
  title.innerText = customTitle
}

function newCover(imgSrc = randomCover){
  randomCover = covers[getRandomIndex(covers)];
  cover.src = imgSrc
}

function newTagline(tagline1 = randomDescriptor1, tagline2 = randomDescriptor2){
  randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
  randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
  tl1.innerText = tagline1
  tl2.innerText = tagline2
}

function newPoster(title, tagline1, tagline2, imgSrc){ 
  newTagline(tagline1, tagline2);
  newCover(imgSrc);
  newTitle(title);
}

function makeMyBook(){
  viewHome();
  event.preventDefault();
  newPoster(userTitle.value, userDesc1.value, userDesc2.value, userCover.value)
  covers.push(userCover.value)
  titles.push(userTitle.value)
  savedCovers.push(new Poster(userTitle.value, userDesc1.value, userDesc2.value, userCover.value))
}

function saveCover(){
  var currentCover = new Poster(title.innerText, tl1.innerText, tl2.innerText, cover.src)
  if (savedCovers.some(savedCover => savedCover.ID === currentCover.ID) === false){
    savedCovers.push(new Poster(title.innerText, tl1.innerText, tl2.innerText, cover.src))
  }
}

function updateCovers(){
  document.querySelector('.saved-covers-section').innerHTML = ""
for (var i = 0; i < savedCovers.length; i++){ 
  savedCoverSection.insertAdjacentHTML(`beforeend`, `
  <section class="mini-cover">
  <img class="cover-image" src="${savedCovers[i].cover}">
  <p class="cover-title">${savedCovers[i].title}</p>
  <p class="tagline">A tale of ${savedCovers[i].tl1} and ${savedCovers[i].tl2}</p>
</section>
  `)   
  }
}

function viewHome (){ 
  homeView.classList.remove('hidden'); 
  savedView.classList.add('hidden'); 
  formView.classList.add('hidden');
  homeBtn.classList.add('hidden'); 
  showNewCoverBtn.classList.remove('hidden'); 
  saveCoverBtn.classList.remove('hidden');
}

function viewSaved(){
  savedView.classList.remove('hidden');
  homeView.classList.add('hidden');
  formView.classList.add('hidden');
  saveCoverBtn.classList.add('hidden'); 
  showNewCoverBtn.classList.add('hidden');
  homeBtn.classList.remove('hidden');
  currentView = savedView;
  updateCovers();
}

function viewForm(){
  formView.classList.remove('hidden');
  homeView.classList.add('hidden');
  savedView.classList.add('hidden');
  saveCoverBtn.classList.add('hidden'); 
  showNewCoverBtn.classList.add('hidden')
  homeBtn.classList.remove('hidden'); 
}

homeBtn.addEventListener('click' , function(){viewHome()});
showNewCoverBtn.addEventListener('click' , function(){newPoster()});
saveCoverBtn.addEventListener('click' , saveCover);
viewSavedCoversBtn.addEventListener('click', function(){viewSaved()});
makeYourOwnBtn.addEventListener('click', function(){viewForm()});
makeMyBookBtn.addEventListener('click', function(){makeMyBook()})

viewHome() 
newPoster();

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
