'use strict';

let navButtons = document.querySelectorAll('.nav-ul-li');
Array.prototype.forEach.call(navButtons, (navButton) => {
    navButton.addEventListener('click', () => {
        window.location = navButton.getAttribute('href');
    });
});

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
function enableButton(button) {
    try { document.querySelector('#'+button).removeAttribute('disabled')
    } catch(e) { console.log(e); }
}
function disableButton(button) {
    try { document.querySelector('#'+button).setAttribute('disabled', true)
    } catch(e) { console.log(e); }
}

function randomInt(rangeInt, startInt = 0) {
    return startInt + Math.floor(Math.random() * rangeInt);
}