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

describe("get streaks", () => {
  it("returns all consecutive days in which cup sales increased", () => {
    const fakeVisits = [
      {
        person: "alice",
        "ramen-type": "seafood",
        date: "2015-01-03T03:00:00.000Z"
      },
      {
        person: "alice",
        "ramen-type": "kimchi",
        date: "2015-01-06T04:00:00.000Z"
      },
      {
        person: "alice",
        "ramen-type": "kimchi",
        date: "2015-01-06T05:00:00.000Z"
      },
      {
        person: "alice",
        "ramen-type": "chicken",
        date: "2015-01-07T06:00:00.000Z"
      },
      {
        person: "alice",
        "ramen-type": "chicken",
        date: "2015-01-07T07:00:00.000Z"
      },
      {
        person: "alice",
        "ramen-type": "seafood",
        date: "2015-01-07T08:00:00.000Z"
      }
    ];
    const expectedResult = [
      {
        consumed: 1,
        date: "01-03-2015"
      },
      {
        consumed: 2,
        date: "01-06-2015"
      },
      {
        consumed: 3,
        date: "01-07-2015"
      }
    ];
    expect(getStreaks(fakeVisits)).to.deep.equal(expectedResult);
  });
});

// what happens when i dont get the input im expecting?
// what if it's not the expected data? like if its not an array?
