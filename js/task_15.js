/* TASK 15 */
function Dog(name, color, numLegs) {
    this.name = name;
    this.color = color;
    this.numLegs = numLegs;
}
var terrier = new Dog("Bruce", "red", 4);
// console.log(terrier);

var ownProps = [terrier.name, terrier.color, terrier.numLegs];
console.log(ownProps);

