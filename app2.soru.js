// map initials
// const str = "Clarusway Online Career IT Training School";
// const arrayStr=str.split(" ")
// console.log(arrayStr);
// const firstel=arrayStr.map(element => element[0])
// const joinStr=firstel.join("")
// console.log(joinStr)


// map initials
const str = 'Clarusway Online Career IT Training School';
const arrayStr=str.split(" ")
console.log(arrayStr);
const firstel=arrayStr.map(element => element[0])
console.log(firstel)
const joinStr=firstel.join("")
console.log(joinStr)

// map initials

const str = 'Clarusway Online Career IT Training School';
console.log(str.split(" ").map(element => element[0]).join(""))