var fetch = require("node-fetch");

class model {
  constructor({
    name1,
    phone1,
    date1,
    address1,
    time1,
    notes1,
    name2,
    phone2,
    date2,
    address2,
    time2,
    notes2,
  }) {
    this.name1 = name1;
    this.phone1 = phone1;
    this.date1 = date1;
    this.time1 = time1;
    this.address1 = address1;
    this.notes1 = notes1;
    this.name2 = name2;
    this.phone2 = phone2;
    this.date2 = date2;
    this.time2 = time2;
    this.address2 = address2;
    this.notes2 = notes2;
  }
}

const putData = (data) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = new model(data);
  raw = JSON.stringify(raw)

  // create a JSON object with parameters for API call and store in a variable
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // make API call with parameters and use promises to get response
  fetch(
    // "http://localhost:3001/api/v1/post",
    // "http://52.91.153.228:3001/api/v1/post",
    "https://infinite-escarpment-14960.herokuapp.com/",
    // "https://2noi9jhrr3.execute-api.us-east-1.amazonaws.com/dev",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      alert("Información enviada correctametne");
      window.location.reload(true);
    })
    .catch((error) => console.log("error", error));
};

export default putData;
