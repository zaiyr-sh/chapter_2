/* TASK 12 */
var dog = {
	name: 'Sharik',
	numLegs: 4,
	sayLegs: function() {
		return this.name + ' has ' + this.numLegs + ' legs';
	}
};

console.log(dog.name, dog.numLegs);
console.log(dog.numLegs);
console.log(dog.sayLegs());
