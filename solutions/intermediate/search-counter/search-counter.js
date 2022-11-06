function searchAndCount (arr, searchValue) {
  let found = 0
  arr.forEach(el => {
    if (el === searchValue) {
      found += 1
    }
  })
  return found
}

export default searchAndCount
