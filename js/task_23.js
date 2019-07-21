/* TASK 23 */
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

function Dog() { }

// Animal.prototype.call(this);
// Add your code below this line
Dog.prototype = {
    constructor: Dog,
};

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"