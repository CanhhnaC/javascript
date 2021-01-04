const fs = require("fs");
const path = require("path");

const minute = ["00", "15", "30", "45"];

const test = [...Array(24)]
  .map((_e, i) => minute.map((m) => `${i < 10 ? "0" + i : i}:${m}`))
  .flat();

const timer = [];
for (let i = 0; i < 24; i++) {
  minute.forEach((m) => timer.push(`${i < 10 ? "0" + i : i}:${m}`));
}

const dataMock = JSON.stringify(test); // Pass number inside generate Func
const filepath = path.join(__dirname, "timer.json");

fs.writeFile(filepath, dataMock, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
