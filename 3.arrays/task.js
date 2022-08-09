function compareArrays(arr1, arr2) {
  let result; 
  return result = arr1.length === arr2.length && arr1.every((item, idx) => item === arr2[idx]);
}

compareArrays([1, 2, 3], [1, 2, 3])
compareArrays([1, 2, 3], [3, 2, 1])

function advancedFilter(arr) {
  let resultArr;
  return resultArr = arr.filter((item) => item > 0).filter((item) => item % 3 === 0).map((item) => item * 10); // array
}
