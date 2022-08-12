/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.nums = nums;
    const n = [...this.nums];
    this.map = {};
    for(let i = 0; i<this.nums.length;i++){        
        if(this.map[n[i]]) this.map[n[i]].push(i);
        else this.map[n[i]] = [i];
    }
    
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
    let m = this.map;
    for (const key in m) {
        if(key == target){
            return m[key][Math.floor(Math.random()*m[key].length)];
        }
        
    };

};

let t =  [[[1, 2, -3, -3, -3]], [3], [1], [3]];

let obj = new Solution([1,2,3,3,3,-4,-4]);

console.log(obj.pick(3))


/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

//?  Input
//?  ["Solution", "pick", "pick", "pick"]
//?  [[[1, 2, 3, 3, 3]], [3], [1], [3]]
//?  Output
//?  [null, 4, 0, 2]
 
//?  Explanation
//?  Solution solution = new Solution([1, 2, 3, 3, 3]);
//?  solution.pick(3); // It should return either index 2, 3, or 4 randomly. Each index should have equal probability of returning.
//?  solution.pick(1); // It should return 0. Since in the array only nums[0] is equal to 1.
//?  solution.pick(3); // It should return either index 2, 3, or 4 randomly. Each index should have equal probability of returning.