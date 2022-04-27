// import getAllAsyncData from './core/getAllAsyncData'
// import fetchXML from './core/fetchXML'
// import fetchData from './core/fetchData'

import buildPersonsList from './core/getAllAsyncData'
import flattenSortList from './core/flattenSortList'
import buildJSONList from './core/buildJSONList'
import buildXMLList from './core/buildXMLList'

describe("unit tests", () => {

  const testSort = [
    {
      id: 4
    },
    {
      id: 2
    },
    {
      id: 5
    }
  ]

  const testJSON = {
                      value: {
                        person: [
                          {
                            id: "10",
                            firstName: "joe",
                            lastName: "test"
                          },
                          {
                            id: "5",
                            firstName: "bob",
                            lastName: "test"
                          },
                          {
                            id: "7",
                            firstName: "tom",
                            lastName: "test"
                          }
                        ]
                      }
                    }

  const testXMLconverted = {
                            value: [
                              {
                                children: [
                                  {
                                    name: "id",
                                    value: "3"
                                  },
                                  {
                                    name: "firstName",
                                    value: "susan"
                                  },
                                  {
                                    name: "lastName",
                                    value: "test"
                                  }
                                ]
                              },
                              {
                                children: [
                                  {
                                    name: "id",
                                    value: "6"
                                  },
                                  {
                                    name: "firstName",
                                    value: "kathy"
                                  },
                                  {
                                    name: "lastName",
                                    value: "test"
                                  }
                                ]
                              },
                              {
                                children: [
                                  {
                                    name: "id",
                                    value: "1"
                                  },
                                  {
                                    name: "firstName",
                                    value: "jo"
                                  },
                                  {
                                    name: "lastName",
                                    value: "test"
                                  }
                                ]
                              }
                            ]
                          }

  it("flattens and sorts the array", () => {
    const sortedList = flattenSortList(testSort)
    expect(sortedList[0].id).toBe(2)
    expect(sortedList.length).toBe(3)
  })

  it("builds the persons list from the JSON formatted data", async () => {
    const personsJSONList = buildJSONList(testJSON)
    expect(personsJSONList.length).toBe(3)
  })

  it("builds the persons list form the XML converted data", () => {
    const personsXMLList = buildXMLList(testXMLconverted)
    expect(personsXMLList.length).toBe(3)
  })
})

// describe("intergrated algorithm test", () => {
//   it("tests the entire algorithm", async () => {
//     const personsInputData = [
//       {
//         value: {
//           person: [
//             {
//               id: "10",
//               firstName: "joe",
//               lastName: "test"
//             },
//             {
//               id: "5",
//               firstName: "bob",
//               lastName: "test"
//             },
//             {
//               id: "7",
//               firstName: "tom",
//               lastName: "test"
//             }
//           ]
//         }
//       },
//       {
//         value: [
//           {
//             children: [
//               {
//                 name: "id",
//                 value: "3"
//               },
//               {
//                 name: "firstName",
//                 value: "susan"
//               },
//               {
//                 name: "lastName",
//                 value: "test"
//               }
//             ]
//           },
//           {
//             children: [
//               {
//                 name: "id",
//                 value: "6"
//               },
//               {
//                 name: "firstName",
//                 value: "kathy"
//               },
//               {
//                 name: "lastName",
//                 value: "test"
//               }
//             ]
//           },
//           {
//             children: [
//               {
//                 name: "id",
//                 value: "1"
//               },
//               {
//                 name: "firstName",
//                 value: "jo"
//               },
//               {
//                 name: "lastName",
//                 value: "test"
//               }
//             ]
//           }
//         ]
//       }
//     ]
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
