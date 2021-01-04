/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const _ = require("lodash");
const faker = require("faker/locale/ja");

const mockArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
];

function generateEmployees(number = 50) {
  console.log(number);
  const data = [];
  for (let id = 1; id < number; id++) {
    let randArr = [...Array(_.random(1, mockArray.length)).keys()].map(
      (_item, key) => mockArray[key]
    );
    let randNumb = _.random(1, 99999);
    let randWord = faker.lorem.words(30);
    data.push({
      id,
      array: randArr,
      number: randNumb,
      words: randWord,
    });
  }
  return data;
}

const dataMock = JSON.stringify(generateEmployees()); // Pass number inside generate Func
const filepath = path.join(__dirname, "data.json");

fs.writeFile(filepath, dataMock, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
