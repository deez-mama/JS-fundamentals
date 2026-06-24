//Filter and MAP mini exercise from claude:

const students = new Map([
    ["Ram", 67],
    ["Shyam", 69],
    ["Sita", 7],
    ["Harry", 96],
    ["John", 21]
])

const passedNames = students.forEach((value, key) =>{
    value>=40 && console.log(`${key} scored ${value}`)
})
 

