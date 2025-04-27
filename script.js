let number1 = document.querySelector(".number1")
let number2 = document.querySelector(".number2")
let number3 = document.querySelector(".number3")
let number4 = document.querySelector(".number4")
let number5 = document.querySelector(".number5")
let number6 = document.querySelector(".number6")
let number7 = document.querySelector(".number7")
let number8 = document.querySelector(".number8")
let number9 = document.querySelector(".number9")
let number0 = document.querySelector(".number0")
let numberDel = document.querySelector(".numberdel")
let numberReset = document.querySelector(".numberreset")
let numberEqual = document.querySelector(".numberequal")
let numberPlus = document.querySelector(".numberplus")
let numberMinus = document.querySelector(".numberminus")
let numberMultiplication = document.querySelector(".numbermultiplication")
let numberDivision = document.querySelector(".numberdivision")
let numberComma = document.querySelector(".numbercomma")

let placeForResult = document.getElementById("result-number")

let roller = document.getElementById("oneInput")

// roller.addEventListener("input", function(event){
//     console.log(event.target.value)
// })

let allNumbers = [number1, number2, number3, number4, number5, number6, number7, number8, number9, number0]

let finalNumber = ""
let countingNumber = ""


function functionCountingNumbers(theNumber){
    if(clickedEqual === true){
        finalNumber = ""
    }
    clickedEqual = false
    if(clickedPlus || clickedMinus || clickedDivision || clickedMultiplication){
        countingNumber = (countingNumber + "" + theNumber)
        placeForResult.textContent = countingNumber
    } else {
        finalNumber = (finalNumber + "" + theNumber)
        placeForResult.textContent = finalNumber
    }
}

allNumbers.forEach(function(oneNumber, index){
    oneNumber.addEventListener("click", function(event){
        functionCountingNumbers(index + 1)
    })
})


numberDel.addEventListener("click", function(event){
    finalNumber = (finalNumber.slice(0, -1))
    console.log(finalNumber)
})

let clickedPlus = false
numberPlus.addEventListener("click", function(event){
    clickedPlus = true
})

let clickedMinus = false
numberMinus.addEventListener("click", function(event){
    clickedMinus = true
})

let clickedDivision = false
numberDivision.addEventListener("click", function(event){
    clickedDivision = true
})

let clickedMultiplication = false
numberMultiplication.addEventListener("click", function(event){
    clickedMultiplication = true
})

numberReset.addEventListener("click", function(event){
    finalNumber = "0"
    //console.log(finalNumber)
})

let clickedComma = false
numberComma.addEventListener("click", function(event){
    clickedComma = true
    finalNumber = `${finalNumber},`
    placeForResult.textContent = finalNumber
})

let clickedEqual = false
numberEqual.addEventListener("click", function(event){
    clickedEqual = true
    countingNumber = Number(countingNumber)
    finalNumber = Number(finalNumber)
    if(clickedPlus){
        finalNumber = finalNumber + countingNumber
        clickedPlus = false
    }
    if(clickedMinus){
        finalNumber = finalNumber - countingNumber
        clickedMinus = false
    }
    if(clickedDivision){
        finalNumber = finalNumber / countingNumber
        clickedDivision = false
    }
    if(clickedMultiplication){
        finalNumber = finalNumber * countingNumber
        clickedMultiplication = false
    }

    placeForResult.textContent = finalNumber
    console.log(finalNumber)
})

