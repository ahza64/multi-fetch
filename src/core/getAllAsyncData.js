import fetchXML from './fetchXML'
import fetchData from './fetchData'

export default function getAllAsyncData() {
  let personList = []
  Promise.allSettled([
    fetchData('/datajson.json'),
    fetchXML('/dataxml.xml')
  ])
  .then((dataSet) => {
    dataSet.forEach((persons, i) => {
      if (persons.value.person) {
        persons.value.person.forEach((person, i) => {
          personList.push(person)
        })
      } else {
        persons.value.forEach((personSet, i) => {
          let personObj = {}
          personSet.children.forEach((person, i) => {
            personObj[person.name] = person.value
          })
          personList.push(personObj)
        })
      }
    })
  })
  return personList.sort((a, b) => a.id - b.id)
}
