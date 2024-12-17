/** eg: job_postings.csv */
const CSV_FILE_PATH = "job_postings.csv";

/** eg: job_postings.json - doesn't really matter unless you want just the JSON output */
const JSON_FILE_NAME = "job_postings.json";

/** eg: ./output_sql_files - no need to change this */
const OUTPUT_DIRECTORY = "./output_sql_files";

/** eg: ./input_csv_files - no need to change this */
const INPUT_DIRECTORY = "./input_csv_files";

/** eg: 2000 - this is the maximum number of inserts per file - increase if the server can support that large of a file */
const MAX_INSERTS_PER_FILE = 2000;

/** eg: mysql_api_db - the database name */
const DATABASE = "mysql_api_db";
/** eg: job_postings - the table name */
const TABLE_NAME = "job_postings";

/** eg: job_postings - the output file name. Each batch file will be output as job_postings_1.sql, job_postings_2.sql, etc. */
const SQL_OUTPUT_FILE_NAME = "job_postings";

module.exports = {
  CSV_FILE_PATH,
  JSON_FILE_NAME,
  OUTPUT_DIRECTORY,
  MAX_INSERTS_PER_FILE,
  DATABASE,
  TABLE_NAME,
  SQL_OUTPUT_FILE_NAME,
  INPUT_DIRECTORY,
};
