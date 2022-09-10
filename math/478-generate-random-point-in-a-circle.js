/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function (radius, x_center, y_center) {
    this.radius = radius;
    this.x_center = x_center;
    this.y_center = y_center;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function () {

    const getRandom = (r, n) => {
        return n - r + Math.random() * (2 * r);
    }

    const getDist = (a, b) => {
        return (a - this.x_center) * (a - this.x_center) + (b - this.y_center) * (b - this.y_center);
    }

    let x = getRandom(this.radius, this.x_center);
    let y = getRandom(this.radius, this.y_center);

    while (getDist(x, y) >= Math.pow(this.radius, 2)) {
        x = getRandom(this.radius, this.x_center);
        y = getRandom(this.radius, this.y_center);

    }

    return [x, y];

};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */