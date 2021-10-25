//Function that allows the togglebutton to display the navigation links.

const $toggleButton = document.querySelector('.toggle-button');
const $navigationBarLinks = document.querySelector('.navigationBar-links');

$toggleButton.addEventListener('click', () => {
    $navigationBarLinks.classList.toggle('active')
});


// Function that hides other general information images when and shows respective information when clicked upon

/*
    Work on branch: Try to put everything a single div so we can just adress it with a single code line

*/

const $installatorImage = document.querySelector('.installator-image');
const $installatorimagetext = document.querySelector('.installator-image-text');
const $renovablePlantImage = document.querySelector('.renovable-plant-image');
const $renovablePlantImageText = document.querySelector('.renovable-plant-image-text');
const $communityImage = document.querySelector('.community-image');
const $communityImageText = document.querySelector('.community-image-text');


$installatorImage.onclick = function() {
    $renovablePlantImage.classList.toggle('hidden');
    $renovablePlantImageText.classList.toggle('hidden')
    $communityImage.classList.toggle('hidden');
    $communityImageText.classList.toggle('hidden');   
}

