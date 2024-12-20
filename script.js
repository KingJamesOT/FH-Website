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
    const elements = document.querySelectorAll('.fade-in-right, .fade-in-left, .fade-in-up');
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


const accordionButtons = document.querySelectorAll('.accordion-button');

// Add an event listener to each button
accordionButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Get the associated accordion content
    const content = this.nextElementSibling;

    // Check if the content is already expanded
    if (content.style.maxHeight) {
      // If it's already expanded, collapse it
      content.style.maxHeight = null;
    } else {
      // If it's collapsed, expand it by setting maxHeight to the scrollHeight
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});