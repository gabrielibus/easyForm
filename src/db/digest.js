var fetch = require("node-fetch");

const putData = (data) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(data);
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
    "http://52.91.153.228:3001/api/v1/post",
    // "https://2noi9jhrr3.execute-api.us-east-1.amazonaws.com/dev",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      alert(JSON.parse(result).body)
      window.location.reload(true)
    })
    .catch((error) => console.log("error", error));
    
};

export default putData;
