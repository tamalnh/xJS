(function(){
   'use strict';
    
    var testString = "This is test string...";
    console.log(testString.length);
    
    // Split method it will convert your string value into an array
    console.log(testString.split(' '));
    
    // IndexOf method
    console.log(testString.indexOf('t', 1));
    console.log(testString.lastIndexOf('t'));
    
    console.log(testString.toUpperCase());
    console.log(testString.toLocaleLowerCase());
    
    console.log(testString.substring(5));
    console.log(testString.substring(0,4));
    
    console.log(testString.slice(5));
    console.log(testString.slice(-6));
    
    console.log("    this    ".trim());
    
    
}());