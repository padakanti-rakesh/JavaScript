/* Arthamatic Operaters*/

var x = 5;
var y =2;

var result = x+y;
console.log('Value of results is '+result);

var result = x-y;
console.log('Value of results is '+result);

var result = x*y;
console.log('Value of results is '+result);

var result = x/y;
console.log('Value of results is '+result);

var result = x%y;
console.log('Value of results is '+result);

//var result = x ** y;
console.log('Value of results is '+result);

var a = 10;
var b = 2 ;
var outCome = a * b--;

console.log('The Value of outCome is '+outCome);
console.log('The Value of b is '+b);

/***********Assigment Operaters***********/
var z=10;

z += 5;
console.log('value of z is '+z)

z -= 5;
console.log('value of z is '+z)

z *= 5;
console.log('value of z is '+z)

z /= 5;
console.log('value of z is '+z)

z %= 5;
console.log('value of z is '+z)

z *= 5;
console.log('value of z is '+z)


/***********Compparison Operaters***********/

var r = 10;
var n = 20;

var result1 = r===n;
console.log('The value of result1 is '+result1);

var result2 = r!=n;
console.log('The value of result1 is '+result2);

var result3 = r>n;
console.log('The value of result1 is '+result3);

var result4 = r>=n;
console.log('The value of result1 is '+result4);

var result5 = r<n;
console.log('The value of result1 is '+result5);

var result6 = r<=n;
console.log('The value of result1 is '+result6);

var result7 = r<n ? r:n;
console.log('The value of result7 is '+result7);

/*************Logical Operators***********/

var d = true;
var f = false;

console.log(d&&f);

console.log(d||f);

console.log(!f);

console.log(!d);

/******************Type Operators******/
var u = new Number(123);
console.log('type  of u is '+ typeof u);

console.log(u instanceof Number);

/****************Bit Wise Operators************/

var d=5;
var t=6;

console.log(d&t);
console.log(d|t);
console.log(d^t);
console.log(~d);
console.log(d<<1);
console.log(d>>1);



