// O(1) Constant Time (The Best)

const users = ['Alice', 'Bob'];
const numbers = [10, 20, 30];

function getFirstItem(arr) { 
    return arr[0];
}

console.log(getFirstItem(users));   
console.log(getFirstItem(numbers)); 



//O(n) - Linear Time (Fair)

function findUser(arr, name) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === name) {
            return true; 
        }
    }
    return false;
}
const users = ['Alice', 'Bob', 'Charlie', 'David'];

const result1 = findUser(users, 'Bob');
const result2 = findUser(users, 'Zack');


console.log("Is Bob in the list? " + result1); 
console.log("Is Zack in the list? " + result2); 




//O(n^2) - Quadratic Time (Slow - Avoid)

function matchAllUsers(arr) {
    for (let i = 0; i < arr.length; i++) { 
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i],arr[j]);
        }
    }
}

const team = ['Alice', 'Bob', 'Charlie'];
matchAllUsers(team);

