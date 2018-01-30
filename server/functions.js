//parsed data eliminates repeat and created an object for each unique person
//the object contains total cup consumption and favorite ramen-type
let parseData = data => {
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

//in addition to returning the total cups consumed, returned array of objects also provides how much of
//each type of ramen cups were consumed

let totalCups = data => {
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

let getDate = data => {
  let obj = {};
  data.forEach(ramen => {
    let year = ramen.date.slice(0, 4);
    let date = ramen.date.slice(5, 10);
    obj[date] ? obj[date][0]++ : (obj[date] = [1, year]);
  });
  return obj;
};

//creates an object with month, day of highest consumption and the count of cups consumed
let maxMonthConsumption = data => {
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

module.exports = { parseData, maxMonthConsumption, getDate, totalCups };
