/* TASK 14 */
function Dog(name, color, numLegs) {
    this.name = name;
    this.color = color;
    this.numLegs = numLegs;
}

var terrier = new Dog("Bruce", "red", 4);

console.log(terrier.name);
console.log(terrier.color);
console.log(terrier.numLegs);
