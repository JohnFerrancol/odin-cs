function mergeSort(arr) {
  // Base Case -> When the arr has one or zero elements: This means that the array is already sorted
  if (arr.length <= 1) return arr;

  // Split the current arr to left values and right values
  let middleIndex = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, middleIndex);
  let rightArr = arr.slice(middleIndex);

  // Sort the left half and sort the rigth half of numbers
  let leftSorted = mergeSort(leftArr);
  let rightSorted = mergeSort(rightArr);

  // Merge sorted halves
  return merge(leftSorted, rightSorted);
}

function merge(leftArr, rightArr) {
  // Initialise pointers for the left and right arrays and an empty lift
  let sortedArr = [];
  let leftArrIndex = 0;
  let rightArrIndex = 0;

  // While both pointers are within the respective sublist
  while (leftArrIndex < leftArr.length && rightArrIndex < rightArr.length) {
    // Compare the elements pointed by the two pointers
    // Append the smaller element to the result list
    // Move the point forward in the sublist which you took the element
    if (leftArr[leftArrIndex] < rightArr[rightArrIndex]) {
      sortedArr.push(leftArr[leftArrIndex]);
      leftArrIndex++;
    } else {
      sortedArr.push(rightArr[rightArrIndex]);
      rightArrIndex++;
    }
  }

  // If there are any remaining left or right sublist, append them to the list
  while (leftArrIndex < leftArr.length) {
    sortedArr.push(leftArr[leftArrIndex]);
    leftArrIndex++;
  }

  while (rightArrIndex < rightArr.length) {
    sortedArr.push(rightArr[rightArrIndex]);
    rightArrIndex++;
  }

  return sortedArr;
}

console.log("Testing Merge Sort");
let arr1 = [3, 2, 1, 13, 8, 5, 0, 1];
let arr1Sorted = mergeSort(arr1);
console.log(`${JSON.stringify(arr1)}: ${JSON.stringify(arr1Sorted)}`);
let arr2 = [105, 79, 100, 110];
let arr2Sorted = mergeSort(arr2);
console.log(`${JSON.stringify(arr2)}: ${JSON.stringify(arr2Sorted)}`);
