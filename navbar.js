document.addEventListener("DOMContentLoaded", function () {
  // Navbar content
  const navbarHTML = `
      <nav>
        <div class="logo-container">
          <a href="/"><img width="50px" src="img/Logo.png" alt="Logo"></a>
        </div>
        <menu class="navbar-menu">
          <li><a href="/">Home</a></li>
          <li><a href="programming.html">Up next</a></li>
          <li><a href="about-us.html">About us</a></li>
          <li><a href="contact.html">Contact</a></li>
        </menu>
        <a id="navbarToggle" class="navbar-toggle">Menu</a>
      </nav>
    `;

  // Insert the navbar into the body
  document.body.insertAdjacentHTML('afterbegin', navbarHTML);

  // Toggle menu display on click
  document.getElementById('navbarToggle').addEventListener('click', function () {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('open');
  });

  // Get current page path
  const currentPageUrl = window.location.pathname.split('/').pop() || 'index.html';

  // Select all navigation links
  const navLinks = document.querySelectorAll('nav menu li a');

  // Loop through all links to find the one that matches the current URL
  navLinks.forEach(link => {
    // Check if the link's href matches the current page URL
    // Considering the possibility of 'index.html' for the root
    const linkHref = link.getAttribute('href') === '/' ? 'index.html' : link.getAttribute('href');

    if (linkHref === currentPageUrl) {
      // Add the 'active' class to the matching link
      link.classList.add('active');
    }
  });
});