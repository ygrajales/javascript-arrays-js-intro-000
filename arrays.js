var chocolateBars = [
  'snickers',
  'hundred grand',
  'kit kat',
  'skittles'
]

function addElementToBeginningOfArray(chocolateBars, newCandy) {

  var newCandy = 'three musketeers'

  var newChocolateBars = [newCandy, ...chocolateBars]

  return newChocolateBars
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, newCandy) {

  var newCandy = 'three musketeers'

  chocolateBars.unshift(newCandy)

  return chocolateBars
}
