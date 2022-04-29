import fetchXML from './fetch/fetchXML'
import fetchData from './fetch/fetchData'
import buildPersonsList from './buildLists/index'

export default function getAllAsyncData(urlOne, urlTwo) {
  return Promise.allSettled([
    fetchData(urlOne),
    fetchXML(urlTwo)
  ])
  .then((dataSet) => {
    return buildPersonsList(dataSet)
  })
}
