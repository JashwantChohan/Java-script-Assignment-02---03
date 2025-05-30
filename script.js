// Chapter 5 Math Expression

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// -------------------Answer 1 -------------------------

let numbers1 = +prompt("Enter First number")
let numbers2 = +prompt("Enter Second number")

let result = numbers1 + numbers2

document.write( `the sum of ${numbers1} and ${numbers2} is ${ result}`)


// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// -------------------Answer 2 -------------------------


let number1 = +prompt("Enter First number")
let number2 = +prompt("Enter Second number")
let operand = prompt("Enter the operator")

if(operand === '+' ){
   let result = number1 + number2
    document.write( `the sum of ${number1} and ${number2} is ${ result}`)

}
else if(operand === '-' ){
    let result = number1 - number2
    document.write( `the Subraction of ${number1} and ${number2} is ${ result}`)

}
else if(operand === '*' ){
    let result = number1 * number2
    document.write( `the multiplication of ${number1} and ${number2} is ${ result}`)

}
else if(operand === '/' ){
    let result = number1 / number2
    document.write( `the sum of ${number1} and ${number2} is ${ result}`)

}
else if(operand === '%' ){
    let result = number1 % number2
    document.write( `the sum of ${number1} and ${number2} is ${ result}`)
}
else {
    alert("Enter correct no")
}


// 3. Do the following using JS Mathematic Expressions

// -------------------Answer 3 -------------------------


// // a. Declare a variable.
let variable
// // b. Show the value of variable in your browser like “Value
// // after variable declaration is: ??”.
document.write(`Value after variable declaration is: ${variable} <br>`)
// // c. Initialize the variable with some number.
variable = 5
// // d. Show the value of variable in your browser like “Initial
// // value: 5”.
document.write(`Initial value is: ${variable} <br>`)
// // e. Increment the variable.
let incrementVariable = variable +1
// // f. Show the value of variable in your browser like “Value
// after increment is: 6”.
document.write(`Value after increment is: ${incrementVariable} <br>`)

// // g. Add 7 to the variable.
let variableAdded = incrementVariable + 7
// // h. Show the value of variable in your browser like “Value
// // after addition is: 13”.
document.write(`Value after addition is: ${variableAdded} <br>`)

// // i. Decrement the variable.
let subtractedVariable = variableAdded -1
// // j. Show the value of variable in your browser like “Value
// // after decrement is: 12”.
document.write(`Value after decrement is: ${subtractedVariable} <br>`)

// // k. Show the remainder after dividing the variable’s value
// // by 3.
let dividedVariable = subtractedVariable/3

// // l. Output : “The remainder is : 0”.
document.write(`The remainder is: ${dividedVariable} <br>`)


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

// -------------------Answer 4 -------------------------


let ticket = 600
let noOfTickets = +prompt(`Enter how many tickets you want to buy`)
if (noOfTickets === 1){
    let totalTickets = noOfTickets * ticket
    document.write(`Total cost to buy ${noOfTickets} is: ${totalTickets}`)
}
else if (noOfTickets === 2){
    let totalTickets = noOfTickets * ticket
    document.write(`Total cost to buy ${noOfTickets} is: ${totalTickets}`)
}
else if (noOfTickets === 3){
    let totalTickets = noOfTickets * ticket
    document.write(`Total cost to buy ${noOfTickets} is: ${totalTickets}`)
}
else if (noOfTickets === 4){
    let totalTickets = noOfTickets * ticket
    document.write(`Total cost to buy ${noOfTickets} is: ${totalTickets}`)
}
else if (noOfTickets === 5){
    let totalTickets = noOfTickets * ticket
    document.write(`Total cost to buy ${noOfTickets} is: ${totalTickets}`)
}
else if (noOfTickets === 6){
    let totalTickets = noOfTickets * ticket
    document.write(`Total cost to buy ${noOfTickets} is: ${totalTickets}`)
}
else if (noOfTickets === 7){
    let totalTickets = noOfTickets * ticket
    document.write(`Total cost to buy ${noOfTickets} is: ${totalTickets}`)
}
else {
    alert("Please enter correct no of tickets ")
}

// 5. write a script to display multiplication table of any number in your browser

// -------------------Answer 5 -------------------------

let num = 2
for (i = 1 ; i<=10 ; i++){
    document.write(`${num} x ${i} = ${num * i}<br>`)
}

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// -------------------Answer 6 -------------------------


let Celcius = 25
let Fahrenheit = (Celcius * 9/5) + 32

document.write(`temperature converted from Celcius to Fahrenheit: ${temperature}'C to ${Fahrenheit}'F`)

let Fahrenheit = 70
let Celcius = (Fahrenheit - 32)*5/9
document.write(`temperature converted from Fahrenheit to Celcius: ${Fahrenheit}'C to ${Celcius}'F`)



// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

// -------------------Answer 7 -------------------------

let PriceOfItem01 = 650
let OrderedQuantityOfItem01 = 3
let PriceOfItem02 = 100
let OrderedQuantityOfItem02 = 7
let ShippingCharges = 100

document.write(` Price of item 1 is  ${PriceOfItem01}<br>
    Ordered quantity of item 1 is ${OrderedQuantityOfItem01}<br>
    Price of item 2 is  ${PriceOfItem02}<br>
    Ordered Quantity of item 2 is  ${OrderedQuantityOfItem02}<br>
    Shipping charges is  ${ShippingCharges}<br>
    <br>
    Total cost of your order is ${PriceOfItem01 * OrderedQuantityOfItem01 + PriceOfItem02 * OrderedQuantityOfItem02 + ShippingCharges}`)




// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

//-----------------------Answer 8------------------------------------
let totalMarks = 980
let obtainedMarks = 804
let percentage = obtainedMarks/totalMarks * 100

document.write(`<H1> Percentage</H1>
    Total Marks: ${totalMarks} <br>
    obtained Marks: ${obtainedMarks} <br>
    Percentage: ${percentage}%`)


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// -----------------------Answer 9-------------------------------

let totalPKR = (10 * 104.80)+(25 *28)
document.write(`<h1> Currency in PKR</h1>
    Total currency in PKR: ${totalPKR}`)


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
// ----------------------Answer 10------------------

let num = 5
let result = ((num + 5)* 10)/2
document.write(`Result is: ${result}`)


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
----------------------answer 11------------------------
let currentYear = 2016
let BirthYear = 1992
let age = currentYear - BirthYear

document.write(`<h1>Age Calculator</h1>
    Your Age is: ${age}`)


// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// ============= Answer 12 =====================
let radius = 20
let circumference = 2 * 3.142 * radius
let area = 3.142 * radius *2
document.write(` <h1>Age Calculator</h1>
    Radius of a Circle is: ${radius}<br>
    The Circumference is: ${circumference}<br>
    Area of a circle is: ${area}`)

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.
// =================== Answer 13 ==========================

let favouriteSnack = "chocolate Chips"
let currentAge = 15
let maximumAge = 65
let estimatedAmount = 3
let yearsRemaining = maximumAge - currentAge;
let daysRemaining = yearsRemaining * 365;
let totalSnacks = daysRemaining * estimatedAmount;
document.write(`<h1>The LifeTime Supply Calculator</h1>
    Favourite snack ${favouriteSnack}<br>
    Current Age: ${15}<br>
    Estimated Maximum Age ${maximumAge}<br>
    Amount of snack per day: ${estimatedAmount} <br>
    You will need ${totalSnacks} , ${favouriteSnack} to last you until the ripe old age of ${maximumAge}.`)



// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

document.write ("<h1>Result</h1>")
let a = 10
document.write(" The value of a is" + a +'<br>')

document.write(`===================================== <br>`)

a = ++a
document.write(`The value of ++a is ${a} <br> Now the value of a is ${a}<br>`)
document.write(`===================================== <br>`)

let b = a++
document.write(`The value of a++ is ${a} <br> Now the value of a is ${b}<br>`)
document.write(`===================================== <br>`)

a = --a
document.write(`The value of --a is ${a} <br> Now the value of a is ${a} <br>`)

a = a--
document.write(`The value of a-- is ${a} <br> Now the value of a is ${a} <br>`)


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

let a = 2, b =1
let result = --a - --b + ++b + b--;

document.write(`a is : ${a} <br> b is : ${b} <br> result is : ${result}`)

// 3. Write a program that takes input a name from user &
// greet the user.

let name =  prompt("Enter your name")
document.write(`Hello, Good Morning ${name}`)

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

let num = prompt("enter a number")
if (num === "") {
    num = 5;
} else {
    num = parseInt(num);
}
let table = "";
for (let i = 1; i <= 10; i++) {
    table += `${num} x ${i} = ${num * i} <br>`;
}
document.write(table);


if(no === ){
}else if(no == " "){
    // no = 5
    for(i = 1; i<=10; i++){
        document.write(`${no} x ${i} = ${i*5} <br>`)
    }
}

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

let subject1 = prompt(" Enter first subjent name ")
let subject2 = prompt(" Enter second subjent name ")
let subject3 = prompt(" Enter third subjent name ")
let totalMarksEach = 100
let totalMarks = 300

let marks1 = +prompt(`Enter marks of ${subject1}`)
let marks2 = +prompt(`Enter marks of ${subject2}`)
let marks3 = +prompt(`Enter marks of ${subject3}`)

let obtainedMarks = marks1 + marks2 + marks3
let percentage =((obtainedMarks/totalMarks)*100).toFixed(2)

let table = document.getElementById("marksheet")
table.innerHTML= `

<tr>
    <th>Subject</th>
    <th>Total Marks</th>
    <th>Obtained Marks</th>
    <th>Percentage</th>
</tr>
<tr>
    <td>${subject1}</td>
    <td>100</td>
    <td>${marks1}</td>
    <td>${((marks1 / totalMarksEach) * 100).toFixed(2)}%</td>
</tr>
<tr>
    <td>${subject2}</td>
    <td>100</td>
    <td>${marks2}</td>
    <td>${((marks2 / totalMarksEach) * 100).toFixed(2)}%</td>
</tr>
<tr>
    <td>${subject3}</td>
    <td>100</td>
    <td>${marks3}</td>
    <td>${((marks3 / totalMarksEach) * 100).toFixed(2)}%</td>
</tr>
<tr>
    <td>Total</td>
    <td>${totalMarks}</td>
    <td>${obtainedMarks}</td>
    <td>${percentage}</td>
</tr>
`



// ============= chapter 14 - 16 start ==========================


// 1. Declare an empty array using JS literal notation to store
// student names in future.

let student = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.
let student = {};

// 3. Declare and initialize a strings array.
let arr = ['a', 'b', 'c', 'd']

// 4. Declare and initialize a numbers array.
let arr = [1, 2, 34, 543]

// 5. Declare and initialize a boolean array.
let arr = [true, false]

// 6. Declare and initialize a mixed array.
let arr = ['name', 23 , true]

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

let qualifications = ['SSC', 'HSC', 'BCS','BS', 'BCOM', 'MS', 'M. Phil.', 'PhD']
for (let i = 0; i < qualifications.length; i++) {
    document.write(1 + qualifications[i] + '<br>')
}
console.log(qualifications)

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

let student = ['ali', 'ahmed', 'umer']
let marks = [320, 230, 480]
let totalMarks = 500
let percentages = [marks[0]/totalMarks*100, marks[1]/totalMarks*100, marks[2]/totalMarks*100]

for(let i = 0; i<student.length; i++){
    document.write('Score of Micheal is' + marks[i] , ' Percentage: ' + percentages[i] + '%')
    document.write('<br>')
}


// 9. Initialize an array with color names. Display the array
// elements in your browser.
let color = ['red', 'blue', 'green']

for (i = 0; i < color.length; i++) {
    document.write('Color ' + color[i] + '<br>')
}

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

let addColor01 = prompt('what color you wants to add to the beginning')
color.unshift(addColor01)
for (i = 0; i < color.length; i++) {
    document.write( color[i] + '<br>')
}


// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

let addColor02 = prompt('what color you want to add to the end')
color.push(addColor02)
for(i = 0 ; i < color.length; i++){
    document.write( color[i] + '<br>' )
}

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

color.unshift('skyblue','gray')
for(i = 0 ; i < color.length; i++){
    document.write( color[i] + '<br>' )
}

// d. Delete the first color in the array. Display the updated
// array in your browser.

color.shift()
for(i = 0 ; i < color.length; i++){
    document.write( color[i] + '<br>' )
}

// e. Delete the last color in the array. Display the updated
// array in your browser.

color.pop()
for(i = 0 ; i < color.length; i++){
    document.write( color[i] + '<br>' )
}

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

let color = ['red ', ' blue ', ' green']

let indexNo = +prompt("at which index you wants to add a color & color name.")
let newColorName= prompt("enter color name")

if (indexNo === 0){
    color[0] = newColorName
    document.write(" Updated Array: " + color)
}
else if(indexNo === 1){
    color[1] = newColorName
    document.write(" Updated Array: " + color)
}
else if(indexNo === 2){
    color[2] = newColorName
    document.write(" Updated Array: " + color)
}
else {
    alert("please enter correct index no")
}


// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser


let Color = [" red ", " blue ", " green ", " yellow ", " pink "]

let indexNo = +prompt(" at which index you wants to delete color(s)")
let howManyColor = +prompt("how many colors you wants to delete")

if (indexNo >= 0 && indexNo < Color.length && howManyColor > 0){
    Color.splice(indexNo, howManyColor)
    document.write(" Updated Array: " + Color)
}
else{
    alert ("write Correct index no")
}

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

let score = [320, 230, 480, 120]
document.write("Score of Students " + score + "<br>")
let orderedScore = score.sort((a, b) => a-b)
document.write(" Ordered Score of Students " + orderedScore)


// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

let Cities = [" karachi ", " lahore ","Islamabad", " quetta ", " peshawar "]
document.write("Cities List: " + Cities + "<br>")

let selectedCities = [Cities[2], Cities[3]]
document.write("Selected Cities List: " + selectedCities)


// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ["This ", " is ", " my ", " cat"];
document.write(`Array: ${arr} <br>`)

let joinArr = arr.join("")

document.write(`Join array: ${joinArr}`)

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

let arr = ["keyboard","mouse","printer", "monitor"]
while (arr.length) console.log(arr.shift());



// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

let arr = ["keyboard","mouse","printer", "monitor"]
while (arr.length) console.log(arr.pop());

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

let arr = ["Apple","Samsung", "Nokia","Sony","Hair"]

document.write(arr.join(" "))

let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write('<select>');
for (let i = 0; i < manufacturers.length; i++) {
    document.write(`<option value="${manufacturers[i]}">${manufacturers[i]}</option>`);
}
document.write('</select>');

// ======================= Chapter 17 - 20 starts =====================

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
let multidimensionalArray = [[], []]

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

let multidimensional = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,2]
]

for( i = 0; i <= multidimensional.length; i++){
    document.write(multidimensional[i].join(" ") + "<br>")
}


// 3.write a program to print numeric counting from 1 to 10

for( i=1; i<=10; i++){
    document.write(i + "<br>")
}

// 4. Write a program to print multiplication table of any number using for loop. Table number and lenght should be taken from user 

let tableNumber = +prompt("Enter table number")
let tableLenght = +prompt("Enter table lenght ")

for(i=1; i<=tableLenght; i++){
    document.write(`${tableNumber} x ${i} = ${i*tableNumber} ` + "<br>")
}

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

let  fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for (i=0; i<=fruits.length; i++){
    document.write(`${fruits[i]} <br> `)

}

document.write(`<br>`)

for (i=0; i<=fruits.length; i++){
    document.write(`Element at ${i} is ${fruits[i]} <br>`)
}

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write(`Counting <br>`)
for(i = 0; i <= 15; i++ ){
    document.write(` ${i},  `)
}
document.write(` <br> Reverse Counting <br>`)
for(i = 10; i >= 0; i-- ){
    document.write(`${i}, `)
}
document.write(`Even <br>`)
for(i = 0; i <= 20; i+=2 ){
    document.write(` ${i} `)
}
document.write(`ODD <br>`)
for(i = 1; i <= 20; i+=2 ){
    document.write(` ${i} `)
}
document.write(`Series <br>`)
for(i = 0; i <= 20; i+=2 ){
    document.write(` ${i}k `)
}



// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

let arr = ["cake", "apple pie", "cookie" , "chips", "patties"]

let userInput = prompt("Welcome to ABC bakery. What you want to order sir/ma'am ")

if( userInput === "cake"){
    alert("cake is available at index 0 in our bakery")
}
else if( userInput === "apple pie"){
    alert("apple pie is available at index 1 in our bakery")
}
else if( userInput === "cookie"){
    alert("cookie is available at index 2 in our bakery")
}
else if( userInput === "chips"){
    alert("chips is available at index 3 in our bakery")
}
else if( userInput === "patties"){
    alert("patties is available at index 4 in our bakery")
}
else{
    alert("This item is not available in our bakery")
}

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].


let A = [24, 53, 78, 91, 12];

let largest = A[0];

for (let i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}

console.log("The largest number is:", largest);

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]


let A = [24, 53, 78, 91, 12];

let smallest = A[0];

for (let i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i];
    }
}

console.log("The smallest number is:", smallest);



// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}




// Create a simple ATM withdrawal system where:
// The user enters the amount they want to withdraw.
// The system checks if the amount is available in the ATM.
// The system dispenses the correct number of bills in denominations of 100, 500, and 1000.
// If the amount is not a multiple of 100, show an error message.


let totalCash = 50000;


let amount = parseInt(prompt("Enter the amount you want to withdraw:"));


if (isNaN(amount) || amount <= 0) {
    alert("Invalid amount entered.");
} else if (amount % 100 !== 0) {
    alert("Please enter the amount in multiples of 100.");
} else if (amount > totalCash) {
    alert("Insufficient funds in ATM.");
} else {
    
    let thousandNotes = Math.floor(amount / 1000);
    amount %= 1000;

    let fiveHundredNotes = Math.floor(amount / 500);
    amount %= 500;

    let hundredNotes = Math.floor(amount / 100);

    alert(
        "Transaction Successful!\n\nBills Dispensed:\n" +
        "1000 x " + thousandNotes + "\n" +
        "500 x " + fiveHundredNotes + "\n" +
        "100 x " + hundredNotes
    );
}


// Create a parking fee calculator where:
// The first 2 hours are free.
// After 2 hours, the fee is $5 per hour.
// If the vehicle stays for more than 10 hours, a fixed rate of $50 is charged.


let hours = parseFloat(prompt("Enter number of hours parked:"));

if (isNaN(hours) || hours <= 0) {
    alert("Please enter a valid number of hours.");
} else {
    let fee = 0;

    if (hours <= 2) {
        fee = 0;
    } else if (hours > 10) {
        fee = 50;
    } else {
        fee = (hours - 2) * 5;
    }

    alert(`Parking duration: ${hours} hour(s)\nTotal fee: $${fee}`);
}



// Create a speed checking system where:
// If speed is <= 60 km/h, it's "Safe Speed".
// If speed is between 61 and 80 km/h, a warning is issued.
// If speed is above 80 km/h, a fine of $10 per km over 80 is calculated.



let speed = parseFloat(prompt("Enter your speed in km/h:"));

if (isNaN(speed) || speed < 0) {
    alert("Please enter a valid speed.");
} else {
    if (speed <= 60) {
        alert("Safe Speed. Keep it up!");
    } else if (speed <= 80) {
        alert("Warning: Please slow down!");
    } else {
        let extraSpeed = speed - 80;
        let fine = extraSpeed * 10;
        alert(`You are over the speed limit!\nFine: $${fine}`);
    }
}


// Create a loan interest calculator where:
// If the loan amount is ≤ $10,000, the interest rate is 5%.
// If it's between $10,001 and $50,000, the interest rate is 7%.
// If it's above $50,000, the interest rate is 10%.
// Calculate the total amount to be paid back.



let loanAmount = parseFloat(prompt("Enter your loan amount:"));


if (isNaN(loanAmount) || loanAmount <= 0) {
    alert("Please enter a valid loan amount.");
} else {
    let interestRate = 0;

    
    if (loanAmount <= 10000) {
        interestRate = 0.05;
    } else if (loanAmount <= 50000) {
        interestRate = 0.07;
    } else {
        interestRate = 0.10;
    }


    let interest = loanAmount * interestRate;
    let totalPayment = loanAmount + interest;

    alert(
        `Loan Amount: $${loanAmount.toFixed(2)}\n` +
        `Interest Rate: ${(interestRate * 100)}%\n` +
        `Interest: $${interest.toFixed(2)}\n` +
        `Total to Pay Back: $${totalPayment.toFixed(2)}`
    );
}


// A toll booth collects different tolls based on vehicle type:
// Car → $5
// Truck → $10
// Bus → $8
// If a vehicle doesn't have enough money, let it pass but record unpaid tolls.



let unpaidTolls = [];


let vehicleType = prompt("Enter vehicle type (car, truck, bus):").toLowerCase();
let moneyPaid = parseFloat(prompt("Enter money paid by the vehicle:"));


let tollAmount = 0;


if (vehicleType === "car") {
    tollAmount = 5;
} else if (vehicleType === "truck") {
    tollAmount = 10;
} else if (vehicleType === "bus") {
    tollAmount = 8;
} else {
    alert("Invalid vehicle type.");
}

if (tollAmount !== 0) {
    if (moneyPaid >= tollAmount) {
        alert(`Vehicle type: ${vehicleType}\nToll: $${tollAmount}\nPayment successful. Vehicle can pass.`);
    } else {
        alert(`Vehicle type: ${vehicleType}\nToll: $${tollAmount}\nNot enough money. Vehicle passes with unpaid toll.`);
        unpaidTolls.push({ vehicleType: vehicleType, tollAmount: tollAmount });
    }
}


console.log("Unpaid tolls:", unpaidTolls);


// A class of 3 students takes 4 subjects. Generate random marks, find average & grade.


for (let student = 1; student <= 3; student++) {

    let marks = [];
    let totalMarks = 0;
    
    for (let subject = 1; subject <= 4; subject++) {
        let mark = Math.floor(Math.random() * 101); // Generate random mark between 0 and 100
        marks.push(mark);
        totalMarks += mark;
    }


    let average = totalMarks / 4;


    let grade = "";
    if (average >= 90) {
        grade = "A";
    } else if (average >= 80) {
        grade = "B";
    } else if (average >= 70) {
        grade = "C";
    } else if (average >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    console.log(`Student ${student}:`);
    console.log(`Marks: ${marks.join(", ")}`);
    console.log(`Average: ${average.toFixed(2)}`);
    console.log(`Grade: ${grade}\n`);
}

// A university has 8 students who get random exam scores between 0 - 100. A student:
// Passes if score ≥ 50
// Fails if score < 50
//  The program calculates how many students passed and failed.



let passed = 0;
let failed = 0;


for (let student = 1; student <= 8; student++) {
    
    let score = Math.floor(Math.random() * 101);

    
    if (score >= 50) {
        passed++;
    } else {
        failed++;
    }

    
    console.log(`Student ${student} - Score: ${score} - ${score >= 50 ? 'Passed' : 'Failed'}`);
}


console.log(`\nTotal Passed: ${passed}`);
console.log(`Total Failed: ${failed}`);


// A cinema has 10 seats available. Customers randomly book seats and pay based on age:
// Children (0-12) → $5
// Adults (13-59) → $10
// Seniors (60+) → $7
//  The program books seats until they are full and calculates total revenue.



let seatsAvailable = 10;
let totalRevenue = 0;


while (seatsAvailable > 0) {
    
    let age = Math.floor(Math.random() * 100); 

    
    let price;
    if (age >= 0 && age <= 12) {
        price = 5; 
    } else if (age >= 13 && age <= 59) {
        price = 10; 
    } else {
        price = 7; 
    }


    totalRevenue += price;
    seatsAvailable--;


    console.log(`Customer with age ${age} booked a seat for $${price}.`);
}


console.log(`\nTotal Revenue: $${totalRevenue}`);



// A parking lot has 15 cars parked. Each car is parked for a random number of hours (1-10 hours).
// Up to 3 hours → $3 per hour
// 4-6 hours → $2 per hour
// 7+ hours → $1 per hour
//  The program calculates total parking fees collected     


let totalRevenue = 0;


for (let car = 1; car <= 15; car++) {
    
    let hours = Math.floor(Math.random() * 10) + 1;

    
    let fee;
    if (hours <= 3) {
        fee = hours * 3; 
    } else if (hours >= 4 && hours <= 6) {
        fee = hours * 2; 
    } else {
        fee = hours * 1; 
    }

    
    totalRevenue += fee;


    console.log(`Car ${car} - Hours: ${hours} - Fee: $${fee}`);
}


console.log(`\nTotal Parking Fees Collected: $${totalRevenue}`);


// A library has 20 borrowers who return books late by 1-15 days.
// 1-5 days late → $2 per day
// 6-10 days late → $3 per day
// 11+ days late → $5 per day
//  The program calculates total late fees collected.


let totalLateFees = 0;


for (let borrower = 1; borrower <= 20; borrower++) {
    
    let daysLate = Math.floor(Math.random() * 15) + 1;

    
    let lateFee;
    if (daysLate >= 1 && daysLate <= 5) {
        lateFee = daysLate * 2; 
    } else if (daysLate >= 6 && daysLate <= 10) {
        lateFee = daysLate * 3; 
    } else {
        lateFee = daysLate * 5; 
    }

    
    totalLateFees += lateFee;

    
    console.log(`Borrower ${borrower} - Days Late: ${daysLate} - Late Fee: $${lateFee}`);
}


console.log(`\nTotal Late Fees Collected: $${totalLateFees}`);


// A gas station serves 10 cars, each requesting a random amount of fuel (5-50 liters).
// Up to 20 liters → $1.2 per liter
// 21-35 liters → $1.0 per liter
// 36+ liters → $0.8 per liter
//  The program calculates total revenue from all cars.


let totalRevenue = 0;


for (let car = 1; car <= 10; car++) {
    
    let fuelRequested = Math.floor(Math.random() * 46) + 5; 

    
    let pricePerLiter;
    if (fuelRequested <= 20) {
        pricePerLiter = 1.2; 
    } else if (fuelRequested >= 21 && fuelRequested <= 35) {
        pricePerLiter = 1.0; 
    } else {
        pricePerLiter = 0.8; 
    }


    let carRevenue = fuelRequested * pricePerLiter;
    totalRevenue += carRevenue;


    console.log(`Car ${car} - Fuel Requested: ${fuelRequested} liters - Revenue: $${carRevenue.toFixed(2)}`);
}


console.log(`\nTotal Revenue: $${totalRevenue.toFixed(2)}`);
