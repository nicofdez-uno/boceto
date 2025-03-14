const searchBox = document.querySelector('.searchbox');

const lupa = document.querySelector('.menu-top .icon');

// const hamburguesa = document.querySelector('.icon #hamburguesa');

// const menuOculto =  document.querySelector('.slideout-menu');

lupa.addEventListener('click', function(){
  console.log('hola')
  searchBox.classList.toggle('searchbox--show');
 

});

// hamburguesa.addEventListener('click', function(){
//   if(getComputedStyle(menuOculto).display == 'none'){
//     menuOculto.style.display = 'block';
//     menuOculto.style.pointerEvents = 'auto';
//    }else{
//     menuOculto.style.display = 'none';
//     menuOculto.style.pointerEvents = 'none';
//    }
// });


/*-----------menu Dorian-------------*/

const toggleMenuElement = document.querySelector('.top-nav .icon');
const hiddenMenuElement = document.getElementById('hidden-menu');

toggleMenuElement.addEventListener('click', () => {
  console.log('hola')
  hiddenMenuElement.classList.toggle('hidden-menu--show');
})