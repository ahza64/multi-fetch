export default function flattenSortList(builtPersonsList) {
  return builtPersonsList.flat().sort((a, b) => a.id - b.id)
}
