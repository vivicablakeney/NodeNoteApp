const fs = require('fs')


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }
// //fs core module only knows how to work with string data
// // JSON.stringify method takes an objecta translates into JSON string representation 

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)
// console.log(bookJSON)

// // parse returns parsed array
// JSON parse takes data in and converts it to an object
// const parsedData = JSON.parse(bookJSON)
// console.log(parsed.Data.author)

// //read the file in as binary data
// const dataBuffer = fs.readFileSync('1-json.json')
// //converted into started string
// const dataJSON = dataBuffer.toString()
// //parse data into object
// const data = JSON. parse(dataJSON)
// //access a property from object
// console.log(data.title)


const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Gunther'
user.age = 54
//stringing user object
const userJSON = JSON.stringify(user)
//wrting to file you want to over write, pass in data 
fs.writeFileSync('1-json.json', userJSON)
