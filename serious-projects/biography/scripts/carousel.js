/* Creates a carousel of images */
function carousel() {
  // About me carousel
  const blurredBackground = document.querySelector('.blurred-background');
  const aboutMeImages = Array.from(document.querySelectorAll('#about-me-carousel > div'));
  const images = Array.from(document.querySelectorAll('#about-me-carousel > div > img'));

  // Projects carousel
  const projectImages = Array.from(document.querySelectorAll('.projects-carousel > .images-carousel-container'));
  const blackBackgrounds = Array.from(
    document.querySelectorAll('.projects-carousel > .images-carousel-container > div')
  );
  const carouselDescriptions = Array.from(
    document.querySelectorAll('.projects-carousel > .images-carousel-container > div > div')
  );

  /* We translate each picture -100vw of its actual position, because if not, the last picture appears first, in position 0 */
  aboutMeImages.forEach(image => {
    image.style.transform = 'translateX(-100vw)';
  });

  projectImages.forEach(image => {
    image.style.transform = `translateX(-100%)`;
  });

  blackBackgrounds.forEach((background, index) => {
    background.addEventListener('mouseover', () => {
      carouselDescriptions[index].style.display = 'flex';
    });

    background.addEventListener('mouseout', () => {
      carouselDescriptions[index].style.display = 'none';
    });
  });

  /* A RegEx function to detect if the user is in mobile or not */
  let mobileDevice = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      mobileDevice = true;
  })(navigator.userAgent || navigator.vendor || window.opera);

  if (mobileDevice == true) {
    for (let i = 0; i < images.length; i++) {
      if (i == 0) {
        images[i].src = `./images/gallery/MobileImages/${images.length}.webp`;
      } else {
        images[i].src = `./images/gallery/MobileImages/${i}.webp`;
      }
    }
  } else {
    /* We only use blurred background in desktop because in mobile devices Chrome doesn't executes very well this function */
    blurredBackground.style.backgroundImage = 'url(./images/gallery/DesktopImages/blur-1.webp)';

    for (let i = 0; i < images.length; i++) {
      if (i == 0) {
        images[i].src = `./images/gallery/DesktopImages/${images.length}.webp`;
      } else {
        images[i].src = `./images/gallery/DesktopImages/${i}.webp`;
      }
    }
  }

  /* With count we keep track of the actual image (The first image, is, in fact, the second one) */
  const aboutMeArrowRight = document.querySelector('#about-me-arrow-right');
  const aboutMeArrowLeft = document.querySelector('#about-me-arrow-left');
  let aboutMeCount = 1;
  let aboutMeCurrentImage = 1;

  const projectsArrowRight = document.querySelector('#projects-arrow-right');
  const projectsArrowLeft = document.querySelector('#projects-arrow-left');
  let projectsCount = 1;

  /* Listens for the arrow we've clicked, and based on that, runs one or other code */
  function arrowListener({ isArrowRight, isProjectsGallery }) {
    if (isProjectsGallery) {
      isArrowRight ? projectsCount++ : projectsCount--;

      /* Disable button */
      isArrowRight ? (projectsArrowRight.disabled = true) : (projectsArrowLeft.disabled = true);
      isArrowRight ? (projectsArrowRight.style.cursor = 'default') : (projectsArrowLeft.style.cursor = 'default');

      /* At the end of the animation, enable the buttons */
      setTimeout(() => {
        isArrowRight ? (projectsArrowRight.style.cursor = 'pointer') : (projectsArrowLeft.style.cursor = 'pointer');
        isArrowRight ? (projectsArrowRight.disabled = false) : (projectsArrowLeft.disabled = false);
      }, 1000);

      /* It translates the images one position to the left or to the right based on what button we've clicked */
      projectImages.forEach(image => {
        image.style.transition = 'all 1s';
        image.style.transform += isArrowRight ? 'translateX(-100%)' : 'translateX(100%)';
      });

      if (isArrowRight && projectsCount == projectImages.length + 2) {
        projectsCount = 2;
      } else if (!isArrowRight && projectsCount == 0) {
        projectsCount = projectImages.length;
      }

      isArrowRight
        ? projectImages[projectsCount - 2].style.removeProperty('transition')
        : projectImages[projectsCount - 1].style.removeProperty('transition');

      isArrowRight
        ? (projectImages[projectsCount - 2].style.transform = `translateX(${
            100 * (projectImages.length - projectsCount)
          }%)`)
        : (projectImages[projectsCount - 1].style.transform = `translateX(${-100 * projectsCount}%)`);
    } else {
      isArrowRight ? aboutMeCount++ : aboutMeCount--;

      /* Disable button */
      isArrowRight ? (aboutMeArrowRight.disabled = true) : (aboutMeArrowLeft.disabled = true);
      isArrowRight ? (aboutMeArrowRight.style.cursor = 'default') : (aboutMeArrowLeft.style.cursor = 'default');

      if (mobileDevice == false) {
        /* Fade out */
        blurredBackground.style.opacity = '0';

        /* Change blur image at quarter of the animation */
        setTimeout(function () {
          aboutMeCurrentImage =
            aboutMeCount % aboutMeImages.length !== 0 ? aboutMeCount % aboutMeImages.length : aboutMeImages.length;
          blurredBackground.style.backgroundImage = `url('./images/gallery/DesktopImages/blur-${aboutMeCurrentImage}.webp')`;
        }, 250);

        /* Fade in at half animation */
        setTimeout(function () {
          blurredBackground.style.opacity = '1';
        }, 500);
      }

      /* At the end of the animation, enable the buttons */
      setTimeout(function () {
        isArrowRight ? (aboutMeArrowRight.style.cursor = 'pointer') : (aboutMeArrowLeft.style.cursor = 'pointer');
        isArrowRight ? (aboutMeArrowRight.disabled = false) : (aboutMeArrowLeft.disabled = false);
      }, 1000);

      /* It translates the images one position to the left or to the right based on what button we've clicked */
      aboutMeImages.forEach(function (image) {
        image.style.transition = 'all 1s';
        image.style.transform += isArrowRight ? 'translateX(-100vw)' : 'translateX(100vw)';
      });

      /* With the right button, if we reach the length of the number of images + 2, we set count to 2,
          passing our "position zero" to "position two".
  
          As we need to get the two images before the actual one to send it to the last position of the carousel,
          if we don't set count like this, then we won't be able to select the image with index count - 2 when
          count is equal to 0 or 1, since it will return negative values (-2 and -1 instead of 5 and 6 respectively).
  
          With the left button instead, we don't have to switch the "position zero" because we don't have to check
          for the two images before thanks to the fact that count decrements when we click the left button */

      if (isArrowRight && aboutMeCount == aboutMeImages.length + 2) {
        aboutMeCount = 2;
      } else if (!isArrowRight && aboutMeCount == 0) {
        aboutMeCount = aboutMeImages.length;
      }

      /* translate has an unique property: its position always depends of its starting position.
  
          One thing is the translate that we DEFINE, and another the translate in which it is THANKS TO THE ELEMENTS BEFORE IT.
  
          E.g.: The first image that appears in the webpage, as first instance it has DEFINED -100vw as its translate.
          But... How is it possible? If the image it's clearly in 0vw. Well, this's because there's another image before it,
          waiting for you to click the left button!
  
          Although the image looks like it's in 0vw, as there's an image BEFORE IT occupying the 100vw,
          we need to subtract it to put it in, visually, 0vw.
  
          That's why we always need to use the count variable to translate it */

      isArrowRight
        ? aboutMeImages[aboutMeCount - 2].style.removeProperty('transition')
        : aboutMeImages[aboutMeCount - 1].style.removeProperty('transition');

      isArrowRight
        ? (aboutMeImages[aboutMeCount - 2].style.transform = `translateX(${
            100 * (aboutMeImages.length - aboutMeCount)
          }vw)`)
        : (aboutMeImages[aboutMeCount - 1].style.transform = `translateX(${-100 * aboutMeCount}vw)`);
    }
  }

  aboutMeArrowRight.addEventListener('click', () => {
    arrowListener({ isArrowRight: true, isProjectsGallery: false });
  });

  aboutMeArrowLeft.addEventListener('click', () => {
    arrowListener({ isArrowRight: false, isProjectsGallery: false });
  });

  projectsArrowRight.addEventListener('click', () => {
    arrowListener({ isArrowRight: true, isProjectsGallery: true });
  });

  projectsArrowLeft.addEventListener('click', () => {
    arrowListener({ isArrowRight: false, isProjectsGallery: true });
  });
}

carousel();
