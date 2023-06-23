function frankenSplice(arr1, arr2, n) {
  let result = arr2.slice
    // slice is used to copy an array while leaving the original array unaltered.
  result.splice(n,0,...arr1.slice(""));

  return result;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);
