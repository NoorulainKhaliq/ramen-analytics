const expect = require("chai").expect;
const mocha = require("mocha");
const should = require("chai").should();

let { getStreaks, getMostActiveDays } = require("./ramenFunctions");

describe("returns the most active day in each month", () => {
  it("returns the most active day in each months ", () => {
    const fakeVisits = [
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
        "ramen-type": "chicken",
        date: "2015-08-03T02:00:00.000Z"
      }
    ];
    const expectedResult = [
      {
        year: "2015",
        month: "08",
        mostActiveDay: "02",
        cupsConsumedOnActiveDay: 2
      }
    ];
    expect(getMostActiveDays(fakeVisits)).to.deep.equal(expectedResult);
  });
  it("skips months in which no cups were sold", () => {
    const fakeVisits = [
      {
        person: "bob",
        "ramen-type": "kimchi",
        date: "2015-01-01T02:00:00.000Z"
      },
      {
        person: "bob",
        "ramen-type": "kimchi",
        date: "2015-03-02T02:00:00.000Z"
      },
      {
        person: "bob",
        "ramen-type": "kimchi",
        date: "2015-03-02T02:00:00.000Z"
      }
    ];
    const expectedResult = [
      {
        year: "2015",
        month: "01",
        mostActiveDay: "01",
        cupsConsumedOnActiveDay: 1
      },
      {
        year: "2015",
        month: "03",
        mostActiveDay: "02",
        cupsConsumedOnActiveDay: 2
      }
    ];
    expect(getMostActiveDays(fakeVisits)).to.deep.equal(expectedResult);
  });
  it("throws an error when given invalid data", () => {
    const fakeVisits = [];
    expect(() => getMostActiveDays(fakeVisits).to.throw(Error, "invalid data"));
  });
});

// what happens when i dont get the input im expecting?
// what if it's not the expected data? like if its not an array?
