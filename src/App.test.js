// import getAllAsyncData from './core/getAllAsyncData'
// import fetchXML from './core/fetchXML'
// import fetchData from './core/fetchData'

import personsInputData from './testData/appTestData'
import buildPersonsList from './core/getAllAsyncData'
import flattenSortList from './core/flattenSortList'
import buildJSONList from './core/buildJSONList'
import buildXMLList from './core/buildXMLList'
import findChildren from './core/findChildren'

describe("unit tests", () => {

  it("flattens and sorts the array", () => {
    const sortedList = flattenSortList(personsInputData[0].value.person)
    expect(sortedList[0].id).toBe("5")
    expect(sortedList.length).toBe(3)
  })

  it("builds the persons list from the JSON formatted data", async () => {
    const personsJSONList = buildJSONList(personsInputData[0])
    expect(personsJSONList.length).toBe(3)
  })

  it("builds the persons list form the XML converted data", () => {
    const personsXMLList = buildXMLList(personsInputData[1])
    expect(personsXMLList.length).toBe(3)
  })

  it("builds person object from a nested list of converted XML objects", () => {
    const foundChildren = findChildren(personsInputData[1].value[0])
    expect(foundChildren.firstName).toBe("susan")
  })
})


// describe("intergrated algorithm test", () => {
//   it("tests the entire algorithm", async () => {

//     const personsList = await buildPersonsList(personsInputData)
//     console.log("personsList", personsList);
//     expect(personsList.length).toBe(6)
//   })
// })

{/*
test("get json data", (done) => {
  fetchData('/datajson.json').then(data => {
    expect(data).toBe({id: '10', firstName: 'John', lastName: 'Doe'})
    done()
  })
})
*/}

{/*
import axios from 'axios'
jest.mock("axios");

it("returns persons list", async () => {
  axios.get.mockResolvedValue({
    data:
      [
        {
          id: 1,
          firstName: "Susan",
          lastName: "Lee"
        },
        {
          id: 2,
          firstName: "Yolanda",
          lastName: "Vasquez"
        },
      ]
  });

  const result = await fetchData('/datajson.json');
  expect(result[0].id).toEqual(1);
});
*/}

{/*
global.fetch = jest.fn(() => {
  Promise.reslove({
    json: () => Promise.resolve(
      [
        {
          id: 1,
          firstName: "Susan",
          lastName: "Lee"
        },
        {
          id: 2,
          firstName: "Yolanda",
          lastName: "Vasquez"
        },
      ]
    )
  })
})

beforeEach(() => {
  fetch.mockClear();
});


it("returns persons list", async () => {
  const result = await fetchData('/datajson.json');
  expect(result.length).toEqual(2);
});
*/}
