// All questions should be printed to your Browser's console using console.log()

//Using backtick(Template Literal) to print assignment instruction.
console.log(`1.  Create an array called ages
    that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
a.  Programmatically subtract the value of the first element
    in the array from the value in the last element of the array.
    Do not use numbers to reference the last element, find it programmatically.
    ages[7] - ages[0] is not allowed!
b.  Add a new age to your array and repeat the step above to ensure it is dynamic.
    (works for arrays of different lengths).
c.  Use a loop to iterate through the array and calculate the average age.`);

//Creating an array called "ages"
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// a. subtracting value of the first element from last element
let subAge = ages[(ages.length - 1)] - ages[0];
console.log(subAge);

// b. adding a new age at the end of array
ages.push(30);
console.log(ages);
console.log(ages[(ages.length - 1)] - ages[0]);
// tried with console.log(subAge); first, but it did not work.

// c. a loop to calculate the average
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let average = sum / ages.length;
console.log(average);


//-----------------------------------------------------


console.log(`2.  Create an array called names that contains 
    the following values : 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
    Use a loop to iterate through the array and calculate
    the average number of letters per name.
    Use a loop to iterate through the array again and concatenate
    all the names together, separated by spaces.`);

// Creating an array "names"
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//Carculating the average number of letters per name.
let numberOfName = 0;
for (let i = 0; i < names.length; i++) {
    numberOfName += names[i].length; 
    //length is nessesary because we are counting the letters per name
}
let averagePerName = numberOfName / names.length;
console.log(averagePerName);

//Concatenate all the names together, separated by spaces
let concatName = '';
for (let i = 0; i < names.length; i++) {
    concatName += names[i] + ' '; //make sure to have a space
}
console.log(concatName);



//-----------------------------------------------------


console.log(`3.  How do you access the last element of any array?`);
console.log(`array.length - 1)`)


//-----------------------------------------------------


console.log(`4.  How do you access the first element of any array?`);
console.log(`array[0]`)


//-----------------------------------------------------


console.log(`5.  Create a new array called nameLengths.
    Write a loop to iterate over the previously created names array
    and add the length of each name to the nameLengths array.
    For example:

    let names = ["Kelly", "Sam", "Kate"];    // starting with this array
    let nameLengths = [5, 3, 4];             // create a new array`);

//Creating a new array
//names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
    //length is nessesary to count the letters
}
console.log(nameLengths);

//-----------------------------------------------------


console.log(`6.  Write a loop to iterate over the nameLengths array
    and calculate the sum of all the elements in the array.`);

// nameLengths = [3, 5, 3, 5, 4, 3]
let sumOfNameLengths = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sumOfNameLengths += nameLengths[i];
}
console.log(sumOfNameLengths);

//-----------------------------------------------------


console.log(`7.  Write a function that takes two parameters,
    word and n, as arguments and returns the word concatenated
    to itself n number of times.
    (i.e. if I pass in 'Hello' and 3,
    I would expect the function to return 'HelloHelloHello').`);

//new function with two parameters
function repeatHello(word, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += word;
    }
    return result;
}
console.log(repeatHello('Hello', 3));
//arguments to get a result of 'HelloHelloHello'

//-----------------------------------------------------


console.log(`8.  Write a function that takes two parameters,
    firstName and lastName,and returns a full name.
    The full name should be the first and the last name
    separated by a space.`);

// a function to create fullName
function fullName(firstName, lastName) {
    let result = firstName + ' ' + lastName;
    // '(space)' is added to make a space between the names
    return result;
}
console.log('Alice', 'Shin');


//-----------------------------------------------------


console.log(`9.  Write a function that takes an array of numbers
    and returns true if the sum of all the numbers in the array
    is greater than 100.`);

// I have an array with numbers called "ages"    
// ages = [3, 9, 23, 64, 2, 8, 28, 93];
function sumOfAllNumbers(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += ages[i];
    }
    return sum > 100;
}
console.log(sumOfAllNumbers(ages));

//-----------------------------------------------------


console.log(`10.  Write a function that takes an array of numbers
    and returns the average of all the elements in the array.`);

// I have an array with numbers called "ages"
// let ages = [3, 9, 23, 64, 2, 8, 28, 93, 30];
function averageOfAllElements(num) {
    let sum = 0;
    for(let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    let average = sum / ages.length;
    return average;
}
console.log(averageOfAllElements(nameLengths));


//-----------------------------------------------------


console.log(`11.  Write a function that takes two arrays of numbers
    and returns true if the average of the elements in the first array
    is greater than the average of the elements in the second array.`);

// I already have two arrays with numbers. ages, namelengths
function greaterThan(array1, array2) {
    let sum1 = 0;
    for (let i = 0; i < array1.length; i++) {
        sum1 += array1[i];
    }
    // making same condition for both sum to get a result
    let sum2 = 0;
    for (let i = 0; i < array2.length; i++) {
        sum2 += array2[i];
    }
    // carculating average for both arrays
    let average1 = sum1 / array1.length;
    let average2 = sum2 / array2.length;
    // return true when the elements in the first array is greater than second.
    return average1 > average2;
}    
// ages = [3, 9, 23, 64, 2, 8, 28, 93, 30];
// nameLengths = [3, 5, 3, 5, 4, 3]
// in question 1, we got the average of ages = 28
// in question 10, we got the average of nameLengths = 2
// Therefore, 28 is greater than 2. result is true.

console.log(greaterThan(ages, nameLengths));

//-----------------------------------------------------


console.log(`12.  Write a function called willBuyDrink
    that takes a boolean isHotOutside, and a number moneyInPocket,
    and returns true if it is hot outside
    and if moneyInPocket is greater than 10.50.`);

// to make both condition checked, used && operator
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(false, 20));
// result comes out as false, eventhough one condition is qualified


//-----------------------------------------------------


console.log(`13.  Create a function of your own that solves a problem.
    In comments, write what the function does and why you created it.`);

// Let's plan for vacation. I will go vacation if I have enough money.
// to chek if I have enough, let's see how much money I make per month.
// and the essential moneys are for the fees that I have to pay monthly.
// such as rent, car insurance etc.
let resentPayCheck = [4000, 3800, 4100, 2700, 3500]
let essentialMoney = [2300, 3500, 3000, 2000, 2700]
function needVacation(array1, array2) {
    let sum1 = 0;
    for (let i = 0; i < array1.length; i++) {
        sum1 += array1[i];
    }
    let sum2 = 0;
    for (let i = 0; i < array2.length; i++) {
        sum2 += array2[i];
    }
    let average1 = sum1 / array1.length;
    let average2 = sum2 / array2.length;
    return average1 > average2 && average1 - average2 > 1000;
}
// I will say if I have more that 1000 of balance, I will go
console.log(needVacation(resentPayCheck, essentialMoney));
// No! I can't go vacation.

// Let's check why can't I
// This is average of my rescent paychek
function averagePayCheck(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i]
    }
    let average = sum / resentPayCheck.length;
    return average;
}
console.log(averagePayCheck(resentPayCheck));

// This is average of my essential uses
function averageEssential(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i]
    }
    let average = sum / essentialMoney.length;
    return average;
}
console.log(averageEssential(essentialMoney));