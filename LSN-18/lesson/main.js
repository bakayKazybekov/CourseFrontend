const postsUrl = 'http://localhost:3000/posts'
const usersUrl = 'http://localhost:3000/users'

async function getData() {
  try {
    const response = await fetch(postsUrl)
    const data = await response.json()
    // console.log(data)
  } catch (e) {
    console.log('Fetch data Error:' ,e)
  }
}
// getData()

async function postData() {
  try {
    const object = {
      value: 'Value',
      isActive: true,
      firstName: null,
      lasname: undefined,
      price: 123,
      arr: [1, 2, 3],
    }
    const response = await fetch(postsUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(object),
    })


    const result = await response.json()
    console.log(result)
  } catch (e) {
    console.log('Fetch data Error:' ,e)
  }
}
// postData()

async function putData() {
  try {
    const obj = {
      param1: 'new param1',
      param2: 'new param2',
      param3: 'new param3',
    }
    const itemId = 4;
    const putUrl = `${postsUrl}/${itemId}`
    await fetch(putUrl, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(obj)
    })
  } catch (e) {
    console.log('Error: ', e)
  }
}
// putData()