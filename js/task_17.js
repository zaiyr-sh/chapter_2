function Dog(name, color) {
    this.name = name;
    this.color = color;
    // this.numLegs = numLegs;
}

var hound = new Dog("Albert", "gray");
var terrier = new Dog("Bruce", "red");

Dog.prototype.numLegs = 4;
console.log(terrier.numLegs);
console.log(hound.numLegs);