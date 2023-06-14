"use strict";
//1.
const names = ["Anna", "Bea", "Cindy", "Daniela", "Emilia", "Felicitas", "Gudrun"];
const resultElement = document.getElementById("result");
names.forEach((name, index) => {
    resultElement.innerHTML +=
        `
    ${index}<br>
    `;
});
//2.
names.forEach((name, index) => {
    resultElement.innerHTML +=
        `
    ${name} <br>
    `;
});
//3.
names.forEach((name, index) => {
    resultElement.innerHTML +=
        `
    ${index} ${name}<br>
    `;
});
