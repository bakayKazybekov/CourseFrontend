const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');

xhr.onload = function () {
  if (xhr.status === 200) {
    const todos = JSON.parse(xhr.responseText);

    const JSONtodos = JSON.stringify(todos)
    console.log(JSONtodos)
  } else {
    console.log('Ошибка' + xhr.status)
  }
}

xhr.onerror = function () {
  console.log('произошла ошибка')
}

xhr.send()