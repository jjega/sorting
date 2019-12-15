const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const peigne = listNumber => {
  let hasPermuted = true;
  let gap = listNumber.length;

  // If we had permuted data we need to re-check by using the new gap
  while (hasPermuted || gap>1) {
    hasPermuted = false;

    // We define the gap 
    gap = Math.floor(gap/1.3) || 1;

    // Need to loop but becarfull we need to remove the gap from the array length 
    for (let i = 0; i<(listNumber.length-gap); i++) {
      
      // if right is bigger than left we have to switch them 
      if (listNumber[i]>listNumber[i+gap]) {
        let temp = listNumber[i];
        listNumber[i] = listNumber[i+gap];
        listNumber[i+gap] = temp;

        hasPermuted = true;
      }
    }

  }

  return listNumber
};

let newList = [];

for (let i = 0; i <= 4; i++) {
  newList.push(i);
}
shuffle(newList);
console.log("IN", newList.toString());

let returnList = peigne(newList);
console.log("OUT", returnList)
