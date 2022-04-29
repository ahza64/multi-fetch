export default function findChildren(personSet) {
  const personObj = {}
    personSet.children.forEach((person) => {
      personObj[person.name] = person.value
    })
  return personObj
}
