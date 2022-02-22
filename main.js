const prompt = require('prompt-sync')({sigint:true});
console.log('\n');1
console.log('Welcome to the To-Do List Manager Application!');
console.log('\n');
console.log('==============================================');
console.log('\n');
console.log('Your to-do list is empty.');
console.log('\n');
console.log('~ Seelect an action ~');
console.log('[1] Create a to-do item');
console.log('[2] Complete a to-do item');

let userAction = prompt('> ');

let toDoItem = '';

let isComplete = true;

let toDoArray = [['ex', isComplete]];

if (userAction = '1'){
    console.log('~ Creating a new to-do item ~');
    console.log('What is the to-do item called?');
    toDoItem = prompt('> ');
    isComplete = false;
    toDoArray[toDoArray.length-1][0] = toDoItem;
    toDoArray[toDoArray.length-1][1] = isComplete;
    console.log(toDoArray);
}