const todoListUrl = 'http://localhost:3000/todoList'

const todoList = document.getElementById('todo-list')
const inputTask = document.getElementById('input-task')
const addBtn = document.getElementById('add-btn')
const editBtn = document.querySelector('.editBtn')
const deleteBtn = document.querySelector('.deleteBtn')


async function addTasks() {
  try {
    const obj = {task: inputTask.value}
    await fetch(todoListUrl, {
      method: 'POST',
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
    deleteBtn.setAttribute('class', 'deleteBtn');
    deleteBtn.innerHTML = 'Delete'
    taskItem.innerHTML = `
      <span>${arr[i].task}</span>
    `
    taskItem.appendChild(deleteBtn)
    todoList.appendChild(taskItem);
    deleteBtn.addEventListener('click', () => {
      deleteTask(arr[i].id)
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

async function editTask() {
  try {
    await fetch(todoListUrl, {
      method:'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(obj)
    })
  } catch (e) {
    console.log('Fetch Error:', e)
  }
}