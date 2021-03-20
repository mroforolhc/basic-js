module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;

    let map;
    if (Array.isArray(arr)) {
      depth += 1;
      map = arr.map((el) => this.calculateDepth(el));
      if (map.length)
        depth += Math.max.apply(this, map);
    }

    return depth;
  }
};