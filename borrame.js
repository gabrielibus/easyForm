let arreglo = [2, 5, 7, 10, 11, 15, 20];
let n = 12;
// let arreglo = [1,2,3,4,5]

let getUniqueID = () => {
  return Math.random().toString().substr(2, 5)
};


let params = {
  Item: {
    name1: "name1",
    phone1: "phone1",
    date1: "date1",
    address1: "address1",
    notes1: "notes1",
    name2: "name2",
    phone2: "phone2",
    date2: "date2",
    address2: "address2",
    notes2: "notes2",
  },
};

console.log(getUniqueID(arreglo, n));
