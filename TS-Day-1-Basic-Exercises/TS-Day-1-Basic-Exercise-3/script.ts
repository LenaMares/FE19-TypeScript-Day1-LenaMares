//1.

const names: Array<string> = ["Anna", "Bea", "Cindy", "Daniela", "Emilia", "Felicitas", "Gudrun"]

const resultElement = document.getElementById("result") as HTMLElement

names.forEach((name, index) => {
    resultElement.innerHTML += 
    `
    ${index}<br>
    `
})

//2.

names.forEach((name, index) => {
    resultElement.innerHTML += 
    `
    ${name} <br>
    `
})

//3.

names.forEach((name, index) => {
    resultElement.innerHTML += 
    `
    ${index} ${name}<br>
    `
})