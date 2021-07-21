var fruits = ['Apple' , 'Banana' , 'Grapes'];

var x = fruits.length;

for(var i =0 ; i<x ; i++)
{
    console.log(fruits[i]);
}

var a;

for(a in fruits)
{
    console.log(fruits[a]);
}

for(a of fruits)
{
    console.log(a);
}