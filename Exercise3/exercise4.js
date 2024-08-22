/* Implement a JavaScript function to remove duplicate elements from an array */

const removeDuplicates = array => [...new Set(array)]
console.log(removeDuplicates([1,2,2,"Johnson",4,568,1,3,3, "4", "Johnson"]))
