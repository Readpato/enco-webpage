//Function that allows the togglebutton to display the navigation links.

const toggleButton = document.querySelector('.toggle-button');
const navigationBarLinks = document.querySelector('.navigationBar-links');

toggleButton.addEventListener('click', () => {
    navigationBarLinks.classList.toggle('active')
});
