import XMLParser from 'react-xml-parser'

export default function fetchXML(url) {
  return fetch(url)
  .then(res => {
    return res.text()
  })
  .then(data => {
    var xml = new XMLParser().parseFromString(data);
    return xml.children
  })
  .catch((err) => {
    console.error('Error: ', err)
  })
}
