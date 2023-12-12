function fullName(name1, name2) {
  const person = {
    firstName: 'Yogi',
    lastName: 'Chaitanya',
  }
  person.firstName = name1
  person.lastName = name2

  return person
}

module.exports = fullName
