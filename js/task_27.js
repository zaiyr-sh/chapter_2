function createBase(num){
    return function(six){
        return num + six;
    }
}

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27