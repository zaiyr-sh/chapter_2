/* TASK 19 */
function Dog(name) {
	this.name = name;
}
Dog.prototype = {
	constructor: Dog,
	numLegs: 4,
	eat: function() {
		console.log('He eats');
	},
	describe: function() {
		console.log('Describe sth');
	}
};
