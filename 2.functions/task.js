// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
    else if (arr[i] > max) {
      max = arr[i]
    }
    sum += arr[i]
  }
  avg = sum / arr.length
  console.log(min, max, sum, avg.toFixed(2))
  return obj = {
    min: min,
    max: max,
    avg: +avg.toFixed(2)
  };
};


getArrayParams([-99, 99, 10]);

// Задание 2
function worker(arr) {
  let sum;
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let sum = func(arrOfArr[i])
    if (max < sum) {
      max = sum;
    }
  }
  return max;
}

makeWork([[1, 2, 3], [4, 5, 6]], worker);


// Задание 3
// Ваш код
function worker2(arr) {
  let min, max, difference;
  min = arr[0];
  max = arr[0];
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
    else if (arr[i] > max) {
      max = arr[i]
    }
  }
  difference = max - min;
  return difference;
};

function makeWork(arrOfArr, func) {
  let max;
  max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let difference = func(arrOfArr[i])
    if (max < difference) {
      max = difference;
    }
  }
  return max;
}


makeWork([[1, 2, 3], [4, 5, 6]], worker2);

