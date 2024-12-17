const csv = require("csvtojson");
const fs = require("fs");
const { CSV_FILE_PATH, JSON_FILE_NAME } = require("./constants");

csv()
  .fromFile(CSV_FILE_PATH)
  .then((jsonObj) => {
    fs.writeFileSync(JSON_FILE_NAME, JSON.stringify(jsonObj, null, 2));
  });
