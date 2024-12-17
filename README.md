## Purpose

This repo is used to convert a CSV to a batch of SQL insert files. There's probably a more efficient way to do it, but it

- converts the CSV to JSON
- converts the JSON to SQL
- outputs at different batch sizes to .SQL files

## Usage

1. Update the `constants.js` file with the appropriate values
2. Run `node index.js` in your terminal
3. Get the outputted files from the `output_sql_files` directory
4. Import them into MySQL

## Notes

The two steps both output individual files. If you want the JSON output for some reason, it's just in the root after step 1.
