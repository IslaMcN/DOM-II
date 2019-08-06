// Your code goes here
//1
const logo = document.querySelector('.logo-heading')
logo.addEventListener("mouseover", function( event ) {   
    event.target.style.color = "#ff9f43"});

    
let button = document.querySelector('.btn');



//2
button.onclick = function() {
  button.style.backgroundColor = '#0abde3';
};
//3
button.onauxclick = function(e) {
  e.preventDefault();
  button.style.color = '#ff6b6b';
}
//4
button.oncontextmenu = function(e) {
  e.preventDefault();
}


//5
logo.addEventListener('dblclick', function() {
    logo.style.color = '#f368e0'
});
//6
button.addEventListener('mouseenter', e => {
    button.style.border = '5px dotted #54a0ff';
    
   
  });
 //7 
  button.addEventListener('mouseleave', e => {
    button.style.border = '1px solid #341f97';
   
  });

const height = document.querySelector('#height');
const width = document.querySelector('#width');
//8
function reportWindowSize() {
  height.textContent = window.innerHeight;
  width.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;
const image = document.querySelector('img')
image.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';    
  });
  
  image.addEventListener('blur', (event) => {
    event.target.style.background = '';    
  });
//9
  window.addEventListener('beforeprint', (event) => {
    console.log('Before print');
  });

//10
window.addEventListener('languagechange', function() {
    console.log('languagechange event detected!'); 
  });

