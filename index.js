// 1-)

// function createAdder(numToAdd) {
//     return function(num) {
//       return num + numToAdd;
//     }
//   }
// let addFive = createAdder(5);
// console.log(addFive(10)); // 15
// console.log(addFive(20)); // 25

// 2-)

// function searchArray(arr, value) {
//     if (arr.length === 0) {
//       return false; // base case: value not found in array
//     } else if (arr[0] === value) {
//       return true; // base case: value found in array
//     } else {
//       return searchArray(arr.slice(1), value); // recursive case: search the rest of the array
//     }
//   }
//   let arr = [1, 2, 3, 4, 5];
//   console.log(searchArray(arr, 3)); // true
//   console.log(searchArray(arr, 6)); // false
    
// 3-)

// function addParagraph(text) {
//     const newParagraph = document.createElement('p');
//     newParagraph.textContent = text;
//     document.body.appendChild(newParagraph);
//   }
//   addParagraph('This is a new paragraph!');
  
// 4-)

// function addListItem(text) {
//     const newListItem = document.createElement('li');
//     newListItem.textContent = text;
//     const unorderedList = document.querySelector('ul');
//     unorderedList.appendChild(newListItem);
//   }
//   addListItem('This is a new list item!');
  
// 5-)

// function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color;
//   }
//   const myElement = document.querySelector('#my-element');
//   changeBackgroundColor(myElement, 'red');
    
// 6-)

// function saveObjectToLocalStorage(key, object) {
//     localStorage.setItem(key, JSON.stringify(object));
//   }
//   const myObject = { name: 'John', age: 30 };
//   saveObjectToLocalStorage('myObject', myObject);

// 7-)

// function getObjectFromLocalStorage(key) {
//     const objectString = localStorage.getItem(key);
//     return JSON.parse(objectString);
//   }
//   const myObject = getObjectFromLocalStorage('myObject');
//   console.log(myObject);

// 8-)

// function saveObjectPropertiesToLocalStorage(obj) {
//     // Save each property to localStorage
//     Object.keys(obj).forEach(key => {
//       const value = obj[key];
//       localStorage.setItem(key, JSON.stringify(value));
//     });
  
//     // Retrieve the saved properties and return as a new object
//     const savedObj = {};
//     Object.keys(obj).forEach(key => {
//       const valueString = localStorage.getItem(key);
//       savedObj[key] = JSON.parse(valueString);
//     });
  
//     return savedObj;
//   }
//   const myObject = { name: 'John', age: 30, occupation: 'Developer' };
//   const savedObject = saveObjectPropertiesToLocalStorage(myObject);
//   console.log(savedObject);
    