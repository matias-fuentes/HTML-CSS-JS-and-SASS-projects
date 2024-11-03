const sections = document.querySelectorAll('section');
const hyperlinks = document.querySelectorAll('#navigation a');
const dropdownHyperlinks = document.querySelectorAll('.navigation-container a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    switch (entry.target.id) {
      case 'about-me':
        hyperlinks[0].classList.toggle('actual-section', entry.isIntersecting);
        dropdownHyperlinks[0].classList.toggle('actual-section', entry.isIntersecting);
        break;
      case 'technologies':
        hyperlinks[1].classList.toggle('actual-section', entry.isIntersecting);
        dropdownHyperlinks[1].classList.toggle('actual-section', entry.isIntersecting);
        break;
      case 'career':
        hyperlinks[2].classList.toggle('actual-section', entry.isIntersecting);
        dropdownHyperlinks[2].classList.toggle('actual-section', entry.isIntersecting);
        break;
      case 'projects':
        hyperlinks[3].classList.toggle('actual-section', entry.isIntersecting);
        dropdownHyperlinks[3].classList.toggle('actual-section', entry.isIntersecting);
        break;
    }
  });
});

window.addEventListener(
  'load',
  () => {
    if ('IntersectionObserver' in window) {
      sections.forEach(section => {
        observer.observe(section);
      });
    }
  },
  false
);
