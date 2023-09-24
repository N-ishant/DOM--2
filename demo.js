//TRAVERSING THE DOM
let itemList = document.querySelector('#items');
//parentNode
/*
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'blue';
console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);
*/

//parentElement
/*
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'brown';
console.log(itemList.parentElement.parentElement);
console.log(itemList.parentElement.parentElement.parentElement);
*/

//childNodes
// //console.log(itemList.childNodes);  

//children
// //console.log(itemList.children);
// //console.log(itemList.children[1]);
// //itemList.children[1].style.backgroundColor = 'yellow';

/*  childNodes returns child nodes (element nodes, text nodes, and comment nodes).
 children returns child elements (not text and comment nodes).   */

//firstChild
// //console.log(itemList.firstChild); // bad practice i.e useless

//firstElementChild
// //console.log(itemList.firstElementChild); //GOOD PRACTICE
// //itemList.firstElementChild.textContent = 'Hello 1';
// //itemList.firstElementChild.style.color = 'blue';

//Select the first child of the ul(which is the first li element)
let firstItem = itemList.firstElementChild;

//Add "HEllo" before Item 1
firstItem.textContent = "HEllo " + firstItem.textContent;

/* firstChild returns the first child node (an element node, a text node or a comment node). 
Whitespace between elements are also text nodes. 
firstElementChild returns the first child element (not text and comment nodes).  */

//lastChild
// //console.log(itemList.lastChild); // bad practice i.e useless

//lastElementChild
/*
console.log(itemList.lastElementChild); //GOOD PRACTICE
itemList.lastElementChild.textContent = 'Hello 4';
itemList.lastElementChild.style.color = 'red';
*/

//nextSibling
// //console.log(itemList.nextSibling);   //bad practice i.e useless

//nextElementSibling
// //console.log(itemList.nextElementSibling); //GOOD PRACTICE

//previousSibling
// //console.log(itemList.previousSibling);  //bad practice i.e useless

//previousElementSibling
// //console.log(itemList.previousElementSibling);   //GOOD PRACTICE
// //itemList.previousElementSibling.style.color = 'green';

let head = document.querySelector('#header-title');
head.textContent = "HEllo " + head.textContent;

//CREATE ELEMENT

//Create a div
let newDiv = document.createElement('div');

//ADD a Class
newDiv.className = 'hello';

//ADD ID
newDiv.id = 'hello1';

// ADD Attribute
newDiv.setAttribute('title','Hello Div');

//Create Text Node
let newDivText = document.createTextNode('Hello World');

//ADD Text to div
newDiv.appendChild(newDivText);

//Putting in DOM
let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);