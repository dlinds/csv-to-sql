## Purpose

This repo is used to convert a CSV to a batch of SQL insert files. There's probably a more efficient way to do it, but it

- converts the CSV to JSON
- converts the JSON to SQL
- outputs at different batch sizes to .SQL files

You need to make sure whatever CSV your converting has the same column names as the table you're inserting into.

## Usage

Install packages with `yarn install`

1. Add your CSV to the `input_csv_files` directory
   - make sure the column names match your table that you're inserting into
2. Update the `constants.js` file with the appropriate values
3. Run `node index.js` in your terminal
4. Get the outputted files from the `output_sql_files` directory
5. Import them into MySQL

## Notes

The two steps both output individual files. If you want the JSON output for some reason, it's just in the root after step 1.
