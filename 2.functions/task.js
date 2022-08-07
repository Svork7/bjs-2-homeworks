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

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
