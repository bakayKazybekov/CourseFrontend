const firstValue = document.getElementById('first_value')
const secondValue = document.getElementById('second_value')

const result = document.getElementById('result')

const errorMessage = document.getElementById('error')

const ok_Btn = document.getElementById('ok')

const actionValues = (operator) => {
  if(secondValue.value == 0 && operator === divide) {
    errorMessage.innerText = 'на ноль делить нельзя!'
    ok_Btn.style.display = 'flex'
    errorMessage.style.display = 'flex'
  } else if (firstValue.value && secondValue.value && operator === divide) {
    const res = firstValue.value / secondValue.value
    result.value = res
  } else if(firstValue.value && secondValue.value && operator === plus) {
    const res = +firstValue.value + +secondValue.value
    result.value = res
  } else if(firstValue.value && secondValue.value && operator === minus) {
    const res = firstValue.value * secondValue.value
    result.value = res
  } else if(firstValue.value && secondValue.value && operator === multiply) {
    const res = firstValue.value * secondValue.value
    result.value = res
  } else {
    errorMessage.innerText = 'Введите числа'
    ok_Btn.style.display = 'flex'
    errorMessage.style.display = 'flex'
  }
}

// const addValues = () => {
//     if(firstValue.value !== '' && secondValue.value !== '') {
//         const res = +firstValue.value + +secondValue.value
//         result.value = res
//     } else {
//         errorMessage.innerText = 'Введите числа'
//         ok_Btn.style.display = 'flex'
//         errorMessage.style.display = 'flex'
//         // как задавать стили
//         // ok_Btn.style.background = ''
//         // ok_Btn.setAttribute('style', 'display: flex;')
//     }
// }

ok_Btn.addEventListener('click', () => {
    errorMessage.style.display = 'none'
    ok_Btn.style.display = 'none'
})

// const minusValues = () => {
//     if(firstValue.value && secondValue.value) {
//         const res = firstValue.value - secondValue.value
//         result.value = res
//     } else {
//         errorMessage.innerText = 'Введите числа'
//         ok_Btn.style.display = 'flex'
//         errorMessage.style.display = 'flex'
//     }
// }

// const divideValues = () => {
//     if(secondValue.value == 0) {
//         errorMessage.innerText = 'на ноль делить нельзя!'
//         ok_Btn.style.display = 'flex'
//         errorMessage.style.display = 'flex'
//     } else if(firstValue.value && secondValue.value) {
//         const res = firstValue.value / secondValue.value
//         result.value = res
//     } else {
//         errorMessage.innerText = 'Введите числа'
//         ok_Btn.style.display = 'flex'
//         errorMessage.style.display = 'flex'
//     }
// }

// const multiplyValues = () => {
//     if(firstValue.value && secondValue.value) {
//         const res = firstValue.value * secondValue.value
//         result.value = res
//     } else {
//         errorMessage.innerText = 'Введите числа'
//         ok_Btn.style.display = 'flex'
//         errorMessage.style.display = 'flex'
//     }
// }

const clearInputs = () => {
    firstValue.value = ''
    secondValue.value = ''
    result.value = ''
}

function fff (arg) {

}