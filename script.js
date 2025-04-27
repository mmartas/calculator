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

let finalNumber = ""

number1.addEventListener("click", function(event){
    //console.log(finalNumber)
    if(clickedPlus){
        finalNumber += 1
        clickedPlus = false
    } else if(clickedMinus){
        finalNumber -= 1
        clickedMinus = false
    } else if(clickedDivision){
        finalNumber /= 1
        clickedDivision = false
    } else if(clickedMultiplication){
        finalNumber *= 1
        clickedMultiplication = false
    } else {
        finalNumber = (finalNumber + "" + 1)
    }
    console.log(finalNumber)
})

number2.addEventListener("click", function(event){
    //console.log(finalNumber)
    if(clickedPlus){
        finalNumber += 2
        clickedPlus = false
    } else if(clickedMinus){
        finalNumber -= 2
        clickedMinus = false
    } else if(clickedDivision){
        finalNumber /= 2
        clickedDivision = false
    } else if(clickedMultiplication){
        finalNumber *= 2
        clickedMultiplication = false
    } else {
        finalNumber = (finalNumber + "" + 2)
    }
    console.log(finalNumber)
})

number3.addEventListener("click", function(event){
    //console.log(finalNumber)
    if(clickedPlus){
        finalNumber += 3
        clickedPlus = false
    } else if(clickedMinus){
        finalNumber -= 3
        clickedMinus = false
    } else if(clickedDivision){
        finalNumber /= 3
        clickedDivision = false
    } else if(clickedMultiplication){
        finalNumber *= 3
        clickedMultiplication = false
    } else {
        finalNumber = (finalNumber + "" + 3)
    }
    console.log(finalNumber)
})

number4.addEventListener("click", function(event){
    //console.log(finalNumber)
    if(clickedPlus){
        finalNumber += 4
        clickedPlus = false
    } else if(clickedMinus){
        finalNumber -= 4
        clickedMinus = false
    } else if(clickedDivision){
        finalNumber /= 4
        clickedDivision = false
    } else if(clickedMultiplication){
        finalNumber *= 4
        clickedMultiplication = false
    } else {
        finalNumber = (finalNumber + "" + 4)
    }
    console.log(finalNumber)
})

number5.addEventListener("click", function(event){
    //console.log(finalNumber)
    if(clickedPlus){
        finalNumber += 5
        clickedPlus = false
    } else if(clickedMinus){
        finalNumber -= 5
        clickedMinus = false
    } else if(clickedDivision){
        finalNumber /= 5
        clickedDivision = false
    } else if(clickedMultiplication){
        finalNumber *= 5
        clickedMultiplication = false
    } else {
        finalNumber = (finalNumber + "" + 5)
    }
    console.log(finalNumber)
})

number6.addEventListener("click", function(event){
    //console.log(finalNumber)
    if(clickedPlus){
        finalNumber += 6
        clickedPlus = false
    } else if(clickedMinus){
        finalNumber -= 6
        clickedMinus = false
    } else if(clickedDivision){
        finalNumber /= 6
        clickedDivision = false
    } else if(clickedMultiplication){
        finalNumber *= 6
        clickedMultiplication = false
    } else {
        finalNumber = (finalNumber + "" + 6)
    }
    console.log(finalNumber)
})

number7.addEventListener("click", function(event){
    //console.log(finalNumber)
    if(clickedPlus){
        finalNumber += 7
        clickedPlus = false
    } else if(clickedMinus){
        finalNumber -= 7
        clickedMinus = false
    } else if(clickedDivision){
        finalNumber /= 7
        clickedDivision = false
    } else if(clickedMultiplication){
        finalNumber *= 7
        clickedMultiplication = false
    } else {
        finalNumber = (finalNumber + "" + 7)
    }
    console.log(finalNumber)
})

number8.addEventListener("click", function(event){
    //console.log(finalNumber)
    if(clickedPlus){
        finalNumber += 8
        clickedPlus = false
    } else if(clickedMinus){
        finalNumber -= 8
        clickedMinus = false
    } else if(clickedDivision){
        finalNumber /= 8
        clickedDivision = false
    } else if(clickedMultiplication){
        finalNumber *= 8
        clickedMultiplication = false
    } else {
        finalNumber = (finalNumber + "" + 8)
    }
    console.log(finalNumber)
})

number9.addEventListener("click", function(event){
    //console.log(finalNumber)
    if(clickedPlus){
        finalNumber += 9
        clickedPlus = false
    } else if(clickedMinus){
        finalNumber -= 9
        clickedMinus = false
    } else if(clickedDivision){
        finalNumber /= 9
        clickedDivision = false
    } else if(clickedMultiplication){
        finalNumber *= 9
        clickedMultiplication = false
    } else {
        finalNumber = (finalNumber + "" + 9)
    }
    console.log(finalNumber)
})

number0.addEventListener("click", function(event){
    //console.log(finalNumber)
    if(clickedPlus){
        finalNumber += 0
        clickedPlus = false
    } else if(clickedMinus){
        finalNumber -= 0
        clickedMinus = false
    } else if(clickedDivision){
        finalNumber /= 0
        clickedDivision = false
    } else if(clickedMultiplication){
        finalNumber *= 0
        clickedMultiplication = false
    } else {
        finalNumber = (finalNumber + "" + 0)
    }
    console.log(finalNumber)
})

numberDel.addEventListener("click", function(event){
    finalNumber = (finalNumber.slice(0, -1))
    console.log(finalNumber)
})

let clickedPlus = false
numberPlus.addEventListener("click", function(event){
    clickedPlus = true
    finalNumber = Number(finalNumber)
    //console.log(clickedPlus)
})

let clickedMinus = false
numberMinus.addEventListener("click", function(event){
    clickedMinus = true
    finalNumber = Number(finalNumber)
})

let clickedDivision = false
numberDivision.addEventListener("click", function(event){
    clickedDivision = true
    finalNumber = Number(finalNumber)
})

let clickedMultiplication = false
numberMultiplication.addEventListener("click", function(event){
    clickedMultiplication = true
    finalNumber = Number(finalNumber)
})

numberReset.addEventListener("click", function(event){
    finalNumber = "0"
    console.log(finalNumber)
})

let clickedComma = false
numberComma.addEventListener("click", function(event){
    clickedComma = true
    finalNumber = `${finalNumber},`
    console.log(finalNumber)
})