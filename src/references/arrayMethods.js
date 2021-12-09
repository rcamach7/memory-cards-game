const myData = ["Cristiano", "Benzema", "Bale"];
myData.push("Pepe"); // Adds an item to last part of an array
myData.push("Ramos"); // Adds an item to last part of an array
myData.pop(); // Removes last element of an array
myData.shift(); // Removes first element
myData.unshift("Marcelo"); // Adds an element to the beginning of an array.

myData.forEach((data) => { // Loops through each index of array and performs a function below on each data point
    console.log(data);
})

console.log("Index of Ramos: " + myData.indexOf("Bale")); // Returns index of an element
console.table(myData); // Prints out array in a table format for easy visibility

myData.splice(1, 2); // Deletes at index 1, and deletes two elements after that
console.table(myData);

myData.map( (item) => {
    console.log(item);
})

const someNumbers = [5, 10, 15];
const someMoreNumbers = someNumbers.map((num)=> { // Returns a new array using each index of another, and performing an operation
    return num * 10;
});
console.table(someMoreNumbers);
