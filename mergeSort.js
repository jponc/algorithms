// Merge sort is a divide-and-conquer algorithm
// Break the entire array by splitting it in half everytime
// Now your array should only have 1 element, then we get left and right arrays and merge them to form a sorted array
// O(n logn)
const merge = (arr1, arr2) => {
  const mergedList = [];
  let i = 0;
  let j = 0;

  while (arr1[i] != undefined && arr2[j] != undefined) {
    if (arr1[i] <= arr2[j]) {
      mergedList.push(arr1[i]);
      i++;
    } else {
      mergedList.push(arr2[j]);
      j++;
    }
  };

  while (arr1[i] != undefined) {
    mergedList.push(arr1[i]);
    i++;
  };

  while (arr2[j] != undefined) {
    mergedList.push(arr2[j]);
    j++;
  };

  return mergedList;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  // split array into 2 sorted arrays
  const mid = parseInt(arr.length / 2);
  const leftArr = mergeSort(arr.slice(0, mid));
  const rightArr = mergeSort(arr.slice(mid, arr.length));

  // merge those sorted arrays
  return merge(leftArr, rightArr);
}
mergeSort([3,1,2]);

console.log(mergeSort([4,4,4,2,1,3,2,5,7,1,2]));
console.log(mergeSort([]));
console.log(mergeSort([3,1,2]));
console.log(mergeSort([4,3,1,2]));
