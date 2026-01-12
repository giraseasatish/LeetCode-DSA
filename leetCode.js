//Concatenation of Array (LeetCode 1929)
// 1. THE FUNCTION
const getConcatenation = function(nums) {
    const ans = [];

    // Pass 1: Copy the list once
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[i]);
    }

    // Pass 2: Copy the list again
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[i]);
    }

    return ans;
};

// 2. THE DATA
const input1 = [1, 2, 1];

// 3. EXECUTION 
console.log("Input Array: ", input1);

const result1 = getConcatenation(input1);

console.log("Output Array:", result1);
// Expected: [1, 2, 1, 1, 2, 1]



//Build Array from Permutation (LeetCode 1920)
// 1. THE FUNCTION
const buildArray = function(nums) {
    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        // The "Indirect Index" Logic
        ans.push(nums[nums[i]]);
    }

    return ans;
};

// 2. THE DATA
const input2 = [0, 2, 1, 5, 3, 4];

// 3. EXECUTION 

console.log("Input Array: ", input2);

const result2 = buildArray(input2);

console.log("Output Array:", result2);
// Expected: [0, 1, 2, 4, 5, 3]




//LeetCode 1480 (Running Sum)
// 1. THE FUNCTION (The Logic)  O(n) Space
const runningSum = function(nums) {
    const ans = [];
    let currentSum = 0; 

    for (let i = 0; i < nums.length; i++) {
        // Logic: Add the current number to the currentSum
        currentSum = currentSum + nums[i]; 
        
        // Store the new value of the currentSum 
        ans.push(currentSum);
    }

    return ans;
};

// 2. THE DATA (The Input)
const myNumbers = [1, 2, 3, 4];

// 3. PRINT INPUT

console.log("Input Array: ", myNumbers);

// 4. EXECUTE FUNCTION
const result = runningSum(myNumbers);

// 5. PRINT OUTPUT
console.log("Output Array:", result);



//optimal (most memory-efficient)  O(1) Space time=?
const runningSum=function(nums) {
        for (let i=1;i<nums.length;i++){
            nums[i]=nums[i]+nums[i-1];

        }

        return nums;
};

const myNumbers=[1,2,3,4];

const result=runningSum(myNumbers);
console.log(result);



// 1672 Richest Customer Wealth  Time Complexity: O(n*m),Space Complexity: O(1)
// 1. THE FUNCTION
const maximumWealth = function(accounts) {
    // This tracks the richest person we have seen SO FAR.
    let maxWealth = 0;

    // Loop through every Customer (Rows)
    for (let i = 0; i < accounts.length; i++) {
        
        // Reset the calculator for the new customer
        let currentWealth = 0;

        // Loop through every Bank Account for this customer (Columns)
        for (let j = 0; j < accounts[i].length; j++) {
            
            
            // Add the specific money in this account to their total
            currentWealth = currentWealth + accounts[i][j];
        }

        // Compare: Is this customer richer than our current?
        // Math.max returns the larger of the two numbers.
        maxWealth = Math.max(maxWealth, currentWealth);
    }

    return maxWealth;
};

// 2. THE DATA
const bankRecords = [
    [1, 5],   // Customer 0: 1 + 5 = 6
    [7, 3],   // Customer 1: 7 + 3 = 10
    [3, 5]    // Customer 2: 3 + 5 = 8
];

// 3. EXECUTION

console.log("Bank Records:", bankRecords);

const result = maximumWealth(bankRecords);

console.log("Richest Customer Wealth:", result); 
// Expected Output: 10





//Module 3:String  // twopointer
//LeetCode 125:Valid Palindrome

const isPalindrome = function(s) {
    let left = 0; // Pointer at start
    let right = s.length - 1; // Pointer at end

    // Run loop while pointers haven't met yet
    while (left < right) {
        
        // 1. Check if letters don't match
        if (s[left] !== s[right]) {
            return true; // What do we return if they are different?
        }

        // 2. Move pointers closer to center
        left++;  // Move right
        right--; // Move left
    }

    return true; // If we finish the loop, it matches!
};

// 2. THE DATA & EXECUTION
const test1 = "racecar"; 
const test2 = "hello";

console.log("--- Palindrome Test ---");
console.log(`Input: "${test1}" | Result: ${isPalindrome(test1)}`); // Output: true
console.log(`Input: "${test2}" | Result: ${isPalindrome(test2)}`); // Output: false



//Actual problem leetcode 125 // twopointer
const isPalindrome=function(s){
    const cleanedString=s.toLowerCase().replace(/[^a-z0-9]/g,'');

    let left=0
    let right=cleanedString.length-1;

    while(left<right){
        if (cleanedString[left]!==cleanedString[right]){
            return false;
        }
        left++;
        right--;
    
    }
    return true;
};

const messyInput="A man, a plan, a canal: Panama ";
console.log("input:",messyInput);

const isIt=isPalindrome(messyInput);
console.log(`Is it a Palindrome? ${isIt}`);



//Hash Maps/Objects //Improves speed //O(1) instant
const countFrequencies = function(arr) {
    // 1. Initialize an empty Object (our Hash Map)
    const frequencyMap = {};

    // 2. Loop through every number
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i]; 

        // 3. Logic: Check if the key exists
        // The condition 'if (frequencyMap[num])' will be true if the count is 1 or more.
        if (frequencyMap[num]) {
            // If the key exists, increment the count
            frequencyMap[num] = frequencyMap[num] + 1;
        } else {
            // If the key doesn't exist, initialize the count to 1
            frequencyMap[num] = 1;
        }
    }

    return frequencyMap;
};

// --- Execution ---
const numbersList = [1, 2, 2, 3, 1, 5, 5, 5];

console.log("Input:", numbersList);
const result = countFrequencies(numbersList);
console.log("Frequency Map:", result);
// Expected Output: { '1': 2, '2': 2, '3': 1, '5': 3 }


