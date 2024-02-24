document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navigasi");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      // Atur nilai scroll sesuai kebutuhan
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const textElement = document.getElementById("typing-text");
//   const texts = ["GEOSPHERE"];
//   let textIndex = 0;
//   let charIndex = 0;

//   function type() {
//     if (charIndex < texts[textIndex].length) {
//       textElement.textContent += texts[textIndex].charAt(charIndex);
//       charIndex++;
//       setTimeout(type, 100); 
//     } else {
//       setTimeout(erase, 3000); 
//     }
//   }

//   function erase() {
//     if (charIndex > 0) {
//       textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
//       charIndex--;
//       setTimeout(erase, 100);
//     } else {
//       textIndex = (textIndex + 1) % texts.length;
//       setTimeout(type, 50);
//     }
//   }

//   type();
// });

document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector(".burger-button");
  const navbarList = document.querySelector(".nav-list");

  burgerButton.addEventListener("click", function () {
    navbarList.classList.toggle("show");
  });

  // Hide navbar-list when scrolling
  window.addEventListener("scroll", function () {
    navbarList.classList.remove("show");
  });
});

