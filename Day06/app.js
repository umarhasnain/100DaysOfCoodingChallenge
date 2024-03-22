// Learning Array 
let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.pop("Orange")
fruits.push("Strabury");
fruits.shift("Apple");
fruits.unshift("Cherry");

document.write("Fruits In Array: " + fruits)
// document.write("Fruits In Array: " + fruits[0])
// document.write("Fruits In Array: " + fruits[1])

// SPLICE Method 
let arr = ["Karachi", "Hyderabad", "Multan", "Lahore"];
arr.splice(1, 2);
document.write(arr)

// SLICE Method
const fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruit.slice(1, 3);
document.write(citrus)


