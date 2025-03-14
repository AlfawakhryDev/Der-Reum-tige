function sumArray(arr) {
  return arr.reduce((acc, num) => acc + (typeof num === "number" ? num : 0), 0);
}
