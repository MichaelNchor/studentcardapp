require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const https = require("https");
const axios = require('axios');
app.use(cors());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views/"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {

var config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://nchormichael-001-site1.atempurl.com/api/Student/1',
  headers: { 
    'Content-Type': 'application/json', 
  },
  responseType: 'json',
  httpsAgent: https.Agent({rejectUnauthorized: false})
};

axios(config)
.then(function (response) {
  console.log(response.data);
  const student = {
    fName: response.data.fName,
    sName: response.data.sName,
    oName: response.data.oName,
    image: response.data.image,
    programme: response.data.programme,
    stdNo: response.data.referenceNo,
    nationality: response.data.nationality,
    admissionDate: response.data.admissionDate,
    graduationDate: response.data.graduationDate,
    indexNo: response.data.indexNo,
    qrCode: response.data.qrCode,
  };
  res.render("index",student);
})
.catch(function (error) {
  const student = {
    fName: 'loading...',
    sName: 'loading...',
    oName: 'loading...',
    image: 'image/defaultprofile.png',
    programme: 'loading...',
    stdNo: 'loading...',
    nationality: 'loading...',
    admissionDate: 'loading...',
    graduationDate: 'loading...',
    indexNo: 'loading...',
    qrCode: "loading...",
  };
  res.render("index",student);
  console.log(error);
});
});

app.get('/how-to-use', function(req, res){
  var config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://localhost:7078/api/Student/1',
    headers: { 
      'Content-Type': 'application/json', 
    },
    responseType: 'json',
    httpsAgent: https.Agent({rejectUnauthorized: false})
  };
  
  axios(config)
  .then(function (response) {
    console.log(response.data);
    const student = {
      fName: response.data.fName,
      sName: response.data.sName,
      oName: response.data.oName,
      image: response.data.image,
      programme: response.data.programme,
      stdNo: response.data.referenceNo,
      nationality: response.data.nationality,
      admissionDate: response.data.admissionDate,
      graduationDate: response.data.graduationDate,
      indexNo: response.data.indexNo,
      qrCode: response.data.qrCode,
    };
    res.render("Howtouse",student);
  })
  .catch(function (error) {
    console.log(error);
  });  
})

app.get('/details', function(req, res){
  var config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://localhost:7078/api/Student/1',
    headers: { 
      'Content-Type': 'application/json', 
    },
    responseType: 'json',
    httpsAgent: https.Agent({rejectUnauthorized: false})
  };
  
  axios(config)
  .then(function (response) {
    console.log(response.data);
    const student = {
      fName: response.data.fName,
      sName: response.data.sName,
      oName: response.data.oName,
      image: response.data.image,
      programme: response.data.programme,
      stdNo: response.data.referenceNo,
      nationality: response.data.nationality,
      admissionDate: response.data.admissionDate,
      graduationDate: response.data.graduationDate,
      indexNo: response.data.indexNo,
      qrCode: response.data.qrCode,
    };
    res.render("Details",student);
  })
  .catch(function (error) {
    console.log(error);
  });  
})

app.listen(process.env.APP_PORT, function (req, res) {
  console.log("Server running on port: " + process.env.APP_PORT);
});

// ipconfig
// netsh wlan set hostednetwork mode=allow ssid=nchor key=12345678
// netsh wlan start hostednetwork