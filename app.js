var car = "subaru";
var age = 25;
var numbers = [1, 2, 3, 4];
// **String Tests**
// Test 1: Equality (True)
console.log("Is car == 'Subaru'? I predict True.");
console.log(car == 'Subaru'); // True (case-insentive)
// Test 2: Stricke equality (False)
console.log("Is car === 'Subaru'? I predict True.");
console.log(car === 'Subaru'); // False (case-insentive)
// Test 3: Inequality (True)
console.log("Is car != 'Toyota'? I predict True.");
console.log(car != 'Toyota'); // True
// Test 4: Inequality (False)
console.log("Is car !== 'Subaru'? I predict False.");
console.log(car !== 'Subaru'); // False (case-sensitive)
// **Lowercase Function Tests**
// Test 5: Lowercase Conversion (True)
console.log("Is car.toLowerCase() == 'Subaru'? I predict True.");
console.log(car.toLowerCase() == 'Subaru'); // True (converted to lowercase)
// Test 6: Lowercase Conversion (False)
console.log("Is car === car.toLowerCase()? I predict False.");
console.log(car === car.toLowerCase()); // False (original value remains uppercase)
// **Numerical Tests**
// Tests 7: Equality (True)
console.log("Is age == 25? I Predict True.");
console.log(age == 25); //True
// Tests 8: Inequality (False)
console.log("Is age != 30? I Predict True.");
console.log(age != 30); //True
// Tests 9: Greater than (False)
console.log("Is age > 30? I Predict False.");
console.log(age > 30); //False
// Tests 10: Less than or equal (True)
console.log("Is age <= 25? I Predict True.");
console.log(age <= 25); //True
// **Logical Operators**
// Tests 11: AND (True)
console.log("Is age > 20 && age < 30? I Predict True.");
console.log(age > 20 && age < 30); // True (both conditions met)
// Tests 12: OR (False)
console.log("Is age > 30 || age < 18? I Predict False.");
console.log(age > 30 || age < 18); // False (neither conditions met)
// ** Array Tests**
// Tests 13: In Array (True)
console.log("Is 3 in numbers? I Predict True.");
console.log(3 in numbers); // True (checks for index existance)
// Tests 14: Not in array (False)
console.log("Is 5 not in numbers? I Predict True.");
console.log(5, not in numbers); // True (checks of "in" operator)
