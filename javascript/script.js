fetch("../components/menu.html")
  .then((output) => output.text())
  .then((menuHtml) => {
    const menuContainers = document.getElementsByClassName("menu-container");

    for (container of menuContainers) {
      container.innerHTML = menuHtml;
    }
});

fetch("../components/footer.html")
  .then((output) => output.text())
  .then((footerHtml) => {
    const footerContainers = document.getElementsByClassName("footer-container");

    for (container of footerContainers) {
      container.innerHTML = footerHtml;
    }
});

// Hamburger Menu
function toggleHam(x) {
  x.classList.toggle("change");

  let navMenu = document.getElementById('navMenu');
  if (navMenu.className === 'menu') {
      navMenu.className += ' menu-active'
  } else {
      navMenu.className = 'menu';
  }
}
