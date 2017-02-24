(function () {
    'use strict';
    var newArray = ['zero', 'one', 'two', 'three'];
    newArray.forEach(function (value, index) {
        console.log('this is the value:' + value + '. Annd this is the index number:' + index);
    });

    console.log(newArray.every(function(value){
        return typeof value !== 'string';
    }));// if the values of array type all are string then it will return Ture other wise will return false.
    
    
    var mixArray = [1, 'two', 3, 'four', 5, 'six'];
    console.log(mixArray.filter(function(value){
        return typeof value == 'number';
    }));
    
    
    console.log(newArray.map(function(value){
        return value.toUpperCase();//map just make an new array and then convert all value ToUpperCase
    }));
}());
