// You are given a log file with a list of GET requests delimited with double quotes
// and spaces.
// A sample and the structure of the text file containing the log entries are given below.
// Sample log record: unicomp6.unicomp.net - - [01/Jul/1995:00:00:06 -0400] "GET /shuttle/countdown/ HTTP/1.0" 200 3985
// Given a filename that denotes a text file in the current working directory. 
// Create an output file with the name "bytes_" prefixed to the filename (bytes_filename)
// which stores the information about large responses.

// Example: filename = "hosts_access_log_00.txt", process the records in 
// hosts_access_log_00.txt and create an output file
// named bytes_hosts_access_log_00.txt.

// Write the following to the output file:
// 1. The first line must contain the number of requests that have more than 5000 bytes 
// sent in their response.
// 2. The second line must contain the total sum of bytes sent by all responses sending
//  more than 5000 bytes.

// Note:
// The output file has to be written to the current directory.

// Constraints
// • It is guaranteed that the total number of bytes sent by all large responses 
// does not exceed 1012.
// • The log file contains no more than 2 x 105 records.

const fs = require('fs')

function processLogFile(filename){
    const inputFile = fs.readFileSync(filename, 'utf8').split('\n')
    // console.log(inputFile)
    let largeResponseCount = 0
    let totalBytes = 0
    
    inputFile.forEach((line) => {
        const matches = line.match(/"GET [^"]+" (\d+) (\d+)/)
        if (matches && matches.length === 3) {
            const status = parseInt(matches[1])
            const bytes = parseInt(matches[2])
            
            if (status === 200 && bytes > 5000) {
                largeResponseCount++
                totalBytes += bytes
            }
        }
    })
    console.log(largeResponseCount)
    console.log(totalBytes)
    
    const outputContent = `${largeResponseCount}\n${totalBytes}`
    
    const outputFile = `bytes_${filename}`
    
    fs.writeFileSync(outputFile, outputContent, 'utf8')
}

const filename = readLine();
processLogFile(filename)