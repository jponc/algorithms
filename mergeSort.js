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

  let i = 0;

  // split array into 2 arrays
  const mid = parseInt(arr.length / 2);
  const leftArr = mergeSort(arr.slice(0, arr.length - mid));
  const rightArr = mergeSort(arr.slice(mid, arr.length));

  return merge(leftArr, rightArr);
}

console.log(mergeSort([4,4,4,2,1,3,2,5,7,1,2]));
