'use strict';

// ========== THEME SUPPORT!!! ==========
// Set default theme or keep chosen theme if storage item is set

try
{
    function setTheme(theme) {
        document.getElementById('site-theme')
            .setAttribute('href', `css/themes/${theme}`);

        localStorage.setItem("websiteTheme", theme);
    }

    // Add event listener to theme picker to change themes on the fly
    const themePicker = document.getElementById('theme-select');

    themePicker.addEventListener('change', event => {
        setTheme(event.target.value)
    });

    // Set theme depending on if the storage item "websiteTheme" is set
    const theme = localStorage.getItem("websiteTheme") || 'default.css';
    themePicker.value = theme;
    setTheme(theme);
} catch(e) { console.log(e) }

// ========== NAV ==========

// Force non-anchors to work like anchors
let navButtons = document.querySelectorAll('.nav-ul-li');
Array.prototype.forEach.call(navButtons, (navButton) => {
    navButton.addEventListener('click', () => {
        window.location = navButton.getAttribute('href');
    });
});

// ========== MODALS ==========

function showModal(modalName) {
    try {
        document.querySelector('.modals').removeAttribute('hidden');
        document.querySelector('#'+modalName).removeAttribute('hidden');
    } catch(e) { console.log(e); }
}
function dismissModal(modalName) {
    try {
        document.querySelector('#'+modalName).setAttribute('hidden', true);
        document.querySelector('.modals').setAttribute('hidden', true);
    } catch(e) { console.log(e); }
}

// ========== BUTTONS ==========

function enableButton(button) {
    try { document.querySelector('#'+button).removeAttribute('disabled')
    } catch(e) { console.log(e); }
}
function disableButton(button) {
    try { document.querySelector('#'+button).setAttribute('disabled', true)
    } catch(e) { console.log(e); }
}

// ========== UTILITIES ==========

// Get a random integer
function randomInt(rangeInt, startInt = 0) {
    return startInt + Math.floor(Math.random() * rangeInt);
}
