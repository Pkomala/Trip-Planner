//First, let's set up a few variables to store some numeric values: our estimated average speed (57), our car's miles-per-gallon (27), and the number of gallons (13) in our car's tank. Create variables named averageSpeed, mpg, and gallons.Then, assign the provided values to these newly created variables.

let averageSpeed = 57;
let mpg = 27;
let gallons = 13;


//Speaking of our destination, let's store the name of the town we're traveling to: Ithaca, NY. Tasks: Create a variable named destination.Then, assign a string value to your newly created variable. The value should be the following.

let destination = "Ithaca, NY";

//We're going to visit some friends along the way, so our trip will be split up into three parts. Let's find the total mileage we'll be driving. The first leg of the trip will be approximately 74 miles, the second about 63 miles, and the final leg will be 167 miles. Tasks: Create a variable named tripMiles. Then, calculate and store the sum of the three trip legs in the tripMiles variable.

let tripMiles = 74 + 63 + 167;

//Now, let's start calculating some of our trip statistics. As mentioned, one of the things we'd like to know is how long our trip will take. Tasks: Create a variable named time. Then, use the tripMiles and averageSpeed variables to calculate the average time it will take to complete the three legs of the trip.Store this value in the newly created time variable.

let time = tripMiles/ averageSpeed;
console.log(time);

// Now, let's calculate our car's gas tank range, using the mpg and gallons variables you created earlier. Tasks: Create a variable named tankRange. Then, calculate the total tank range using the mpg and gallons variables and store this value in your newly created variable.

let tankRange = mpg * gallons;
console.log(tankRange);

// Will we make it there on one tank? Calculate your car's remaining range after completing the trip. Tasks: Create a variable named leftoverGasRange. Then, calculate the remaining range (using the tankRange and tripMiles variables you declared earlier) and store this value in your newly created variable

let leftoverGasRange = tankRange - tripMiles;
console.log(leftoverGasRange);

console.log("Trip to " + destination);
