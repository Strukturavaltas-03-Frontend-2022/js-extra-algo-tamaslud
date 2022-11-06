function numberAndStringSorter (arr) {
  let result = []
  arr = arr.sort()
  for (let i = 0; i < arr.length / 2; i++) {
    result = [...result, arr[i], arr[arr.length / 2 + i]]
  }
  return result
}

export default numberAndStringSorter
