var fetch = require("node-fetch")

const putData = (data) => {
  var url = "https://npr11n9l34.execute-api.us-east-1.amazonaws.com/beta/indutramitesPut"

  var myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")
  myHeaders.append("x-api-key", "gZUfNjgwbI3Gjn2ovckj3ciGsvXzhF2af9v4RMe2")

  // var raw = JSON.stringify(data)
  var raw = JSON.stringify({"id":"11222","productName":"test from frontend"});


  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  }
  console.log('working')
  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error))
}

export default putData
