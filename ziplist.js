function zipList(list1, list2) {
  const result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

const testList1 = [1, 2, 3];
const testList2 = [2, 3, 4];

console.log(zipList(testList1, testList2));
console.log(zipListTheSimpleWay(testList1, testList2));