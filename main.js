//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizzas:["Deep Dish", " South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_creams:["Chocolate"," Vanilla"," Oreo"],
    shakes:{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }
}

let entries = Object.entries(person3)
for (let [k,v] of entries) {
  if (typeof v == "object" && Array.isArray(v) == false) {
    let flavors = Object.entries(v)
    for (let [x,y] of flavors) {
      console.log(`My favorite ${x} ${k} are ${y}.`)
    }
  } else {
    console.log(`My favorite ${k}: ${v}.`)
  }
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
  this.name = name;
  this.age = age;
  
  // print info method
  this.printInfo = (name, age) => {
    return console.log(`${this.name} is ${this.age} years old.`)
  }
 
  // increment age by one each time method is called
  this.birthday = (age) => {
    this.age = this.age + 1
    return this.age
  }

}

// Create two people using the 'new' keyword
// print both of their info
// increment one person's age by 3 years 

let kelly = new Person("Kelly", 39)
kelly.printInfo()

let woody = new Person("Woody", 30)
woody.printInfo()
woody.birthday()
woody.birthday()
woody.birthday()
woody.printInfo()

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const greaterThanTen = (str) => {
  return new Promise( (resolve, reject) => {
    if(str.length > 10) {
      resolve(true)
    } else {
      reject(false)
    }
  })
}

greaterThanTen("Kelly Karner")
.then( (result) => {
  console.log(`Big word`)
}) 

greaterThanTen("kelly")
.catch( (error) => {
  console.log(`Small number`)
})
