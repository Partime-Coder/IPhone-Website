// const lowerNav = document.querySelector('.lower-nav');

// let isDown = false;
// let startX;
// let scrollLeft;

// lowerNav.addEventListener('mousedown', (e) => {
//   isDown = true;
//   startX = e.pageX - lowerNav.offsetLeft;
//   scrollLeft = lowerNav.scrollLeft;
// });

// lowerNav.addEventListener('mouseleave', () => isDown = false);
// lowerNav.addEventListener('mouseup', () => isDown = false);

// lowerNav.addEventListener('mousemove', (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - lowerNav.offsetLeft;
//   const walk = (x - startX) * 1.5; // speed factor
//   lowerNav.scrollLeft = scrollLeft - walk;
// });
