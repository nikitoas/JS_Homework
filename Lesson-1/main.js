//Homework 05.04.2022

//Способ 1
var a = 17,
    b = 3,
    c;

c = a; 
a = b; 
b = c; 

// Способ 2пш
var a = 17,
    b = 3;

a += b; 
b = a - b; 
a -= b; 