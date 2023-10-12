const firstValue = document.getElementById('first_value')
const secondValue = document.getElementById('second_value')

const result = document.getElementById('result')

const errorMessage = document.getElementById('error')

const ok_Btn = document.getElementById('ok')

function actionValues(operator) {
  if(operator === 1 && firstValue.value && secondValue.value) {
    const res = +firstValue.value + +secondValue.value
    result.value = res
  } else if(operator === 2 && firstValue.value && secondValue.value) {
    const res = firstValue.value - secondValue.value
    result.value = res
  } else if(operator === 4 && firstValue.value && secondValue.value) {
    const res = firstValue.value * secondValue.value
    result.value = res
  } else if(operator === 3 && secondValue.value == 0) {
    errorMessage.innerText = 'на ноль делить нельзя!'
    ok_Btn.style.display = 'flex'
    errorMessage.style.display = 'flex'
  } else if(operator === 3 && firstValue.value && secondValue.value) {
    const res = firstValue.value / secondValue.value
    result.value = res
  }
   else {
    errorMessage.innerText = 'Введите числа'
    ok_Btn.style.display = 'flex'
    errorMessage.style.display = 'flex'
  }
}

ok_Btn.addEventListener('click', () => {
    errorMessage.style.display = 'none'
    ok_Btn.style.display = 'none'
})

const clearInputs = () => {
    firstValue.value = ''
    secondValue.value = ''
    result.value = ''
}