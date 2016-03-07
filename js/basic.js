var a = 1;
// a is a integar
var b = 0.5;
//be is a float
var c = "webdxd";
//c is a string
var d="1"
console.log("this is my first javascript file");
console.log(a);
console.log(b);
console.log(c);
console.log(d);

var arr = [1,"learn",3,5,true];
console.log(arr);
console.log(arr[1]);
var myQuote = "I learn";
console.log("I "+ arr[1]);
console.log(myQuote);
a=8;
a = a+b;
//add a 1 to b 0.5 and put the result to a
console.log (a);
var bool = true;
bool=!true;
var isTrue =!bool;

console.log(isTrue);
arr= [isTrue, a, b, c];
console.log(arr);
a=11;
b=2;
b=a%b;
console.log(b);
var book={
title: "Harry Potter",
price: 29,
description:"A bot who knows magic"
}

book.price = book.price+=2;
//incremenet by 2
book.price ++
//incremenet by 1 -- decrement by 1
console.log(book);
console.log("Title: "+ book.title);
console.log("price: "+ book.price);
console.log("description: "+book.description);

var book1 = {
 title: "Harry Potter",
 price: 29,
 description: "A boy who knows magic",
 section: ["section1", "sec2", "sec3"]
}

var book2 = {
 title: "Lord of Rings",
 price: 50,
 description: "A story of ring."
}

var book3 = {
 title: "Lord of Rings 2",
 price: 49,
 description: "A story of ring."
}

var bookStore = [book1, book2, book3];

book1.title = "Harry Potter 2";

book1.price += 2;
// increment by a number

book1.price ++;
// increment by 1

book1.price --;
// decrement by 1

console.log(book1);
console.log("Title: " + book1.title);
console.log("Price: " + book1.price);
console.log("Description: " + book1.description);

console.log(bookStore);

console.log(bookStore[0].section[0]);

// bookStore.push("My Book");

console.log(bookStore);

// bookStore=bookStore.slice(1);

console.log(bookStore);

console.log(a);
console.log(b);

console.log(a==b);

var animal ="cat";
if(animal =="cat"){
	console.log("meow");
} 
else if(animal ==="pig"){
	console.log("xxxxxx")
}
else if(animal ==="dog"){
console.log("wuff")
}
else{
	console.log("unknow")
}

switch (animal) {
	case "cat" :
	console. log("meow");
	break;
	case "dog" :
	console.log("wuff");
	break;
	case "pig" :
	console.log("xxxxxx");
	break;
	default :
	console.log("unknow");
}

var a=10;

while (a>=0){
 console.log(a);
 a--; 
}

function addPrice(store, multi){
	for (var i =0; i< store.length; i++){
	store[i].price*=multi;
    console.log(store[i]);
}
 // return "book price added by " + incre;
 return "multi price";
}

console.log(addPrice(bookStore, 10));
console.log(addPrice(bookStore, 100));






