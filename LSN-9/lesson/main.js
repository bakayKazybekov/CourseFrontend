class Person {}



const jack = new Person();

console.log(jack);


class Todo {
  #dataArr = [];
  getData() {
    console.log(this.#dataArr);
  }

  setData(data) {
    this.#dataArr.push(data)
  }
  deleteData(id) {
    const deleteData = this
  }
  editData(data) {}
}

const myTodo = new Todo();

myTodo.setData({
  id: '1',
  text: 'Пойти на работу',
});
myTodo.setData({
  id: '2',
  text: 'Покушать',
});
myTodo.deleteData('2');

myTodo.getData();