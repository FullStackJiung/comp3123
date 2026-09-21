/*
COMP 3123 – Full Stack Development I – Lab 2 
*/


// Ex 1

const greeter = (myArray, counter) => {

    const greetText = "Hello"

    for (const name of myArray) {
        console.log(`${greetText} ${name}`)
    }
}

greeter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3)



// Ex2

const capitalize = (word) => {

    const [firstLetter, ...rest] = word

    const newWord = [
        firstLetter.toUpperCase(),
        ...rest
    ]

    return newWord.join("")
}

console.log(capitalize("fooBar"))
console.log(capitalize("nodeJs"))



// Ex 3

const colors = ["red", "green", "blue"]

const capitalizedColors = colors.map((color) => {

    return capitalize(color)
})

console.log(capitalizedColors)



// Ex 4

const values = [1, 60, 34, 30, 20, 5]

const filterLessThan20 = values.filter((value) => {

    return value < 20
})

console.log(filterLessThan20)



// Ex 5

const array = [1, 2, 3, 4]

const calculateSum = array.reduce((total, number) => {

    return total + number
}, 0)


const calculateProduct = array.reduce((total, number) => {

    return total * number
}, 1)


console.log(calculateSum)
console.log(calculateProduct)



// Ex 6

class Car {

    constructor(model, year) {
        this.model = model
        this.year = year
    }
}


class Sedan extends Car {

    constructor(model, year, balance) {

        super(model, year)

        this.balance = balance
    }
}


const mySedan = new Sedan("Acura RDX", 2014, 13000)

console.log(mySedan)