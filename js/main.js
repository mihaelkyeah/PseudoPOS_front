'use strict';

// ========== THEME SUPPORT!!! ==========
// Set default theme or keep chosen theme if cookie is set

    try
    {
        // Add event listener to theme picker to change themes on the fly
        let themePicker = document.querySelector('#theme-select');
        themePicker.addEventListener('change', () => {
            document.querySelector('#site-theme').setAttribute('href', 'css/themes/'+themePicker.value);
            document.cookie = "websiteTheme="+themePicker.value;
        });

        // Set theme depending on if the cookie "websiteTheme" is set
        let theme = getCookie("websiteTheme");
        if(theme !== null) {
            themePicker.value = theme;
            document.querySelector('#site-theme').setAttribute('href', 'css/themes/'+theme);
        } else {
            document.querySelector('#site-theme').setAttribute('href', 'css/themes/default.css');
        }
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

    // Copy-pasted from w3schools.com: https://www.w3schools.com/js/js_cookies.asp
    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
        }
        return null;
    }