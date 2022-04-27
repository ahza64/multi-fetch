import getAllAsyncData from './core/getAllAsyncData'

import fetchXML from './core/fetchXML'
import fetchData from './core/fetchData'



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
