//Color variables
const delGreen = '#86bc25';
const delGreen2 = '#67bd00';
const delLightGreen = '#a2b721';
const darkGreen = '#6e7d16';
const delTurquoise = '#29a580';
const delBlue = '#00a3e0';
const darkGrey = '#181818';
const lightGrey = '#c3c3c3';

//Insert svg icons and color them
const allJoinUsElementsWithSVG = document.querySelectorAll('.section-1__element:not(.img-element)');
allJoinUsElementsWithSVG.forEach(function (el) {
  const data = el.dataset.icon;
  el.insertAdjacentHTML('afterbegin', svgIcons[data - 1]);
  const allPaths = el.querySelectorAll('path');
  allPaths.forEach(function (p) {
    p.setAttribute('fill', svgIconsColors[data - 1]);
  });
});

//Insert job icons and color them
const allJobs = document.querySelector('.section-4').querySelectorAll('.section-4__job');
allJobs.forEach(function (job) {
  job.insertAdjacentHTML('afterbegin', svgIconJob);
});

const jobIcons = document.querySelectorAll('.job-icon>path');
jobIcons.forEach(function (jobIcon) {
  jobIcon.setAttribute('fill', '#727c27');
});
// if (allJobs.length % 2 != 0) {
//   console.log(allJobs[allJobs.length - 1]);
//   allJobs[allJobs.length - 1].style.gridColumn = 'span 2';
// }

//Insert bootcamp icons and color them
const finbootElement = document.querySelector('.finboot');
finbootElement.insertAdjacentHTML('afterbegin', svgIconFin);
finbootElement
  .querySelector('.bootcamp-icon')
  .querySelectorAll('path')
  .forEach(function (p) {
    p.setAttribute('fill', delTurquoise);
  });

const scbootElement = document.querySelector('.scboot');
scbootElement.insertAdjacentHTML('afterbegin', svgIconSupply);
scbootElement
  .querySelector('.bootcamp-icon')
  .querySelectorAll('path')
  .forEach(function (p) {
    p.setAttribute('fill', delLightGreen);
  });

//Hover effect on apply buttons
const btnsApply = document.querySelectorAll('.btn__apply');
btnsApply.forEach(function (btn) {
  btn.addEventListener('mouseenter', function (e) {
    // const getParentBGColor = window.getComputedStyle(this.closest('.section-4__job')).getPropertyValue('background-color');
    // this.style.backgroundColor = getParentBGColor;
    this.classList.add('btn--active');
  });
  btn.addEventListener('mouseleave', function (e) {
    // this.style.removeProperty('background-color');
    this.classList.remove('btn--active');
  });
});

//Hover effect on job description
const jobDescriptionButtons = document.querySelectorAll('.job-desc-button');
jobDescriptionButtons.forEach(function (el) {
  el.addEventListener('mouseenter', function () {
    this.classList.add('description--active');
  });
  el.addEventListener('mouseleave', function () {
    this.classList.remove('description--active');
  });
});

//Scroll effect on big arrow
const bigArrow = document.querySelector('.section-2__right');
const section4 = document.querySelector('.section-4');
const scrollToTarget = function (element, offset = 0) {
  const elCoordsTop = element.getBoundingClientRect().top;
  window.scrollTo({ top: elCoordsTop + window.pageYOffset - offset, behaviour: 'smooth' });
};
bigArrow.addEventListener('click', function () {
  scrollToTarget(section4, 150); //
});

//reveal sections
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0,
});
//Hide sections
const allSections = document.querySelectorAll('.e-section');
allSections.forEach(function (section) {
  sectionObserver.observe(section);

  if (!section.classList.contains('section-1') && !section.classList.contains('section-6')) section.classList.add('section--hidden');
});

let visibleSections = 0;
const checkSectionInView = setInterval(function () {
  allSections.forEach(function (sec) {
    const getSecTop = sec.getBoundingClientRect().top;
    // const getSecBottom = sec.getBoundingClientRect().bottom;
    if (getSecTop < window.innerHeight) sec.classList.remove('section--hidden');

    if (!sec.classList.contains('section--hidden')) visibleSections++;

    if (visibleSections === allSections.length) clearInterval(checkSectionInView);
  });
}, 2000);

//Lazy loading images
const imgTargets = document.querySelectorAll('.lazy-img');
window.addEventListener('load', function (e) {
  imgTargets.forEach(function (i) {
    i.classList.remove('lazy-img');
  });
});

// imgTargets.forEach(function (im) {
//   im.addEventListener('load', function () {
//     im.classList.remove('lazy-img');
//   });
// });

//Add icon to job description pop-up
const popUpTitles = document.querySelectorAll('.job-container__title');
popUpTitles.forEach(function (title) {
  title.insertAdjacentHTML('afterbegin', svgIconJob);
  title
    .querySelector('.job-icon')
    .querySelectorAll('path')
    .forEach(function (p) {
      p.setAttribute('fill', '#167053');
    });
});

//Add pop-up functionality
const popUpJobs = document.querySelectorAll('.job-container');
const overlay = document.getElementById('pop-up-overlay');
const popUpWrapper = document.getElementById('job-description-wrapper');
const body = document.querySelector('body');
const descApplyBtns = document.querySelectorAll('.description-wrapper__btn');
//Add close button
popUpWrapper.insertAdjacentHTML('afterbegin', CloseBtn);
popUpWrapper
  .querySelector('#close-btn')
  .querySelectorAll('path')
  .forEach(p => p.setAttribute('fill', 'white'));

const closePopUp = function () {
  overlay.classList.remove('visible');
  popUpWrapper.classList.remove('visible');
  popUpJobs.forEach(job => job.classList.remove('visible'));
  body.style.overflow = 'auto';
  descApplyBtns.forEach(function (btn) {
    btn.classList.remove('visible');
  });
};

const openPopUp = function () {
  body.style.overflow = 'hidden';
  overlay.classList.add('visible');
  popUpWrapper.classList.add('visible');
  popUpJobs.forEach(job => job.classList.remove('visible'));

  const getData = this.dataset.job;

  popUpJobs.forEach(function (job) {
    if (job.dataset.job === getData) job.classList.add('visible');
  });
  descApplyBtns.forEach(function (btn) {
    if (btn.dataset.job === getData) btn.classList.add('visible');
  });
};
//Add event listeners
overlay.addEventListener('click', closePopUp);
popUpWrapper.querySelector('#close-btn').addEventListener('click', closePopUp);
document.addEventListener('keydown', function (e) {
  // console.log(e);
  if (e.code === 'Escape') closePopUp();
});
jobDescriptionButtons.forEach(function (btn) {
  btn.addEventListener('click', openPopUp);
});

//Add mobile classes when width smaller that 1024
if (window.innerWidth < 1024) {
  descApplyBtns.forEach(function (btn) {
    btn.classList.remove('desktop-link');
    btn.classList.add('mobile-link');
  });
  btnsApply.forEach(function (btn) {
    btn.classList.remove('desktop-link');
    btn.classList.add('mobile-link');
  });
}
