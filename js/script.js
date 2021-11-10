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
  svgIcon = `
  <svg version="1.1" class="svg-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 300 261" style="enable-background:new 0 0 300 261;" xml:space="preserve">
<path d="M287.1,110h-19.6V90.4c0-5.4-4.4-9.8-9.8-9.8h-98.2V60.9h49.1c5.4,0,9.8-4.4,9.8-9.8V11.8c0-5.4-4.4-9.8-9.8-9.8h-58.9
 c-5.4,0-9.8,4.4-9.8,9.8v39.3v29.5H41.6c-5.4,0-9.8,4.4-9.8,9.8V110H12.2c-5.4,0-9.8,4.4-9.8,9.8v127.6c0,5.4,4.4,9.8,9.8,9.8h274.9
 c5.4,0,9.8-4.4,9.8-9.8V119.8C296.9,114.4,292.5,110,287.1,110z M159.4,21.6h39.3v19.6h-39.3V21.6z M277.2,237.6h-216v-29.5
 c0-5.4-4.4-9.8-9.8-9.8c-5.4,0-9.8,4.4-9.8,9.8v29.5H22v-108h19.6c5.4,0,9.8-4.4,9.8-9.8v-19.6h196.4v19.6c0,5.4,4.4,9.8,9.8,9.8
 h19.6V237.6z"/>
<circle cx="51.4" cy="168.9" r="9.8"/>
<circle cx="90.7" cy="168.9" r="9.8"/>
<circle cx="130" cy="168.9" r="9.8"/>
<circle cx="169.2" cy="168.9" r="9.8"/>
<circle cx="208.5" cy="168.9" r="9.8"/>
<circle cx="90.7" cy="129.6" r="9.8"/>
<circle cx="130" cy="129.6" r="9.8"/>
<circle cx="169.2" cy="129.6" r="9.8"/>
<circle cx="208.5" cy="129.6" r="9.8"/>
<circle cx="247.8" cy="168.9" r="9.8"/>
<circle cx="90.7" cy="208.2" r="9.8"/>
<circle cx="130" cy="208.2" r="9.8"/>
<circle cx="169.2" cy="208.2" r="9.8"/>
<circle cx="208.5" cy="208.2" r="9.8"/>
<circle cx="247.8" cy="208.2" r="9.8"/>
</svg>
    `;
  el.insertAdjacentHTML('afterbegin', svgIcon);
});
const allSVGIcons = document.querySelectorAll('.svg-icon>circle, .svg-icon>path');
allSVGIcons.forEach(function (icon) {
  icon.setAttribute('fill', '#86bc25');
});

//Insert job icons and color them
const allJobs = document.querySelector('.section-4').querySelectorAll('.section-4__job');
const svgIconJob = `<svg version="1.1" class="job-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 248 261" style="enable-background:new 0 0 248 261;" xml:space="preserve">
<path d="M239.5,55.6l-25.6-25.6c-1.6-1.6-3.8-2.5-6-2.5h-12.5L180.9,5.8c-1.8-2.7-5-4.2-8.2-3.7c-3.2,0.4-5.9,2.7-7,5.8l-33,99.1
 c-14.4,8.2-69.7,45-69.7,125.2c0,4.7-3.8,8.5-8.5,8.5s-8.5-3.8-8.5-8.5v-67.5c0-4.9,3.1-27-8.7-40.9c-6-7.1-14.8-10.9-25.4-10.9
 c-4.7,0-8.5,3.8-8.5,8.5s3.8,8.5,8.5,8.5c5.5,0,9.6,1.6,12.4,4.8c6.4,7.5,5.6,22.7,4.8,27.9c-0.1,0.5-0.1,0.9-0.1,1.4v68.2
 c0,14.1,11.5,25.6,25.6,25.6S80,246.2,80,232.1c0-79.3,60.8-110.4,63.4-111.7c2.1-1,3.6-2.8,4.3-5l28.6-85.8l7.4,11.1
 c1.6,2.4,4.2,3.8,7.1,3.8h13.5L224,64.3l-6.6,26.2l-22.8,15.2c-3.1,2.1-4.5,6-3.4,9.6c0.3,1,7.1,24.5-7.9,53.2c-0.6,1.2-1,2.6-1,4
 v59.7c0,2.8,1.4,5.5,3.8,7.1l25.6,17c1.5,1,3.1,1.4,4.7,1.4c2.8,0,5.5-1.3,7.1-3.8c2.6-3.9,1.6-9.2-2.4-11.8l-21.8-14.5v-53
 c8.5-25.2,11.3-47.4,9.6-57.9l20.7-13.8c1.8-1.2,3-3,3.5-5l8.5-34.1C242.5,60.8,241.6,57.8,239.5,55.6z"/>
<path d="M156.6,170.6c-1-4.6-5.6-7.4-10.2-6.5c-4.6,1-7.5,5.6-6.5,10.2l12.8,57.8H97.1c-4.7,0-8.5,3.8-8.5,8.5
 c0,4.7,3.8,8.5,8.5,8.5h59.5l0.4,1.8c0.9,4,4.4,6.7,8.3,6.7c0.6,0,1.2-0.1,1.9-0.2c4.6-1,7.5-5.6,6.5-10.2L156.6,170.6z"/>
</svg>
`;
allJobs.forEach(function (job) {
  job.insertAdjacentHTML('afterbegin', svgIconJob);
});

const jobIcons = document.querySelectorAll('.job-icon>path');
jobIcons.forEach(function (jobIcon) {
  jobIcon.setAttribute('fill', '#6e7d16');
});

//Insert bootcamp icons and color them
const finbootElement = document.querySelector('.finboot');
finbootElement.insertAdjacentHTML('afterbegin', svgIconJob);
finbootElement.querySelector('.job-icon').setAttribute('fill', delTurquoise);

const scbootElement = document.querySelector('.scboot');
scbootElement.insertAdjacentHTML('afterbegin', svgIconJob);
scbootElement.querySelector('.job-icon').setAttribute('fill', delLightGreen);

//Hover effect on apply buttons
const btnsApply = document.querySelectorAll('.btn__apply');
btnsApply.forEach(function (btn) {
  btn.addEventListener('mouseenter', function (e) {
    const getParentBGColor = window.getComputedStyle(this.closest('.section-4__job')).getPropertyValue('background-color');
    this.style.backgroundColor = getParentBGColor;
    this.classList.add('btn--active');
  });
  btn.addEventListener('mouseleave', function (e) {
    this.style.removeProperty('background-color');
    this.classList.remove('btn--active');
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
  scrollToTarget(section4, 150);
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

    if(!sec.classList.contains('section--hidden')) visibleSections++;

    if(visibleSections === allSections.length) clearInterval(checkSectionInView);
  });
}, 2000);

//Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]')
const loadImg = function(entries,observer){
const [entry] = entries;
console.log(entry);
if(!entry.isIntersecting) return;
entry.target.src = entry.target.dataset.src;
entry.target.addEventListener('load', function(){
  entry.target.classList.remove('lazy-img')
})

observer.unobserve(entry.target)
}
const imgObserver = new IntersectionObserver(loadImg,{
  root:null,
  threshold:0
})
imgTargets.forEach((img)=>imgObserver.observe(img))