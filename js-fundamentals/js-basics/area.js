// JavaScript program to find the area of a triangle 

var s1=5;
var s2=6;
var s3=7;

// semi-perimeter
var s= (s1+s2+s3)/2;

// area
var area = Math.sqrt(s*((s-s1)*(s-s2)*(s-s3)));

console.log(area);

// to see only fixed digits after decimal point
var rounded = parseFloat(area.toFixed(3));
console.log(rounded);

// another way

// console.log(area.toPrecision(4));   returns a string

var rounded = parseFloat(area.toPrecision(5));
console.log(rounded);
