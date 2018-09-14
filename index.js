let burgerButton = document.querySelector('.animated-burger');
let sidebar = document.querySelector('.sidebar');

burgerButton.addEventListener('click', el => {
  if(burgerButton.classList.contains('burger-close')) {
    burgerButton.classList.remove('burger-close');
  } else {
    burgerButton.classList.add('burger-close');
  }

  if(sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
  } else {
    sidebar.classList.add('open');
  }
});
