function countries(arr){
    var count = [];
    var result = 0;

    for (var i = 0; i< arr.length; i++){
        count.push(arr[i].length);
    }
     return result = Math.max.apply(0, count);



// var bigCountry = "";
//     for (var i = 0; i < countries.length - 1; i++){
//         if (countries[i].length > countries[i + 1].length){
//             bigCountry = countries[i];
//         }
//     }
//     return bigCountry;
}
 console.log(countries(["Afghanistan","Albania","Algeria","Andorra","Angola"]));