const permutation = function (nums) {
    let ans = [];
    let used = [];
    const backTrack = function (temp = []) {
        if (temp.length === nums.length) return ans.push([...temp]);

        for (let i = 0; i < nums.length; i++) {

            if (used[i]) continue;

            used[i] = true;
            temp.push(nums[i]);
            backTrack(temp);
            temp.pop();
            used[i] = false;
        }
    }
    backTrack([]);
    return ans;
}