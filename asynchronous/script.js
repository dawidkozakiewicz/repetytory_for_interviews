// Promise
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
})

getDataPromise(5).then((data) => {
    console.log(data)
    return data
}).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const data = await response.json()
    return data
}

getData().then(data => console.log(data))




