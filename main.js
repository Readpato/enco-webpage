//Function that allows the togglebutton to display the navigation links.

const $toggleButton = document.querySelector('.toggle-button');
const $navigationBarLinks = document.querySelector('.navigationBar-links');

$toggleButton.addEventListener('click', () => {
    $navigationBarLinks.classList.toggle('active')
});


// Function that hides other general information images when and shows respective information when clicked upon

const $installatorImage = document.querySelector('.installator-image');
const $renovablePlantImage = document.querySelector('.renovable-plant-image');
const $communityImage = document.querySelector('.community-image');

$installatorImage.onclick = function() {
    $renovablePlantImage.classList.toggle('hidden');
    $communityImage.classList.toggle('hidden');
}