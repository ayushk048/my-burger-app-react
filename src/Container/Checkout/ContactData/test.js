

const arr = ["Prakash", "Prabhakar", "M", 26]
const arrName = ["fname", "lname", "gender", "age"]
const obj = {}

arr.map((ele, index) => obj[arrName[index]] = ele)

console.log(obj)