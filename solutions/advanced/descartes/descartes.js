function getCartesianProductBetweenTwoArrays (arr1, arr2) {
  const result = []
  arr1.forEach(el1 => {
    arr2.forEach(el2 => {
      result.push(el1 * el2)
    })
  })
  return result
}

export default getCartesianProductBetweenTwoArrays
