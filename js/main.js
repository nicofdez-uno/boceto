const searchBox = document.getElementById('searchbox');

const lupa = document.querySelector('svg#search');

const hamburguesa = document.querySelector('.icon #hamburguesa');

const menuOculto =  document.querySelector('.slideout-menu');

lupa.addEventListener('click', function(){

 if(getComputedStyle(searchBox).display == 'none'){
  searchBox.style.display = 'block';
 }else{
  searchBox.style.display = 'none'
 }

});

hamburguesa.addEventListener('click', function(){
  if(getComputedStyle(menuOculto).display == 'none'){
    menuOculto.style.display = 'block';
    menuOculto.style.pointerEvents = 'auto';
   }else{
    menuOculto.style.display = 'none';
    menuOculto.style.pointerEvents = 'none';
   }
});