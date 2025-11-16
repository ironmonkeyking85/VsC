const logoText = document.querySelector('.logo p');

// Logo hover effect
logoText.addEventListener('mouseover', function() {
    this.style.color = 'white'; 
});
logoText.addEventListener('mouseout', function() {
    this.style.color = '#95dee3'; 
});


// ----- Mobile Menu -----

document.getElementById('menu-toggle').addEventListener('click', function() {
  var menu = document.querySelector('.mobile-menu .links-container');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block'; 
});


