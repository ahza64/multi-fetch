import flattenSortList from './flattenSortList'
import buildJSONList from './buildJSONList'
import buildXMLList from './buildXMLList'

export default function buildPersonsList(dataSet) {
  console.log("dataSet", dataSet);
  const builtPersonsList = dataSet.map((persons) => {
    if (persons.value.person) {
      return buildJSONList(persons)
    } else {
      return buildXMLList(persons)
    }
  })
  return flattenSortList(builtPersonsList)
}
