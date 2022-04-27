import findChildren from './findChildren'

export default function buildXMLList(persons) {
  const buildXMLPersons = persons.value.map((personSet) => {
    return findChildren(personSet)
    // const personObj = {}
    // personSet.children.forEach((person) => {
    //   personObj[person.name] = person.value
    // })
    // return personObj
  })
  return buildXMLPersons
}
