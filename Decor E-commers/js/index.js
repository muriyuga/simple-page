function menu() {
  const navItem = document.querySelector('.nav-item');
  navItem.classList.toggle('active');  
};

document.addEventListener('click', function(event) {
  const hamberger = document.querySelector('#humberger-menu');
  const navItems = document.querySelector('.nav-item');
  if(!hamberger.contains(event.target) && !navItems.contains(event.target)) {
    navItems.classList.remove('active');
  };
});