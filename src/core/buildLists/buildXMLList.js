import findChildren from './fragments/findChildren'

export default function buildXMLList(persons) {
  const buildXMLPersons = persons.value.map((personSet) => {
    return findChildren(personSet)
  })
  return buildXMLPersons
}
