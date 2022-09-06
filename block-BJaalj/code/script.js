function binarySearch(arr, val) {
    let sorted = arr.sort((a, b) => {
      return a - b;
    });
  
    let start = 0;
    let end = sorted.length - 1;
    while (start <= end) {
      console.log('step');
      let middle = start + Math.floor((end - start) / 2);
      if (val === sorted[middle]) {
        return val;
      } else if (val < sorted[middle]) {
        end = middle - 1;
      } else if (val > sorted[middle]) {
        start = middle + 1;
      }
    }
    return -1;
  }