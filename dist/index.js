let burgerButton = document.querySelector('.animated-burger');
let sidebar = document.querySelector('.sidebar');
let content = document.querySelector('.content');

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

  if(content.classList.contains('sidebar-open')) {
    content.classList.remove('sidebar-open');
  } else {
    content.classList.add('sidebar-open');
  }
});
