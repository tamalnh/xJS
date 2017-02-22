(function(){
    'use strict';
    var testArray = ['one', 'two', 'three', 'four'];
    
    console.log(testArray.length);
    
    testArray.push('five');// push will add a value  in array from the end
    testArray.unshift('zero');// unshift will add a value  in array from first
    testArray.pop();// pop will remove a value automatically in array from the end
    testArray.shift();// shift shift will remove a value automatically in array from the first
    console.log(testArray);
    
    //testArray.splice(0,2); // splice will remove array item which number you select
    testArray.splice(0,4, 'a', 'b', 'c', 'd'); // splice will remove first Four array item then a,b,c,d replace there.
    console.log(testArray);
    
    
}());