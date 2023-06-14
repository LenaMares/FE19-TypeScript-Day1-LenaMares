//1.

const myName: { firstName: string, lastName: string } = {
    firstName: "Lena",
    lastName: "Mares"
}

const resultElement = document.getElementById("result") as HTMLElement

resultElement.innerHTML = `
${myName.firstName} ${myName.lastName}
`

//2.

const myNameTen: { firstName: string, lastName: string } [] = [
    {
        firstName: "Lena",
        lastName: "Mares"
    }
]

const repeatedNames: Array<any> = Array(10).fill(myNameTen[0])
const example2Element = document.getElementById("example2") as HTMLElement

repeatedNames.forEach((entry) => {
    example2Element.innerHTML +=
    `
    ${entry.firstName} <br>
    `
})


//3.

const timeOut = () => {
    for (let i = 1; i < 11; i++) {
        setTimeout(() => { 
            console.log(`${myName.lastName}`); 
         }, 5000);
    }
}

timeOut()