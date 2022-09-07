const home = document.getElementById('home');
const red = document.getElementById('red');
const orange = document.getElementById('orange');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const purple = document.getElementById('purple');

const para = document.querySelector('#para');
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector(".body");

// open menu on hover

hamburger.addEventListener('mouseover', function() {
  navMenu.classList.add('active');
})

// close menu when mouse leaves hamburger

hamburger.addEventListener('mouseout', function() {
  navMenu.classList.remove('active');
})

// keep menu open menu on hovering menu from hamburger

navMenu.addEventListener('mouseover', function () {
  navMenu.classList.add('active');
})

// close menu on clicking on menu

navMenu.addEventListener('click', function () {
  navMenu.classList.remove('active');
})

// close menu on hovering out of menu

navMenu.addEventListener('mouseout', function () {
  navMenu.classList.remove('active');
})

// change background color + see picked color described 

home.addEventListener('click', function() {
    document.body.style.background = 'lightgray';
    para.innerHTML = 'Lightgray';
});

red.addEventListener('click', function() {
    document.body.style.background = 'red';
    para.innerHTML = 'Red';
});

orange.addEventListener('click', function() {
    document.body.style.background = 'orange';
    para.innerHTML = 'Orange';
});

yellow.addEventListener('click', function() {
    document.body.style.background = 'yellow';
    para.innerHTML = 'Yellow';
});

green.addEventListener('click', function() {
    document.body.style.background = 'green';
    para.innerHTML = 'Green';
});

blue.addEventListener('click', function() {
    document.body.style.background = 'blue';
    para.innerHTML = 'Blue';
});

purple.addEventListener('click', function() {
    document.body.style.background = 'purple';
    para.innerHTML = 'Purple';
});

// change color with keyboard + see picked color described

window.addEventListener('keydown', event => {
    switch (event.keyCode) {
        case 49:
         setBackgroundColor('lightgray');
         para.innerHTML = 'Lightgray';
          break;
        case 50:
          setBackgroundColor('red');
          para.innerHTML = 'Red';
          break;
        case 51:
          setBackgroundColor('orange');
          para.innerHTML = 'Orange';
          break;
        case 52:
          setBackgroundColor('yellow');
          para.innerHTML = 'Yellow';
          break;
        case 53:
          setBackgroundColor('green');
          para.innerHTML = 'Green';
          break;
        case 54:
          setBackgroundColor('blue');
          para.innerHTML = 'Blue';
          break;
        case 55:
          setBackgroundColor('purple');
          para.innerHTML = 'Purple';
          break;
    }
  });

  function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}