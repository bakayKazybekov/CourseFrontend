const itemsUrl = 'http://localhost:3000/items'
const itemName = document.getElementById('name_input')
const itemDescribe = document.getElementById('description_input')
const itemPrice = document.getElementById('price_input')
const itemImg = document.getElementById('img_input')
const saveBtn = document.querySelector('.save_btn')

// Для создания товаров
async function addItem() {
  try {
    const currentTime = new Date();
    const timeInSeconds = currentTime.getTime() / 1000;

    newName = itemName.value.trim()
    newDescribe = itemDescribe.value.trim()
    newPrice = itemPrice.value.trim()
    newImg = itemImg.value.trim()
    if (!newName || !newDescribe || !newPrice || !newImg) {
      alert('Заполните поля!')
      return
    }

    const obj = {
      name: itemName.value,
      describe: itemDescribe.value,
      price: itemPrice.value,
      imgUrl: itemImg.value,
      time: `${timeInSeconds}`
    }

    try {
      await fetch(itemsUrl, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      })
    } catch (e) {
      console.log(e)
    }

    itemName.value = ''
    itemDescribe.value = ''
    itemPrice.value = ''
    itemImg.value = ''

    location.href = '../index.html'
  } catch (e) {
    console.log(e)
  }
}

saveBtn.addEventListener('click', () => {
  addItem()
})