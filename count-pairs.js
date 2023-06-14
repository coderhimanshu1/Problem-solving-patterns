/*******
 * countPairs
Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. You can assume that there will be no duplicate values in the array.

Examples:

countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
countPairs([4,6,2,7], 10) // 1 (4,6)
countPairs([1,2,3,4,5], 10) // 0
countPairs([1,2,3,4,5], -3) // 0
countPairs([0,-4],-4) // 1
countPairs([1,2,3,0,-1,-2],0) // 2
Constraints

Time Complexity - O(N * log(N))

or

Time Complexity - O(N)
*******/

const countPairs = (arr, target) => {
  // sort array
  const sortedArray = arr.sort();
  // set pointers
  let left = 0;
  let right = sortedArray.length - 1;
  let sum = sortedArray[left] + sortedArray[right];
  let count = 0;

  while (left < right) {
    // if sum of pointers = target set count
    if (sum === target) count++;

    // if sum of pointers is < target move ----> left pointer
    if (sum < target) left++;

    // if sum of pointers is > target move <--- right pointer
    if (sum > target) right--;
  }
  return count;
};
