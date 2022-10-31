console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus (Number){
    return (plusNumber) => { plusNumber + Number }
};

let plus15 = plus(15)

console.log(plus15(10))

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

users.forEach((user) => {
   console.log (user.name)
})

users.forEach((user) => {
    console.log(user.age)
})

users.forEach((user) => {
    console.log(user.isActive)    
})


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

users.map((user) => {
    console.log( user.name , user.score)
}
)

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

users.filter((user) => {
    if(user.isActive == true)
    console.log(user)
})
// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
const sort = users.sort((a, b,) => { return b.score - a.score})

console.log(sort)

// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n");

let sum = users.reduce((totalScore, user) => { 
    return totalScore + user.score
},0)

console.log(sum)