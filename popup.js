'use strict';

document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, {
            code: "let wr=document.querySelector('.wrapper-3AzfF');wr.parentNode.removeChild(wr);let body=document.getElementsByTagName('body')[0];body.style.overflow=\"scroll\";let ol=document.querySelector('.overlay-34_Kj');ol.parentNode.removeChild(ol);"
        });
    });
});
