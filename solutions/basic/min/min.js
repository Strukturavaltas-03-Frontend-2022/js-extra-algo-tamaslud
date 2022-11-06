function getTheSmallestElement (arr) {
  let min = arr[0]
  arr.forEach(el => {
    if (el < min) { min = el };
  })
  return min
}

export default getTheSmallestElement
