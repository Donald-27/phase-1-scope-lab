// Write your solution in this file!
// Declare a variable in global scope called customerName
var customerName = 'bob';

// Function to uppercase the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to declare a variable called bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Function to overwrite the bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declaring a constant called leastFavoriteCustomer
const leastFavoriteCustomer = 'initial value';


function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value'; 
}
module.exports = {
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer
};
