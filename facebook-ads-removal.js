// ==UserScript==
// @name         Hide Facebook Ads
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Facebook ad removal done easily!
// @author       You
// @match        https://www.facebook.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=facebook.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const sponsorLabelText = "Publicidad"
    window.onscroll = function() {
    console.log("Removing ads..");
    document.querySelectorAll("use").forEach(element => {
        const link = element.getAttribute("xlink:href").substring(1)
        if (document.querySelector(`text[id=${link}]`).innerHTML === sponsorLabelText) {
            const ad = element.closest('div > div:not([class]) > div[class] > div:not([class]) > div[class]');
            ad.style.borderStyle = 'solid'
            ad.style.borderColor = 'red'
            ad.style.display = 'none'
        }
    })
    }
})();
