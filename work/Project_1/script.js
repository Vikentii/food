"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('end');
    });
});

const script = document.createElement('script');
script.src = "./test.js";
script.async = false;
document.body.append(script);