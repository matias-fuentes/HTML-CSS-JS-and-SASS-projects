// Elements
const body = document.querySelector('body');
const titlesAndSpan = document.querySelectorAll('h1, h2, h3, h4, a, span');
const paragraphAndAnchors = document.querySelectorAll('p');

// Elements > Header
const headerContainer = document.querySelector('.header-container');
const dropdownDiv = document.querySelector('.dropdown-div');
const modeButton = document.getElementById('dark-mode');
const modeMenu = document.getElementById('mode-menu');
const switchButton = document.querySelector('.switch-button');
const slider = document.querySelector('.slider');

// Elements > About Me
const characteristics = document.querySelectorAll('.characteristics');
const boldTexts = document.querySelectorAll('.about-me-description > b');

// Elements > Technology
const technologyContainer = document.querySelectorAll('.technology-container');
const technologyBtnTexts = document.querySelectorAll('.button-container > h2');

// Elements > Career
const careers = document.querySelectorAll('.careers');
const careerCharacteristics = document.querySelectorAll('.characteristics-container > .characteristics');

// Elements > Projects
const projectTitles = document.querySelectorAll('.projects-carousel > .images-carousel-container > div > div > h3');
const projectSlogans = document.querySelectorAll('.projects-carousel > .images-carousel-container > div > div > p');

// Elements > Footer
const footer = document.querySelector('.footer');
const footerEmail = document.querySelector('.footer__email');
const currentYear = document.getElementById('current-year');

/* SVG's that changes its src property based on the current selected theme mode.

If theme is light:
nextSVG.src = './images/technologies/nextjs-black.svg';

However, if theme is dark:
nextSVG.src = './images/technologies/nextjs.svg'; */
const nextSVG = document.getElementById('next-svg');
const expressSVG = document.getElementById('express-svg');
const flaskSVG = document.getElementById('flask-svg');
const cypressSVG = document.getElementById('cypress-svg');
const cucumberSVG = document.getElementById('cucumber-svg');
const githubSVG = document.getElementById('github-svg');
const linkedInSVG = document.getElementById('linkedin-svg');
const youtubeSVG = document.getElementById('youtube-svg');

// Check if the current theme of the user matches with the dark mode or not
let prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
let isDarkMode = prefersColorScheme.matches;

// Invert the theme mode
function invert() {
  if (isDarkMode) {
    isDarkMode = false;
  } else {
    isDarkMode = true;
  }

  theme();
}

// Apply styles based on the currently selected theme mode
function theme() {
  if (isDarkMode) {
    // Globals
    body.style.backgroundColor = 'rgb(36, 36, 36)';
    body.style.color = 'white';
    titlesAndSpan.forEach(elem => {
      elem.style.color = 'white';
    });
    paragraphAndAnchors.forEach(elem => {
      elem.style.color = 'rgb(200, 200, 200)';
    });

    // Header & favicon
    headerContainer.style.backgroundColor = '#0d0d0d';
    headerContainer.style.boxShadow = '1px 1px 1px #b3b3b366';
    dropdownDiv.style.backgroundColor = 'black';
    modeMenu.src = './images/header/dark-menu.svg';
    modeButton.src = './images/header/dark-button-white.svg';
    nextSVG.src = './images/technologies/nextjs.svg';
    expressSVG.src = './images/technologies/express.svg';
    flaskSVG.src = './images/technologies/flask.svg';
    cypressSVG.src = './images/technologies/cypress.svg';
    cucumberSVG.src = './images/technologies/cucumber.svg';

    // About Me
    characteristics.forEach(characteristic => {
      characteristic.style.backgroundColor = 'black';
    });
    boldTexts.forEach(bText => {
      bText.classList.toggle('about-me-desc-bText');
    });

    // Technologies
    technologyContainer.forEach(container => {
      container.style.backgroundColor = 'black';
    });

    // Career
    careers.forEach(career => {
      career.style.backgroundColor = 'black';
    });
    careerCharacteristics.forEach(characteristic => {
      characteristic.style.backgroundColor = '#161616';
    });

    // Footer
    footer.classList.toggle('dark-card');
    githubSVG.src = './images/footer/github.svg';
    linkedInSVG.src = './images/footer/linkedin.svg';
    youtubeSVG.src = './images/footer/youtube.svg';
    footerEmail.style.color = 'rgb(200, 200, 200)';
    currentYear.style.color = 'rgb(200, 200, 200)';
  } else {
    // Global
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    titlesAndSpan.forEach(elem => {
      elem.style.color = 'black';
    });
    paragraphAndAnchors.forEach(elem => {
      elem.style.color = 'rgb(56, 56, 56)';
    });

    // Header & favicon
    headerContainer.style.backgroundColor = '#e0e0e0';
    headerContainer.style.boxShadow = '1px 1px 1px #4c4c4c66';
    dropdownDiv.style.backgroundColor = '#e0e0e0';
    modeMenu.src = './images/header/light-menu.svg';
    modeButton.src = './images/header/dark-button-black.svg';
    nextSVG.src = './images/technologies/nextjs-black.svg';
    expressSVG.src = './images/technologies/express-black.svg';
    flaskSVG.src = './images/technologies/flask-black.svg';
    cypressSVG.src = './images/technologies/cypress-black.svg';
    cucumberSVG.src = './images/technologies/cucumber-black.svg';

    // About Me
    characteristics.forEach(characteristic => {
      characteristic.style.backgroundColor = '#e0e0e0';
    });
    boldTexts.forEach(bText => {
      bText.classList.toggle('about-me-desc-bText');
    });

    // Technologies
    technologyContainer.forEach(container => {
      container.style.backgroundColor = '#e0e0e0';
    });
    technologyBtnTexts.forEach(btnText => {
      btnText.style.color = 'white';
    });

    // Career
    careers.forEach(career => {
      career.style.backgroundColor = '#e0e0e0';
    });
    careerCharacteristics.forEach(characteristic => {
      characteristic.style.backgroundColor = '#f0f0f0';
    });

    // Projects
    projectTitles.forEach(title => {
      title.style.color = 'white';
    });
    projectSlogans.forEach(slogan => {
      slogan.style.color = 'white';
    });

    // Footer
    footer.classList.toggle('dark-card');
    githubSVG.src = './images/footer/github-black.svg';
    linkedInSVG.src = './images/footer/linkedin-black.svg';
    youtubeSVG.src = './images/footer/youtube-black.svg';
    footerEmail.style.color = 'rgb(56, 56, 56)';
    currentYear.style.color = 'rgb(56, 56, 56)';

    console.log('hola???');
  }
}

/* If there's a change in the prefersColorScheme object, or if the user clicks either the dark mode or the switch
button, it inverts the value of isDarkMode. */
prefersColorScheme.addEventListener('change', invert);

/* The process to handle the switch button state management it's the next:

- If we click on the light/dark mode button, then we programatically trigger a click on the switch button, making it
to go from light to dark and vice versa.

- That programmatic triggered click, triggers a function that inverts the value of isDarkMode.

- And that invert function triggers another function, the theme() function, which apply the styles based on the recently
changed isDarkMode value.

So, either we click the switch button normally or programatically, the process it's essentially the same (except
for the first step only). */
modeButton.addEventListener('click', () => {
  slider.click();
});

switchButton.addEventListener('click', e => {
  if (e.target === slider) {
    invert();
  }
});

// Sets the initial state of the switch button.
if (isDarkMode) {
  switchButton.click();
}

theme();
