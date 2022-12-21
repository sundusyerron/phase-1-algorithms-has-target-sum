function hasTargetSum(array, target) {
  // Write your algorithm here
  // looping through each number in the array
    for(let i = 0; i < array.length; i++) {
      // x + array[i] === target: gettig value of x
    const x = target - array[i]
    // checking the rest of the numbers to find a match of x
    for (let j = i+1; j < array.length; j++) {
      // check if number matches x, if not continue looping through the array
        if(array[j] === x){
          return true
        }

    } 

  }
   //  finally at the end of the loop, return false if the is no match 
  return false  

}

/* 
  Write the Big O time complexity of your function here
    The complexity is "O(n*)" since it involves nested iterations, hence: "O(n)"
*/

/* 
@@ -29,6 +47,21 @@ if (require.main === module) {

  console.log("Expecting: false");
  // console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4, 6, 3], 5));
}

module.exports = hasTargetSum;


