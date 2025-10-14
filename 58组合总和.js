var combinationSum = function (candidates, target) {
  let result = [], path = [], sum = 0;
  const backtracking = (candidates, target, startIndex) => {
    if (sum > target) return;
    if (sum === target) {
      result.push([...path]);
      return;
    }
    for (let i = startIndex; i < candidates.length; i++) {
      sum += candidates[i];
      path.push(candidates[i]);
      backtracking(candidates, target, i);
      sum -= path.pop();
    }
  }
  backtracking(candidates, target, 0)
  return result;
}

const candidates = [2, 3, 6, 7], target = 7;
const result = combinationSum(candidates, target)
console.log(result)