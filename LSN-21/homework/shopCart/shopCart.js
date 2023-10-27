const shopCartUrl = 'http://localhost:3000/shopCart'

const shopCart = document.querySelector('.shop_cart')
const resetBtn = document.querySelector('.reset_btn')
let shopCartItems;

// Для отрисовка товаров в корзине
function createShopCartItem(arr) {
  for (let i = 0; i < arr.length; i++) {
    const item = document.createElement('div')
    const itemImg = document.createElement('div')
    const img = document.createElement('img')
    const itemName = document.createElement('div')
    const itemPrice = document.createElement('div')
    const deleteBtn = document.createElement('button')

    item.setAttribute('class', 'item')

    itemImg.setAttribute('class', 'item_img')
    img.setAttribute('src', arr[i].imgUrl)
    itemImg.appendChild(img)

    itemName.innerText = arr[i].name;
    itemName.setAttribute('class', 'item_name')

    itemPrice.innerText = arr[i].price;
    itemPrice.setAttribute('class', 'item_price')

    deleteBtn.innerText = 'Удалить'
    deleteBtn.setAttribute('class', 'delete_btn')

    item.appendChild(itemImg)
    item.appendChild(itemName)
    item.appendChild(itemPrice)
    item.appendChild(deleteBtn)

    shopCart.appendChild(item)

    // Кнопка для удаления товаров
    deleteBtn.addEventListener('click', () => {
      deleteShopCart(arr[i].id)
    })
  }
}

// Функция для отрисовки товаров в корзине
async function getShopCart() {
  try {
    const response = await fetch(shopCartUrl)
    const responseJson = await response.json()
    createShopCartItem(responseJson)

    shopCartItems = responseJson;
  } catch (e) {
    console.log(e)
  }
}
getShopCart()

// Функция для удаления товаров в корзине
async function deleteShopCart(id) {
  try {
    await fetch(`${shopCartUrl}/${id}`, {
      method: 'DELETE'
    })
    shopCart.innerHTML = ''
    getShopCart()
  } catch (e) {
    console.log(e)
  }
}


// Очистка корзины
function resetFunc(arr) {
  for (let i = 0; i < arr.length; i++) {
    deleteShopCart(arr[i].id)
  }
}

resetBtn.addEventListener('click', () => {
  resetFunc(shopCartItems)
})
