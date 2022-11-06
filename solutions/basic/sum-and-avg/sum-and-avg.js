export function getSumOfTheElements (arr) {
  return arr.reduce((a, b) => a + b)
}

export function getAvarageOfTheElements (arr) {
  return getSumOfTheElements(arr) / arr.length
}
