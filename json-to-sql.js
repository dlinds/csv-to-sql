const fs = require("fs");
const path = require("path");
const {
  JSON_FILE_NAME,
  OUTPUT_DIRECTORY,
  MAX_INSERTS_PER_FILE,
  DATABASE,
  TABLE_NAME,
  SQL_OUTPUT_FILE_NAME,
} = require("./constants");

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIRECTORY)) {
  fs.mkdirSync(OUTPUT_DIRECTORY);
}

// Read the JSON file
const data = fs.readFileSync(JSON_FILE_NAME, "utf8");
const items = JSON.parse(data);

let insertStatements = [];
let fileCount = 1;

// Get all the keys (column names) from the first object
const columns = Object.keys(items[0]);

for (let i = 0; i < items.length; i++) {
  const currentItem = items[i];

  const values = columns.map((column) => {
    let value = currentItem[column];

    if (value === null || value === undefined || value === "") {
      return "NULL";
    }

    if (value === "true" || value === "false") {
      return value === "true" ? true : false;
    }

    // now check if it's a number and parse if so
    if (value !== "" && !isNaN(value)) {
      return value;
    }

    // Escape single quotes in strings
    if (typeof value === "string") {
      value = value.replace(/'/g, "''");
      return `'${value}'`;
    }

    // Return numbers and booleans as is
    return value;
  });

  const insertStatement = `INSERT INTO ${
    DATABASE ? `${DATABASE}.` : ""
  }${TABLE_NAME} (${columns.join(", ")}) VALUES (${values.join(", ")});`;
  insertStatements.push(insertStatement);

  if (
    insertStatements.length === MAX_INSERTS_PER_FILE ||
    i === items.length - 1
  ) {
    const outputFilePath = path.join(
      OUTPUT_DIRECTORY,
      `${SQL_OUTPUT_FILE_NAME}_${fileCount}.sql`
    );
    fs.writeFileSync(outputFilePath, insertStatements.join("\n") + "\n");
    insertStatements = [];
    fileCount++;
  }
}

console.log(
  `SQL insert statements have been generated in the folder '${OUTPUT_DIRECTORY}'.`
);
