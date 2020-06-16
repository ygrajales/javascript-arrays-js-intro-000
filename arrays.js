var chocolateBars = [
  'snickers',
  'hundred grand',
  'kit kat',
  'skittles'
]

function addElementToBeginningOfArray(chocolateBars, newCandy) {

  var newCandy = 'foo'

  var newChocolateBars = [newCandy, ...chocolateBars]

  return newChocolateBars
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, newCandy) {

  var newCandy = 'foo'

  chocolateBars.unshift(newCandy)

  return chocolateBars
}
