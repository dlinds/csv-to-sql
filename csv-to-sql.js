const { exec } = require("child_process");

exec("node csv-to-json.js", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing csv-to-json.js: ${error}`);
    return;
  }
  console.log(`csv-to-json.js output: ${stdout}`);
  if (stderr) {
    console.error(`csv-to-json.js stderr: ${stderr}`);
  }

  exec("node json-to-sql.js", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing json-to-sql.js: ${error}`);
      return;
    }
    console.log(`json-to-sql.js output: ${stdout}`);
    if (stderr) {
      console.error(`json-to-sql.js stderr: ${stderr}`);
    }
  });
});
