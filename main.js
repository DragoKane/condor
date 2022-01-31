let firstnumber = document.getElementById(`first_number`)
let secondnumber = document.getElementById(`second_number`)
let btnPlus = document.getElementById(`btn_plus`)
let btnMinus = document.getElementById(`btn_minus`)
let btnUmnoz = document.getElementById(`btn_umnoz`)
let btnDilen = document.getElementById(`btn_dilen`)
let result = document.getElementById(`result`)

btnPlus.onclick = function() {
let sum = firstnumber.value*1 + secondnumber.value*1
result.textContent = sum
}
btnMinus.onclick = function() {
let sum = firstnumber.value*1 - secondnumber.value*1
result.textContent = sum
}
btnUmnoz.onclick = function() {
let sum = firstnumber.value*1 * secondnumber.value*1
result.textContent = sum
}
btnDilen.onclick = function() {
    if (secondnumber == 0) {
        let sum = (`Деление на 0`)
        result.textContent = sum
    } else {
        let sum = firstnumber.value*1 / secondnumber.value*1
        result.textContent = sum
    }
}




