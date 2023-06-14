const numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7 , 8, 9, 10]
let x: any = 0
const resultElement = document.getElementById("result") as HTMLElement


for (let number of  numbers) {
    for (let i = 1; i < 11; i++) {
        x = `${i} X ${number} = ${number*i}`
        resultElement.innerHTML += `
        ${x}<br>
        `
    }
    resultElement.innerHTML += `<hr>`
}

