
//leet code
//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.

 //var twoSum = function(nums, target) {

//    for (const i in nums) {
//      if (nums.includes(target - nums[i]) && nums.indexOf(target - nums[i]) !== +i) {
//         return [+i, nums.indexOf(target - nums[i])];
//       }
//    }
// };
// alert("rana!")
// var twoSum = function(nums, target) {
//     nums = [2,7,11,15]
//     target = 9
//     console.log(nums)
//     for(var i = 0 ;i <= nums.length; i++){
//       if(nums[0]+nums[i]== target){
//       console.log(nums)
//          return [0,i]
//       }else if(nums[1]+nums[i]== target){
//         return [1,i]
//       }else if(nums[2]+nums[i]== target){
//          return [2,i]
//       }
//         if(nums[3]+nums[i]== target){
//          return [3,i]
//       }
//     }
// };
// twoSum()


let twoSum = function(nums, target) {    
     nums = [3,3]
     target = 6
     let result ;
    for(let i = 0; i <= nums.length ; i++){
      let x = nums[i];
      
      for(let j = i+1; j<=nums.length; j++){
      x + nums[j] === target ? (result=[i,j]):"";
     
      }
      
      // for(let num of nums){
      //     if(num+nums[i]== target){
      //    console.log("results", [nums.indexOf(nums[i]),nums.indexOf(num)])
      // }
          
      // }

    }
    console.log("resultss",result)
};
twoSum()
