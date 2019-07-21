/* TASK 18 */
function Dog(name, color) {
    this.name = name;
    this.color = color;
    // this.numLegs = numLegs;
}

var terrier = new Dog("Bruce", "red");
var ownProps = [terrier.name];
console.log(ownProps);

Dog.prototype.numLegs = 4;
var prototypeProps = [terrier.numLegs]
console.log(prototypeProps);