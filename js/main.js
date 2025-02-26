const topNav = document.querySelector('.top-nav');

const enlacesTopNav = document.querySelectorAll('.menu-top li a');

const svgSearch = document.querySelector('.search-icon svg');

window.addEventListener('scroll', function() {
  if(window.scrollY > 0){
  
  topNav.classList.add('negro');

  for(i=0; i<enlacesTopNav.length; i++){
    enlacesTopNav[i].classList.add('negro');
  }
  svgSearch.classList.add('negro');
}

if(window.scrollY == 0){
  
  topNav.classList.remove('negro');

  for(i=0; i<enlacesTopNav.length; i++){
    enlacesTopNav[i].classList.remove('negro');
  }
  svgSearch.classList.remove('negro');
}
 })
