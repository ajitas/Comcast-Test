# Comcast-Test

## Technology
1. Node.js (JavaScript)

## Node Packages Used
fs
* usage require("fs")
fs is an internal node package used to let the user interact with the file system. In this application, we are reading from text files.
* For more information : fs

## Execution steps
1. Make sure node is installed on your machine. You can visit [node website](https://nodejs.org/en/download/) or if you have Homebrew installed on your mac then visit website [Node Installation](http://blog.teamtreehouse.com/install-node-js-npm-mac) for instructions.
2. Download/Clone the respository.
3. Navigate on terminal to the Comcast-Test folder and then you can type either of these three commands.
    1. Type "node comcast.js" on terminal. Then enter the string "abc123". Should show you 6 (1+2+3)
    2. Type "node comcast.js -x" on terminal. Then enter the string "abc123". Should show you 39 (10+11+12+1+2+3)
    3. Type "node comcast.js -f tmp.txt" on terminal. Should show you 6 as tmp.txt contains "abc123".

## Automated test script
Navigate on terminal to the Comcast-Test folder and then you can type "./comcast-test-script"