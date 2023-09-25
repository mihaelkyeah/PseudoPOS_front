'use strict';

let navButtons = document.querySelectorAll('.nav-ul-li');
Array.prototype.forEach.call(navButtons, (navButton) => {
    navButton.addEventListener('click', () => {
        window.location = navButton.getAttribute('href');
    });
});