function getCountOfTheEvenElements (arr) {
  let evens = 0
  arr.forEach(el => {
    if (!(el % 2)) {
      evens += 1
    }
  })
  return evens
}

export default getCountOfTheEvenElements
