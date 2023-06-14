"use strict";
//1.
const myName = {
    firstName: "Lena",
    lastName: "Mares"
};
const resultElement = document.getElementById("result");
resultElement.innerHTML = `
${myName.firstName} ${myName.lastName}
`;
//2.
const myNameTen = [
    {
        firstName: "Lena",
        lastName: "Mares"
    }
];
const repeatedNames = Array(10).fill(myNameTen[0]);
const example2Element = document.getElementById("example2");
repeatedNames.forEach((entry) => {
    example2Element.innerHTML +=
        `
    ${entry.firstName} <br>
    `;
});
//3.
const timeOut = () => {
    for (let i = 1; i < 11; i++) {
        setTimeout(() => {
            console.log(`${myName.lastName}`);
        }, 5000);
    }
};
timeOut();
