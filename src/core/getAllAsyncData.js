import fetchXML from './fetchXML'
import fetchData from './fetchData'

export default function getAllAsyncData(urlOne, urlTwo) {
  return Promise.allSettled([
    fetchData(urlOne),
    fetchXML(urlTwo)
  ])
  .then((dataSet) => {
    return buildPersonsList(dataSet)
  })
}

function buildPersonsList(dataSet) {
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
  return builtPersonsList.flat().sort((a, b) => a.id - b.id)
}
