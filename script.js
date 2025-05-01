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

let background = document.body
let resultBackground = document.querySelector(".second-stage")
let equalBackground = document.querySelector(".numberequal")
let calcBackground = document.querySelector(".third-stage")
let numberBackground = document.querySelectorAll(".one-button")

let colooringFields = [
    background,
    resultBackground,
    equalBackground,
    calcBackground,
    ...numberBackground,
    numberDel,
    numberReset
]

let firstColooringClasses = [
    "first-background-color",
    "first-result-color",
    "first-equal-color",
    "first-calc-color",
    "first-number-color",
    "first-number-color",
    "first-number-color",
    "first-background-color",
    "first-number-color", 
    "first-number-color", 
    "first-number-color", 
    "first-number-color", 
    "first-number-color", 
    "first-number-color", 
    "first-number-color", 
    "first-number-color", 
    "first-number-color", 
    "first-number-color", 
    "first-number-color", 
    "first-number-color", 
    "first-background-color"
]
let secondColooringClasses = [
    "second-background-color",
    "second-result-color",
    "second-equal-color",
    "second-calc-color",
    "second-number-color",
    "second-number-color",
    "second-number-color",
    "second-background-color",
    "second-number-color",
    "second-number-color",
    "second-number-color",
    "second-number-color",
    "second-number-color",
    "second-number-color",
    "second-number-color",
    "second-number-color",
    "second-number-color",
    "second-number-color",
    "second-number-color",
    "second-number-color",
    "second-background-color"
]
let thirdColooringClasses = [
    "third-background-color",
    "third-result-color",
    "third-equal-color",
    "third-calc-color",
    "third-number-color",
    "third-number-color",
    "third-number-color",
    "third-background-color",
    "third-number-color",
    "third-number-color",
    "third-number-color",
    "third-number-color",
    "third-number-color",
    "third-number-color",
    "third-number-color",
    "third-number-color",
    "third-number-color",
    "third-number-color",
    "third-number-color",
    "third-number-color",
    "third-background-color"
]

function removeColooringClasses(typeOfClass){
    colooringFields.forEach((oneField, i) => oneField.classList.remove(typeOfClass[i]))
}

function addColooringClasses(typeOfClass){
    colooringFields.forEach((oneField, i) => oneField.classList.add(typeOfClass[i]))
}

document.body.setAttribute("data-theme", "theme1")
addColooringClasses(firstColooringClasses)
roller.addEventListener("input", function(event){
    if(event.target.value === "1"){
        removeColooringClasses(secondColooringClasses)
        removeColooringClasses(thirdColooringClasses)
        addColooringClasses(firstColooringClasses)
        document.body.setAttribute("data-theme", "theme1")
    } else if(event.target.value === "2"){
        removeColooringClasses(firstColooringClasses)
        removeColooringClasses(thirdColooringClasses)
        addColooringClasses(secondColooringClasses)
        document.body.setAttribute("data-theme", "theme2")
    } else {
        removeColooringClasses(secondColooringClasses)
        removeColooringClasses(firstColooringClasses)
        addColooringClasses(thirdColooringClasses)
        document.body.setAttribute("data-theme", "theme3")
    }
})

let allNumbers = [number0, number1, number2, number3, number4, number5, number6, number7, number8, number9]
let allOperations = [numberPlus, numberMinus, numberDivision, numberMultiplication]

let finalNumber = ""
let countingNumber = ""

let clickedPlus = false
let clickedMinus = false
let clickedDivision = false
let clickedMultiplication = false

function functionCountingNumbers(theNumber){
    if(clickedEqual === true){
        finalNumber = ""
        countingNumber = ""
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
        functionCountingNumbers(index)
    })
})

allOperations.forEach(function(oneOperation){
    oneOperation.addEventListener("click", function(event){
        if(oneOperation === numberPlus){
            clickedPlus = true
        } else if (oneOperation === numberMinus){
            clickedMinus = true
        } else if (oneOperation === numberDivision){
            clickedDivision = true
        } else if(oneOperation === numberMultiplication){
            clickedMultiplication = true
        }
    })
})

numberReset.addEventListener("click", function(event){
    finalNumber = ""
    countingNumber = ""
    placeForResult.textContent = "0"
})

numberDel.addEventListener("click", function(event){
    if(placeForResult !== ""){
        if(clickedPlus || clickedMinus || clickedDivision || clickedMultiplication){
            countingNumber = (countingNumber.slice(0, -1))
            placeForResult.textContent = countingNumber
        } else {
            finalNumber = (finalNumber.slice(0, -1))
            placeForResult.textContent = finalNumber
        }
    }
})

let clickedComma = false
numberComma.addEventListener("click", function(event){
    clickedComma = true
    if(clickedPlus || clickedMinus || clickedDivision || clickedMultiplication){
        if(!countingNumber.includes(".")){
            countingNumber += "."
            placeForResult.textContent = countingNumber
        }
    } else {
        if(!finalNumber.includes(".")){
            finalNumber += "."
            placeForResult.textContent = finalNumber
        }
    }
})

let clickedEqual = false
numberEqual.addEventListener("click", function(event){
    clickedEqual = true
    
    countingNumber = parseFloat(countingNumber)
    finalNumber = parseFloat(finalNumber)
    
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
    finalNumber = finalNumber.toFixed(3)
    placeForResult.textContent = finalNumber
    //console.log(finalNumber)
})