const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
  const randomLeft = Math.floor(Math.random() * window.innerWidth);
  const randomTop = Math.floor(Math.random() * window.innerHeight);
  const randomScale = Math.random() * 2 + 0.5;
  const randomDuration = Math.random() * 20 + 10;

  circle.style.left = `${randomLeft}px`;
  circle.style.top = `${randomTop}px`;
  circle.style.transform = `scale(${randomScale})`;
  circle.style.animationDuration = `${randomDuration}s`;
});
const cursorContainer = document.querySelector('.cursor-effect');

// Create main dot______for curser
const mainDot = document.createElement('div');
mainDot.classList.add('dot');
cursorContainer.appendChild(mainDot);

document.addEventListener('mousemove', (e) => {
  const { clientX: x, clientY: y } = e;

  // Move main dot
  mainDot.style.left = `${x}px`;
  mainDot.style.top = `${y}px`;

  // Create trail
  const trail = document.createElement('div');
  trail.classList.add('trail');
  trail.style.left = `${x}px`;
  trail.style.top = `${y}px`;
  cursorContainer.appendChild(trail);

  // Remove trail after animation
  setTimeout(() => {
    trail.remove();
  }, 600);
});
// curser ses
//dark mode and light mode
//loading
  function openMailClient() {
    const name = document.getElementById("user-name").value;
    const email = document.getElementById("user-email").value;
    const message = document.getElementById("user-message").value;

    const mailtoLink = `mailto:bmitusha@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;

    window.location.href = mailtoLink;
    return false; // Prevent actual form submission
  }
  window.addEventListener('load', () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, 0);
  });