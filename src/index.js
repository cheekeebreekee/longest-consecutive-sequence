function bubbleSort(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

module.exports = function longestConsecutiveLength(array) {
  let sortedArr = bubbleSort(array);
  let output = [];
  let i = 0;
  let counter = 0;
  while (i < sortedArr.length) {
    if (sortedArr[i+1] - sortedArr[i] === 1) {
      counter++;
    } else { 
      output.push(counter);
      counter = 0;
    }
    i++;
  }
  return Math.max.apply(null, output) === 0 ? 0 : Math.max.apply(null, output) + 1;
}
