'use strict';

// ========== THEME SUPPORT!!! ==========
// Set default theme or keep chosen theme if storage item is set

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

// ========== NAV ==========

// Force non-anchors to work like anchors
document.querySelectorAll('.nav-ul-li')
    .forEach(navButton => {
        navButton.addEventListener('click', () => {
            window.location = navButton.getAttribute('href');
        });
    });

// ========== MODALS ==========

function showModal(modalName) {
    document.querySelector('.modals')?.removeAttribute('hidden');
    document.querySelector('#'+modalName)?.removeAttribute('hidden');
}
function dismissModal(modalName) {
    document.querySelector('#'+modalName)?.setAttribute('hidden', true);
    document.querySelector('.modals')?.setAttribute('hidden', true);
}

// ========== BUTTONS ==========

function enableButton(button) {
    document.querySelector('#'+button)?.removeAttribute('disabled')
}
function disableButton(button) {
    document.querySelector('#'+button)?.setAttribute('disabled', true)
}

// ========== UTILITIES ==========

// Get a random integer
function randomInt(rangeInt, startInt = 0) {
    return startInt + Math.floor(Math.random() * rangeInt);
}
