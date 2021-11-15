//Function that allows the togglebutton to display the navigation links.

const $toggleButton = document.querySelector('.toggle-button');
const $navigationBarLinks = document.querySelector('.navigationBar-links');

$toggleButton.addEventListener('click', () => {
    $navigationBarLinks.classList.toggle('active')
});


// Function that hides other general information images when and shows respective information when clicked upon

const $installatorContainer = document.querySelector('.installator-container');
const $renewablePlantContainer = document.querySelector('.renewable-plant-container');
const $renewableCommunityContainer = document.querySelector('.renewable-community-container');
const $installatorInformationText = document.querySelector('.installator-information-text');
const $communityinformationtext = document.querySelector('.community-information-text');

$installatorContainer.onclick = function() {
    $renewablePlantContainer.classList.toggle('hidden');
    $renewableCommunityContainer.classList.toggle('hidden');  
    $installatorInformationText.classList.toggle('hidden');
    
}

$renewableCommunityContainer.onclick = function () {
    $renewablePlantContainer.classList.toggle('hidden');
    $installatorContainer.classList.toggle('hidden');
    $communityinformationtext.classList.toggle('hidden');
}


// * Declarations for the carousel

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const carouselContainer = document.querySelector('.carousel-container');


// * Buttons for the carousel

const previousButton = document.querySelector('#previousButton');
const nextButton = document.querySelector('#nextButton');


// *Counter

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// *Button Listeners

nextButton.addEventListener('click', () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

previousButton.addEventListener('click', () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});



