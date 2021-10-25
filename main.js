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

const $installatorContainer = document.querySelector('.installator-container');
const $renewablePlantContainer = document.querySelector('.renewable-plant-container');
const $renewableCommunityContainer = document.querySelector('.renewable-community-container');
const $installatorInformationText = document.querySelector('.installator-information-text');

$installatorContainer.onclick = function() {
    $renewablePlantContainer.classList.toggle('hidden');
    $renewableCommunityContainer.classList.toggle('hidden');  
    $installatorInformationText.classList.toggle('hidden');
    
}

