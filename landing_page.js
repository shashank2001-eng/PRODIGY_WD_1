const navigation = document.getElementById('navigation');
const sections = document.querySelectorAll('.section');

function handleScroll() {
  if (window.scrollY > 50) {
    navigation.classList.add('scrolled');
  } else {
    navigation.classList.remove('scrolled');
  }
}

function handleMenuHover(event) {
  if (event.target.tagName === 'A') {
    event.target.classList.toggle('hovered');
  }
}

window.addEventListener('scroll', handleScroll);
navigation.addEventListener('mouseover', handleMenuHover);
navigation.addEventListener('mouseout', handleMenuHover);
