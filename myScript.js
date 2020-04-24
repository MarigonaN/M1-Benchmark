
// 21) Given variable X = "John" and Y = "Doe", write on the console log "John <> Doe"

      var x = "John";
      var y = "Doe";
      let sum = x +"><"+ y;
      console.log(sum);
        
//22) Create an object with properties such Name, Surname, Email

        const person = {
            name: "Marigona",
            surname: "Nuhija",
            email: "marigonanuhija@gmail.com",
        }
        console.log(person);

//23) Delete Email from the previously created object

delete person.email;
console.log(person);

//24) Create an array with 10 strings in it

const names = ["Marigona", "Elona", "Rrezarta", "Milot","Marigona", "Elona", "Rrezarta", "Milot", "Marigona", "Elona" ];


//25) Print in the console every string in the previous array
console.log(names)

//26) Create an array with 100 random numbers in it
  
var arr = [];
var t = 99;
for (var i=0; i<t; i++) {
    arr.push(Math.round(Math.random() * t))
}
console.log(arr);

//27) Wrote a function to get the MAX and the MIN from the previously created array

var arr2 = arr;
var largest = Math.max.apply(Math, arr2);
console.log(largest)

var arr3 = arr;
var lowest = Math.min.apply(Math, arr3);
console.log(lowest)

//28) Create an array of arrays, in which every array has 10 random numbers



//29) Create a function that gets 2 arrays and returns the longest one

let arr1 = ["Marigona", "Strive", "javascript"];

let longest = arr1.reduce(function(c, v) {
  return c.length <= v.length ? v : c;
});

console.log(longest);

//30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values






//DOM
//31) Get element with ID "container" from the page

let smth = document.getElementById(' #container');
console.log(smth);



//32) Get every "td" from the page

const paras = document.querySelectorAll('td');



// 34) Write a function to change the heading of the page

function changeHeading(newHeading){
    document.querySelector('h1').innerText="My First BenchMark - Day 9"
}
changeHeading();


//35) Write a function to add an extra row to the table

var node = document.createElement("tr"); 
var textnode = document.createTextNode("new tr");
node.appendChild(textnode);  
document.getElementById("table").appendChild(node);

//39) Write a function to add new items to a UL





