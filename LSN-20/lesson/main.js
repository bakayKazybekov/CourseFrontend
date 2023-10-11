const url = 'http://localhost:3000/data'

const todoList = document.getElementById('todo-list')
const loadingIndicator = document.getElementById('loading')

let currentPage = 1;
let isLoading = false;

function displayTodoList(data) {
  for (let i = 0; i < data.length; i++) {
    const li = document.createElement('li')
    li.setAttribute('class', 'list')
    li.innerText = data[i].title
    todoList.appendChild(li)
  }
}

async function getTodos() {
  try {
    isLoading = true
    loadingIndicator.style.display = 'block'

    const response = await fetch(`${url}?_page=${currentPage}`)

    if (response.status !==  200) {
      throw new Error(response.status)
    } else {
      const data = await response.json()

      if (data.length) {
       displayTodoList(data)
        currentPage++
      } else {
        currentPage = 0
      }
    }

  } catch (e) {
    console.log(e)
  } finally {
    isLoading = false
    loadingIndicator.style.display = 'none'
  }
}
getTodos()

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight && currentPage) {
    if (!isLoading) {
      getTodos()
    }
  }
})