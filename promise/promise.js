/*jslint node:true*/
"use strict";

// get data from files
// convert to json
// combine data
// return student with minimum age

/* Promise is natively supported in nodejs from 0.11 version. Hence using polyfill */
var Promise = require("es6-promise").Promise;
var fs = require("fs");
var fetch = require("node-fetch");

/* Returns a Promise object that reads a given file, transforms into json */
function getDataFromFilePromise(file) {
  var getDataFromFile = new Promise(function(resolve, reject) {
    fs.readFile("data/" + file, function(err, data) {
      if (err) {
        reject(err);
      }
      else {
        resolve(data);
      }
    });
  });

  return getDataFromFile.then(JSON.parse);
}

// Fails with an error "only absolute urls are supported"
// eg: http://abc.com/1.json
function getDataFromFileUsingFetch(file) {
  console.log("hi" + file);
  return fetch("data/" + file)
          .then(function(response) {
              console.log(response);
              return response.json();
            });
}

/* Promise to Read files from the directory */
var readDirectory = new Promise(function(resolve, reject) {
  fs.readdir("data", function(err, files) {
    if (err) {
      reject(err);
    }
    else {
      resolve(files);
    }
  });
});

readDirectory.then(function(files) {
  console.log(files);
  // File array to JSON array
  return files.map(getDataFromFilePromise);
})
.then(function(fileReaderPromises) {

  Promise.all(fileReaderPromises)
    .then(function(fileDataArray) {
      // All files are read, list of JSON objects are obtained in fileDataArray
      // Flattening the above array into student list
      return fileDataArray.reduce(function(a,b) { return a.concat(b); });
    })
    .then(function(students) {
      // To find student with minimum age, sorting and finding the first element.
      students.sort(function(a, b) {return a.age - b.age;});
      console.log(students[0]);
    })
    .catch(function(err) {
      console.log(err);
    });
})
.catch(function(err) {
  console.log("Error occurred : " + err);
});
