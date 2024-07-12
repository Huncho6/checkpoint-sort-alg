//insertion sort algorithim
function insertionSort(arr) {
    // loop through the arr
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
  }
  
  // Example usage
  const arr = [12, 4, 3, 19, 6, 0, -7, -5, -3, -2, -1, 4, 5, 7, 18, 9, 5];
  console.log("Sorted array is:",
  //should return correct order          
  insertionSort(arr));