const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const insertion = listNumber => {
  let j = 0;
  for (let i = 0; i<listNumber.length; i++) {
    let currentVal = listNumber[i];
    j = i;
    while (j>0 && listNumber[j-1]>currentVal) {
      listNumber[j] = listNumber[j-1];
      
      j = j-1;
    }
    listNumber[j] = currentVal;
  }

  return listNumber;
};

let newList = [];

for (let i = 0; i <= 100; i++) {
  newList.push(i);
}
shuffle(newList);
console.log("IN", newList.toString());

let returnList = insertion(newList);
console.log("OUT", returnList)
