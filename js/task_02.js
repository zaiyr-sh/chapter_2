/* TASK 02 */
function findLetter(name, char){
    name = name.split("");
    var count = 0;
    for (var i = 0; i < name.length; i++){
        if (char.charAt(char) == name[i]){
            count = count + 1;
        }
    }
    return count;
}
console.log(findLetter("john", "o"));