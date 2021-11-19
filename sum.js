const fs = require('fs');
const path = require('path');
const readline = require('readline');

/**
 * Return a sum of the numbers included in each file recursively
 *
 * @param filename {String} - A relative path to the file
 * @param output {Object<String, Number>} - The output containing the filename and it's current sum
 * @param last {String} - The file name we came from
 *
 * @returns {Promise} - A promise object with the output containing all the file names and their sum
 */
async function sumOfFiles(filename, output = {}, last= '') {
    const name = path.basename(filename);
    let next = [];
    output[name] = 0;
    return new Promise((resolve, reject) => {
        // Use readline to create a stream and read each file line by line
        const lines = readline.createInterface({
            input: fs.createReadStream(path.join(__dirname, filename)),
        });
        // Throw an error if the file doesn't exist
        if(!lines) reject(new Error('Invalid File'));
        // Iterate through each line and increment the value
        // If it's not a value greater than 0 we store the line as the next value
        lines.on('line', (line) => {
            if(line >= 0) {
                output[name] += Number(line);
            } else {
                next.push(line);
            }
        });

        // When the stream closes either recursively check the next file or resolve the output
        lines.on('close', async () => {
            for (const file of next) {
                await sumOfFiles(path.join(path.dirname(filename), file), output, name);
            }

            resolve(output);

            // Increment the value of the current file into the last one
            if (last) {
                output[last] += output[name];
            }
        });

        lines.on('error', (error) => {
            reject(error);
        });
    });
}

module.exports = sumOfFiles;
