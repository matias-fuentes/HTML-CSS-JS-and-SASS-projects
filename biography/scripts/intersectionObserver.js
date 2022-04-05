const sections = Array.from(document.querySelectorAll('section'));
const hyperlinks = Array.from(document.querySelectorAll('#navigation a'));
const dropdownHyperlinks = Array.from(document.querySelectorAll('.navigation-container a'));
let currentSection = sections[0];

const mobileOptions = {
  rootMargin: "0px 0px -1px 0px",
  threshold: 0.5
};

const desktopOptions = {
  rootMargin: "-100px 0px 0px 0px",
  threshold: 0.5
};

const desktopObserver = new IntersectionObserver((entries) => {
  if (window.innerWidth >= 768) {
    observeFunction(entries);
  }
}, desktopOptions);

const mobileObserver = new IntersectionObserver((entries) => {
  if (window.innerWidth < 768) {
    observeFunction(entries);
  }
}, mobileOptions);

const observeFunction = (entries) => {
  entries.forEach(entry => {
    const index = sections.findIndex(section => section === entry.target);
    if (entry.isIntersecting) {
      hyperlinks[index].classList.add('actual-section');
      dropdownHyperlinks[index].classList.add('actual-section');
      currentSection = entry.target;
    } else {
      hyperlinks[index].classList.remove('actual-section');
      dropdownHyperlinks[index].classList.remove('actual-section');
    }
  });
};

sections.forEach(section => mobileObserver.observe(section));
sections.forEach(section => desktopObserver.observe(section));