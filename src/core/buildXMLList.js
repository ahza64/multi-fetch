export default function buildXMLList(persons) {
  const buildXMLPersons = persons.value.map((personSet) => {
    const personObj = {}
    personSet.children.forEach((person) => {
      personObj[person.name] = person.value
    })
    return personObj
  })
  return buildXMLPersons
}
