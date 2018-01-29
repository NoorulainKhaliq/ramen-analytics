const expect = require("chai").expect;
const mocha = require("mocha");
const request = require("supertest");
const should = require("chai").should();
const server = require("./api");

let { parseData, maxMonthConsumption, getDate } = require("./functions");
let testArray = require("./testArray");

let newData = [
  {
    person: "bob",
    "ramen-type": "kimchi",
    date: "2015-08-02T02:00:00.000Z"
  },
  {
    person: "bob",
    "ramen-type": "kimchi",
    date: "2015-08-02T02:00:00.000Z"
  },
  {
    person: "bob",
    "ramen-type": "kimchi",
    date: "2015-08-02T02:00:00.000Z"
  }
];

describe("checks day of max consumption in a month", () => {
  let mockData = testArray.data;
  let newArr = mockData.concat(newData);

  it("should return most active day after adding new data", () => {
    let maxConsumption = maxMonthConsumption(newArr);
    expect(maxConsumption[2].mostActiveDay).to.equal("02");
  });
});
