function getTheLargestElement (arr) {
  let max = arr[0]
  arr.forEach(el => {
    if (el > max) { max = el };
  })
  return max
}

export default getTheLargestElement
