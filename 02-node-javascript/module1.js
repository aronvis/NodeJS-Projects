function myFunction() {
	console.log('Function was called!')
}

var myString = 'String!';

// Exports the content from one file to another
// Passes the function reference to the other page
module.exports.myFunction = myFunction;
module.exports.myString = myString;
