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

//creates an object of month-date:cups consumed for that month
let getDate = data => {
  let obj = {};
  data.forEach(ramen => {
    let date = ramen.date.slice(5, 10);
    obj[date] ? obj[date]++ : (obj[date] = 1);
  });
  return obj;
};

//creates an object with month, day of highest consumption and the count of cups consumed
let maxMonthConsumption = data => {
  let dataToDate = getDate(data);
  let obj = {};
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
  return obj;
};

module.exports = { parseData, maxMonthConsumption, getDate };
