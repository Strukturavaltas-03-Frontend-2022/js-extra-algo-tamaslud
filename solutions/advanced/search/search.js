function linearSearch (arr, value) {
  let result = false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) { result = true };
  }
  return result
}

export default linearSearch
