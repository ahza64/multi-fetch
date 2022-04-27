import fetchXML from './fetchXML'
import fetchData from './fetchData'
import buildPersonsList from './buildPersonsList'

export default function getAllAsyncData(urlOne, urlTwo) {
  return Promise.allSettled([
    fetchData(urlOne),
    fetchXML(urlTwo)
  ])
  .then((dataSet) => {
    return buildPersonsList(dataSet)
  })
}
