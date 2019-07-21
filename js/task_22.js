/* TASK 22 */
function Cat(name) {
    this.name = name; 
}

Cat.prototype = {
    constructor: Cat
};

function Bear(name) {
    this.name = name; 
}

Bear.prototype = {
    constructor: Bear
};

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    // Add your code below this line
    eat: function() {
        console.log("nom nom nom");
    }
};

Cat.prototype = Object.create(Animal.prototype);

let someCat = new Cat();
someCat.eat();
