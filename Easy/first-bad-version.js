/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    if (n === 1) return 1;

    //similar to binary search tree
    //grab middle and see if if passes func
    //if true we go left false go right

    let left = 0;
    let right = n;
    while (right - left !== 1) {
      const middle = Math.floor((left + right) / 2);
      if (isBadVersion(middle) === true) right = middle;
      if (isBadVersion(middle) === false) left = middle;
    }
    console.log(left, right);
    return right;
  };
};
