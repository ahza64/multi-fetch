import flattenSortList from './flattenSortList'

export default function buildPersonsList(dataSet) {
  console.log("dataSet", dataSet);
  const builtPersonsList = dataSet.map((persons) => {
    if (persons.value.person) {
      const buildPersons = persons.value.person.map((person) => {
        return person
      })
      return buildPersons
    } else {
      const buildXMLPersons = persons.value.map((personSet) => {
        const personObj = {}
        personSet.children.forEach((person) => {
          personObj[person.name] = person.value
        })
        return personObj
      })
      return buildXMLPersons
    }
  })
  return flattenSortList(builtPersonsList)
}
