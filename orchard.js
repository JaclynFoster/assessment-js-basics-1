///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

let totalAcres = 0;
for(let i = 0; i < fujiAcres.length; i++) {
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i];
}
console.log(totalAcres);
console.log("--------------------------------")
//EXPLANATION: Created initial for loop using only 1 array in loop.
//You only need 1 array.length in for loop to initialize the loop. While looping add
// all numbers in array index added together to create totalAcres

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

let averageDailyAcres = totalAcres / fujiAcres.length + galaAcres.length + pinkAcres.length;
console.log(averageDailyAcres);
console.log("---------------------------------------");
//EXPLANATION: Divide your total acres by each arrays length to get the average daily acres

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0
// CODE HERE

while (acresLeft > 0) { 
    acresLeft -= averageDailyAcres;
    days += 1;
}
console.log(days);
//EXPLANATION: You have already calculated the average daily acres, so while the loop loops through your
//code until acres = 0 you must subtract it by the average daily acres. This shows how many acres you can
//go through each day based on your average amount of acres per day(23)
//you then will add each iteration of the loop to your days variable to tell you how many days it took to go 
//through the rest of your acres left
console.log("--------------------------------------------")
// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

 let fujiTons = [];
 let galaTons = [];
 let pinkTons = [];

for (let i = 0; i < fujiAcres.length; i++) {
 fujiTons.push(fujiAcres[i] *= 6.5);
 galaTons.push(galaAcres[i] *= 6.5);
 pinkTons.push(pinkAcres[i] *= 6.5);
}
console.log(fujiTons, galaTons, pinkTons);

//EXPLANATION: Rather than using the slice method and including it in your Ton's variables I added an empty
//array to each variable and created a standard for loop that will loop through each array fully, it will
//then push the totals  in tons to your empty arrays. Acres * 6.5 equals tons. This does not alter the original array.

console.log("----------------------------------")

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

 let fujiPounds = [];
 let galaPounds = [];
 let pinkPounds = [];

 for(let i = 0; i < fujiTons.length; i++) {
    fujiPounds.push(fujiTons[i] *= 2000);
    galaPounds.push(galaTons[i] *= 2000);
    pinkPounds.push(pinkTons[i] *= 2000);
 }

 console.log(fujiPounds, galaPounds, pinkPounds);


//EXPLANATION: Much like the previous problem I have created new variable and added empty arrays. Then I
//created a for loop to loop through all arrays fully. The results of each index * 2000 will be pushed
//into your empty arrays giving you total index amount in tons

console.log("-----------------------------------");

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

 let fujiProfit = 0;
 let galaProfit = 0;
let pinkProfit = 0;

for (let i = 0; i < fujiPounds.length; i++){
    fujiProfit += fujiPounds[i] *= .89;
    galaProfit += galaPounds[i] *= .64;
    pinkProfit += pinkPounds[i] *= .55;
}
console.log(fujiProfit, galaProfit, pinkProfit);

//EXPLANATION: I created new variables setting them equal to 0 in order to plug in my profits for each
//array once it iterates through the loop. I created a for loop to loop through the newly created pounds array
//from above due to pricing being based on lbs. While it is looping each index of every array is being multiplied
//by the initial cost of each array. Values stored in new profit variables
 console.log("------------------------------");

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
let totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log(totalProfit);

//EXPLANATION: I created a new variable to log the total Profit of each arrays profit. I added all 
//profits from each array using +  and set it equal to my new total profit variable. 