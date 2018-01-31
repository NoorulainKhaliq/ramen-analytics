const csv = require("csvtojson");
const csvFilePath = "./server/ramen.csv";

// converts the csv data to json
// this function was being repeatedly used in the get routes
// TODO: consider caching csv to json
const getVisitsAsJson = () => {
  return new Promise((resolve, reject) => {
    csv()
      .fromFile(csvFilePath)
      .on("end_parsed", resolve)
      .on("error", reject);
  });
};

// parsed data eliminates repeat and created an object for each unique person
// the object contains total cup consumption and favorite ramen-type for each customer
const getCustomers = data => {
  const people = {};
  const ramens = {};
  data.forEach(visit => {
    const { person, "ramen-type": ramenType } = visit;
    if (!ramens[ramenType]) {
      ramens[ramenType] = true;
    }
    if (!people[person]) {
      people[person] = {
        cups: 0,
        favorite: null
      };
    }
    const current = people[person];
    if (!current[ramenType]) {
      current[ramenType] = 0;
    }
    ++current.cups;
    ++current[ramenType];
    let max = 0;
    for (ramen in ramens) {
      if (current[ramen] > max) {
        max = current[ramen];
        current.favorite = ramen;
      }
    }
  });
  //returns an array of objects
  const output = [];
  Object.keys(people).forEach(person => {
    output.push({
      name: person,
      cups: people[person].cups,
      favorite: people[person].favorite
    });
  });
  return output;
};

// in addition to returning the total cups consumed, returned array of objects also provides how much of
// each type of ramen cups were consumed

const getSalesByType = data => {
  let obj = {};
  data.forEach(ramen => {
    const { "ramen-type": ramenType } = ramen;
    obj[ramenType] ? obj[ramenType]++ : (obj[ramenType] = 1);
  });
  obj.total = data.length;
  let objArr = [];
  for (let key in obj) {
    objArr.push({ [key]: obj[key] });
  }
  return objArr;
};

//retrieves date from data with value as array of cup consumption and year and
//key as month-date
const getDate = data => {
  let obj = {};
  data.forEach(({ date: dateTime }) => {
    let year = dateTime.slice(0, 4);
    date = dateTime.slice(5, 10);
    obj[date] ? obj[date][0]++ : (obj[date] = [1, year]);
  });
  return obj;
};

//creates an object with month, day of highest consumption and the count of cups consumed
//todo: ADD ERROR HANDLING for invalid data types or missing properties in data
const getMostActiveDays = data => {
  if (!Array.isArray(data) || data.length === 0) throw "invalid data";
  let obj = {};
  let dataToDate = getDate(data);
  Object.keys(dataToDate).forEach(date => {
    let month = date.slice(0, 2);
    let day = date.slice(3, 5);
    let currVal = dataToDate[date];
    if (!obj[month]) {
      obj[month] = [day, currVal];
    } else if (obj[month] && currVal > obj[month][1]) {
      obj[month] = [day, currVal];
    }
  });
  //reformats above obj to include all information relevant to the day of max cup consumption in a given a month
  let arrObj = [];
  Object.keys(obj).forEach(date => {
    arrObj.push({
      year: obj[date][1][1],
      month: date,
      mostActiveDay: obj[date][0],
      cupsConsumedOnActiveDay: obj[date][1][0]
    });
  });
  return arrObj;
};

//TODO: code cleanup!!!
const getStreaks = data => {
  if (!Array.isArray(data) || data.length === 0) throw "invalid data";
  const sortedData = [...data].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  let obj = getDate(sortedData);
  let objArr = [];
  for (let key in obj) {
    let tempObj = {};
    tempObj[key] = obj[key];
    objArr.push(tempObj);
  }
  let currStreak = [];
  let streak = [];
  let date = sortedData[0].date.slice(5, 10);
  let startingCup = Object.values(objArr[0]).toString();
  for (let key in obj) {
    let currCup = obj[key];
    let currDate = key;
    let startingVal = startingCup[0];
    let currVal = currCup[0];
    let newCurrDate = parseInt(currDate.slice(3, 5));
    let newDate = parseInt(date.slice(3, 5));
    if (startingVal < currVal && newDate < newCurrDate) {
      if (!currStreak.includes(date)) {
        currStreak.push(date);
        let tempObj = {};
        tempObj.consumed = startingVal;
        tempObj.date = date + "-" + startingCup[1];
        streak.push(tempObj);
      }
      currStreak.push(currDate);
      let tempObj = {};
      tempObj.consumed = currVal;
      tempObj.date = currDate + "-" + currCup[1];
      streak.push(tempObj);
    }
    date = currDate;
    startingCup = currCup;
  }
  return streak;
};

module.exports = {
  getCustomers,
  getMostActiveDays,
  getSalesByType,
  getStreaks,
  getVisitsAsJson
};
