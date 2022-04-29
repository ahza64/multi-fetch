export default function fetchData(url) {
  return fetch(url)
  .then(res => {
    return res.json()
  })
  .then(data => {
    return data
  })
  .catch((err) => {
    return err
  })
}
