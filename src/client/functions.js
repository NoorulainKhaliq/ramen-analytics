let filterRamen = (currRamen, allCups) => {
  let selectedRamen;
  let cups;
  allCups.filter(ramen => {
    if (Object.keys(ramen)[0] === currRamen) {
      selectedRamen = Object.keys(ramen)[0];
      cups = Object.values(ramen)[0];
    }
  });
  return [selectedRamen, cups];
};

function importAll(r) {
  return r.keys().map(r);
}

module.exports = { filterRamen, importAll };
