// Ссылки
const itemsUrl = 'http://localhost:3000/items'
const shopCartUrl = 'http://localhost:3000/shopCart'


const editItemContainer = document.querySelector('.create_item')
const itemList = document.querySelector('.items')
const createBtn = document.querySelector('.create_btn')
const main = document.querySelector('.main')
const saveBtn = document.querySelector('.save_btn')
const closeBtn = document.querySelector('.close_btn')
const backBtn = document.querySelector('.back_btn')
const itemDescribeContainer = document.querySelector('.item_describe_html')
// Кнопки сортировки
const sortingExpensive = document.querySelector('.sorting_expensive')
const sortingCheap = document.querySelector('.sorting_cheap')
const sortingNew = document.querySelector('.sorting_new')
const sortingOld = document.querySelector('.sorting_old')
// Поиск товара
const searchInput = document.querySelector('.search_input')
const searchBtn = document.querySelector('.search_btn')
// Редактирование
const EditItemName = document.getElementById('name_input')
const EditItemDescribe = document.getElementById('description_input')
const EditItemPrice = document.getElementById('price_input')
const EditItemImg = document.getElementById('img_input')
let itemId;
let itemsForAction;



// Создание списка товара
function createItem(arr) {
  for (let i = 0; i < arr.length; i++) {
    const item = document.createElement('div')
    const itemImg = document.createElement('div')
    const img = document.createElement('img')
    const itemName = document.createElement('div')
    const itemPrice = document.createElement('div')
    const editBtn = document.createElement('button')
    const addBtn = document.createElement('button')
    const content = document.createElement('div')
    const buttons = document.createElement('div')

    item.setAttribute('class', 'item')

    itemImg.setAttribute('class', 'item_img')
    img.setAttribute('src', arr[i].imgUrl)
    itemImg.appendChild(img)

    itemName.innerText = arr[i].name;
    itemName.setAttribute('class', 'item_name')

    itemPrice.innerText = arr[i].price;
    itemPrice.setAttribute('class', 'item_price')

    editBtn.innerText = 'Редактировать'
    editBtn.setAttribute('class', 'edit_btn')
    addBtn.innerText = 'Добавить в корзину'
    addBtn.setAttribute('class', 'add_shop-cart')

    content.setAttribute('class', 'item_content')
    buttons.setAttribute('class', 'item_buttons')

    content.appendChild(itemImg)
    content.appendChild(itemName)
    content.appendChild(itemPrice)
    buttons.appendChild(editBtn)
    buttons.appendChild(addBtn)

    item.appendChild(content)
    item.appendChild(buttons)

    itemList.appendChild(item)

    // Подробности товара
    content.addEventListener('click', () => {
      const itemDescribeHtml = document.querySelector('.item_describe_html')
      const itemDescribeImg = document.querySelector('.item_describe_img')
      const itemDescribeName = document.querySelector('.item_describe_title')
      const itemDescribe = document.querySelector('.item_describe_info_text')


      const img = document.createElement('img')
      img.setAttribute('src', `${arr[i].imgUrl}`)
      itemDescribeImg.appendChild(img)

      itemDescribeName.innerHTML = arr[i].name
      itemDescribe.innerHTML = arr[i].describe


      main.style.display = 'none'
      itemDescribeHtml.style.display = 'block'
    })

    // Редактирование товара
    editBtn.addEventListener('click', () => {
      itemId = arr[i].id;
      EditItemName.value = arr[i].name
      EditItemDescribe.value = arr[i].describe
      EditItemPrice.value = arr[i].price
      EditItemImg.value = arr[i].imgUrl
      
      main.style.display = 'none'
      createItemContainer.style.display = 'block'
    })

    //Добавление в корзину
    addBtn.addEventListener('click', () => {
      addShopCart(arr[i])
    })
  }
}


//Добавление в корзину
async function addShopCart(obj) {
  try {
    await fetch(shopCartUrl, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj),
    })
  } catch (e) {
    console.log(e)
  }
}

// Отрисовка товаров
async function getItems() {
  try {
    const response = await fetch(itemsUrl)
      const responseJson = await response.json()
      createItem(responseJson)
      // Sorting
      itemsForAction = responseJson;
  } catch (e) {
    console.log(e)
  }
}
getItems()


// Редактирование товара
async function editItem() {
  try {
    newEditName = EditItemName.value.trim()
    newEditDescribe = EditItemDescribe.value.trim()
    newEditPrice = EditItemPrice.value.trim()
    newEditImg = EditItemImg.value.trim()
    if (!newEditName || !newEditDescribe || !newEditPrice || !newEditImg) {
      alert('Заполните поля!')
      return
    }
  
    const currentTime = new Date();
    const timeInSeconds = currentTime.getTime() / 1000;
  
    const obj = {
      name: EditItemName.value,
      describe: EditItemDescribe.value,
      price: EditItemPrice.value,
      imgUrl: EditItemImg.value,
      time: `${timeInSeconds}`
    }

    await fetch(`${itemsUrl}/${itemId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })

    location.href = 'index.html'
  } catch (e) {
    console.log(e)
  }
}

// Кнопка для сохранения изменений
saveBtn.addEventListener('click', () => {
  editItem()
});
// Кнопка для отмены изменений
closeBtn.addEventListener('click', () => {
  main.style.display = 'block'
  createItemContainer.style.display = 'none'
})

// Кнопка для выхода из описания товара
backBtn.addEventListener('click', () => {
  main.style.display = 'block'
  itemDescribeContainer.style.display = 'none'
})


// Сортировка по ценам
sortingExpensive.addEventListener('click', () => {
  itemsForAction.sort((a, b) => b.price - a.price)

  itemList.innerHTML = ''
  createItem(itemsForAction)
})
sortingCheap.addEventListener('click', () => {
  itemsForAction.sort((a, b) => a.price - b.price)

  itemList.innerHTML = ''
  createItem(itemsForAction)
})

// Сортировка по дате
sortingOld.addEventListener('click', () => {
  itemsForAction.sort((a, b) => a.time - b.time)

  itemList.innerHTML = ''
  createItem(itemsForAction)
})
sortingNew.addEventListener('click', () => {
  itemsForAction.sort((a, b) => b.time - a.time)

  itemList.innerHTML = ''
  createItem(itemsForAction)
})

// Поиск товара
searchBtn.addEventListener('click', () => {
  const search = searchInput.value.trim().toLowerCase()
  if (!search) return
  const searchItem = itemsForAction.find((e) => {
    const itemName = e.name.toLowerCase()
    if (search === itemName) {
      return e
    }
  })

  itemList.innerHTML = ''
  createItem([searchItem])
})
