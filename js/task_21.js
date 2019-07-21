/* TASK 21 */
function Dog(name) {
    this.name = name; 
}
Dog.prototype = {
    constructor: Dog,
    numLegs: 4, 
    eat: function() {
        console.log("nom nom nom"); 
    }, 
    describe: function() {
        console.log("My name is " + this.name); 
    }
};

var terrier = new Dog("Bruce", "red", 4);

console.log(Dog.prototype.isPrototypeOf(terrier));
