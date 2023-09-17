const obj = {
  // N1
  shop: [
    {
      name: 'Xaomi Poco X4 GT',
      price: '20,000',
      rating: '9/10',
      id: 1,
    },
    {
      name: 'Iphone 14 pro',
      price: '80,000',
      rating: '9/10',
      id: 2,
    },
    {
      name: 'Samsung A72s',
      price: '30,000',
      rating: '7/10',
      id: 3,
    },
  ],
  // N2
  addItem (item) {
    this.shop.push(item)
  },
  // N3
  deleteItem (num) {
    const shopUpdate = this.shop.filter((e) => e.id !== num && e)
    this.shop = shopUpdate;
  },
  // N4
  editItem (num, newName, newPrice) {
    const shopEdit = this.shop.filter((e) => {
      if (e.id !== num) {
        return e;
      } else if (e.id === num) {
        e.name = newName;
        e.price = newPrice;
        return e;
      }
    })
    this.shop = shopEdit;
  },
  // N5
  nameItems () {
    const nameItems = this.shop.map((e) => e.name)
    console.log(nameItems);
  },
  // N6
  displayItem (itemId) {
    const item = this.shop.find((e) => e.id === itemId && e)
    console.log(item);
  }
}

obj.addItem(
  {
    name: 'iqoo Pro 2',
    price: '40,000',
    rating: '7/10',
    id: 4,
  },
)

obj.addItem(
  {
    name: 'Poco X5 Pro',
    price: '35,000',
    rating: '8/10',
    id: 5,
  },
)
console.log(obj.shop)

obj.deleteItem(1);

console.log(obj.shop)

obj.editItem (3, 'Redmi Note 12 Pro', '17000');
console.log(obj.shop)

obj.nameItems();

obj.displayItem(3)