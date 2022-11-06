function getTheEvenElements (arr) {
  let evens = []
  arr.forEach(el => {
    if (!(el % 2)) {
      evens = [...evens, el]
    }
  })
  return evens
}

export default getTheEvenElements
