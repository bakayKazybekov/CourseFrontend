const todoListUrl = 'http://localhost:3000/todoList'

const todoList = document.getElementById('todo-list')
const inputTask = document.getElementById('input-task')
const addBtn = document.getElementById('add-btn')
const editBtn = document.querySelector('.editBtn')
const deleteBtn = document.querySelector('.deleteBtn')


async function addTasks() {
  try {
    inputTaskText = inputTask.value.trim()
    if (!inputTaskText) return

    const obj = {task: inputTask.value}
    await fetch(todoListUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(obj)
    })
    inputTask.value = ''
    getTasks()
  } catch (e) {
    console.log('Fetch Error:', e)
  }
}

async function getTasks() {
  try {
    const response = await fetch(todoListUrl)
    const responseJson = await response.json()
    createTask(responseJson)
  } catch (e) {
    console.log('Fetch Error:', e)
  }
}

function createTask (arr) {
  todoList.innerHTML = '';
  for(let i = 0; i < arr.length; i++) {
    const taskItem = document.createElement('li')
    const deleteBtn = document.createElement('button')
    const editBtn = document.createElement('button')
    deleteBtn.setAttribute('class', 'deleteBtn');
    editBtn.setAttribute('class', 'editBtn');
    deleteBtn.innerHTML = 'Delete'
    editBtn.innerHTML = 'Edit'
    taskItem.innerHTML = `
      <span>${arr[i].task}</span>
    `
    taskItem.appendChild(deleteBtn)
    taskItem.appendChild(editBtn)
    todoList.appendChild(taskItem);
    deleteBtn.addEventListener('click', () => {
      deleteTask(arr[i].id)
    })
    editBtn.addEventListener('click', () => {
      editTask(arr[i])
    })
  }
}

addBtn.addEventListener('click', () => {
  addTasks()
})
getTasks()

async function deleteTask(id) {
  try {
    await fetch(`${todoListUrl}/${id}`, {method: 'DELETE'})
    getTasks()
  } catch (e) {
    console.log('Fetch Error:', e)
  }
}

async function editTask(oldItem) {
  try {
    const newText = prompt('Измените задачу', oldItem.task);
    const newtextTrim = newText.trim()
    if (!newtextTrim) return
    const obj = {
      task: newText,
      id: oldItem.id
    }

    await fetch(`${todoListUrl}/${oldItem.id}`, {
      method:'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(obj)
    })
    getTasks()
  } catch (e) {
    console.log('Fetch Error:', e)
  }
}