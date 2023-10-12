// const apiKey = 'd7077ae62143441fa49124033231110'

// const query = 'http://api.weatherapi.com/v1/current.json?key=d7077ae62143441fa49124033231110&q=London'



const query = 'http://localhost:8080/products'



// const xhr = new XMLHttpRequest()

// xhr.open('GET', requestURL)

// xhr.onload = () => {
// console.log(typeof xhr.response)
// }

// xhr.send

fetch(query).then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
})

// let response = await fetch('http://localhost:8080/products/1', {
//     'Content-Type': 'application/json' 'API-Key': 'secret'
// }})