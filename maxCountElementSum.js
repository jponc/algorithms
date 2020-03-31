//Find the maximum count of elements from a given array such that their sum is less than or equal to k.
//
// Solution:
// 1. get sorted array using nlogn sorting algorithm like merge sort = O(n logn)
// 2. Do a linear scan = O(n)
//
// Answer: O(n logn)


const merge = (arr1, arr2) => {
  let i = 0, j = 0;
  const output = [];

  while (arr1[i] != undefined && arr2[j] != undefined) {
    if (arr1[i] < arr2[j]) {
      output.push(arr1[i]);
      i++;
    } else {
      output.push(arr2[j]);
      j++;
    }
  }

  while (arr1[i] != undefined) {
    output.push(arr1[i]);
    i++;
  }

  while (arr2[j] != undefined) {
    output.push(arr2[j]);
    j++;
  }

  return output;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = parseInt(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid, arr.length);
  const sortedLeft = mergeSort(leftArr);
  const sortedRight = mergeSort(rightArr);

  return merge(sortedLeft, sortedRight);
}

const maxCountElementSum = (arr, num) => {
  const sortedArr = mergeSort(arr);
  let currentSum = 0;
  let i = 0;

  while (sortedArr[i] != undefined) {
    if ((sortedArr[i] + currentSum) > num) {
      return i;
    }

    currentSum = currentSum + sortedArr[i];
    i++;
  }

  return i;
}

module.exports = maxCountElementSum;
