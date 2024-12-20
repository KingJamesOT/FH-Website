// Function to check screen width and remove "reverse" class from all matching elements
  function handleResize() {
    const elements = document.querySelectorAll(".content-item.reverse"); // Select all elements with the class "content-item reverse"
    elements.forEach((element) => {
      if (window.innerWidth <= 1700) {
        element.classList.remove("reverse");
      } else {
        element.classList.add("reverse"); // Optionally re-add the class if the width increases again
      }
    });
  }

  // Add the event listener for window resize
  window.addEventListener("resize", handleResize);

  // Run on initial load to ensure it applies immediately
  handleResize();




        function toggleMenu() {
            const menu = document.querySelector('.links');
            menu.classList.toggle('active');
        }

        // Get the navbar element
const navbar = document.querySelector('.navbar');

    // Listen for scroll events on the window
    window.addEventListener('scroll', function() {
        if (window.scrollY > 75) { // If scrolled more than 50px
            navbar.classList.add('scrolled'); // Add 'scrolled' class to navbar
        } else {
            navbar.classList.remove('scrolled'); // Remove 'scrolled' class if less than 50px
        }
    });


    

    // Add "loaded" class to the body after the page fully loads
    window.addEventListener("load", () => {
      document.body.classList.add("loaded");
    });

 document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in-right, .fade-in-left');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        // Add 'visible' if the element is in the viewport
        if (elementTop < windowHeight * 0.9 && elementBottom > windowHeight * 0.1) {
            element.classList.add('visible');
        } else {
            // Remove 'visible' if the element scrolls out of the viewport
            element.classList.remove('visible');
        }
    });
    });