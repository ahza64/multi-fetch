// import getAllAsyncData from './core/getAllAsyncData'
// import fetchXML from './core/fetchXML'
// import fetchData from './core/fetchData'

import personsInputData from './testData/appTestData'
import buildPersonsList from './core'
import flattenSortList from './core/buildLists/fragments/flattenSortList'
import buildJSONList from './core/buildLists/buildJSONList'
import buildXMLList from './core/buildLists/buildXMLList'
import findChildren from './core/buildLists/fragments/findChildren'

describe("unit tests", () => {
  describe("sortedList test", () => {
    it("flattens the array", () => {
      const sortedList = flattenSortList(personsInputData[0].value.person)
      expect(sortedList).toHaveLength(3)
    })

    it("sorts the array", () => {
      const sortedList = flattenSortList(personsInputData[0].value.person)
      expect(sortedList[0].id).toBe("5")
    })
  })

  describe("personsJSONList test", () => {
    it("returns a javascript object array", () => {
      const personsJSONList = buildJSONList(personsInputData[0])
      expect(typeof personsJSONList).toBe(typeof [])
    })

    it("returns a list of three objects", () => {
      const personsJSONList = buildJSONList(personsInputData[0])
      expect(personsJSONList).toHaveLength(3)
    })
  })

  describe("personsXMLList test", () => {
    it("returns a javascript object array", () => {
      const personsXMLList = buildXMLList(personsInputData[1])
      expect(typeof personsXMLList).toBe(typeof [])
    })

    it("returns a list of three objects", () => {
      const personsXMLList = buildXMLList(personsInputData[1])
      expect(personsXMLList).toHaveLength(3)
    })

    it("check for proper XML converted object structure", () => {
      const personsXMLList = buildXMLList(personsInputData[1])
      expect(personsXMLList[0].lastName).toBe("test")
    })
  })

  describe("foundChildren test", () => {
    it("builds person object from a nested list of converted XML objects", () => {
      const foundChildren = findChildren(personsInputData[1].value[0])
      expect(foundChildren.firstName).toBe("susan")
    })
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
