const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const rapid = listNumber => {
  return new Promise(async (res, rej) => {
    if (listNumber.length < 2) {
      res(listNumber);
    } else {
      // pivot is the element on the extrem right side
      let pivot = listNumber.splice(-1)[0];
      // Tableau des nombre plus petit que le pivot
      let listLower = listNumber.filter(i => i < pivot);

      // Tableau des nombre plus grand que le pivot
      let listGretter = listNumber.filter(i => i >= pivot);

      // Recursive sur les deux nouveau tableau
      let returnList = await Promise.all([
        rapid(listLower),
        rapid(listGretter)
      ]);

      res([...returnList[0], pivot, ...returnList[1]]);
    }
  });
};

let newList = [];

for (let i = 0; i <= 10; i++) {
  newList.push(i);
}
shuffle(newList);
console.log("IN", newList.toString());

rapid(newList).then(returnList => {
  console.log("OUT", returnList);
});
