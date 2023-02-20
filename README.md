# sdb.js
simpledatabase.js (or sdb.js) is a basic, easy-to-use database system that can be read from, written to, or appended from just one line of code.

Install sdb.js from the terminal:
```
npm install sdb.js
```

Here's some example code to get you going:
```
// Add sdb.js into your code
const sdb = require("sdb.js")

// Get string
let data = sdb.getString("NameOfStringToBeRead")

// Set string
sdb.setString("NameOfStringToBeSet", "StringToBeSet")

// Append string
sdb.appendString("NameOfStringToBeAppended", "StringToBeAppended")

// Get array
sdb.getArray("NameOfArrayToBeRed")

// Set array
sdb.setArray("NameOfArrayToBeSet", [ArrayToBeSet])

// Append array
sdb.appendArray("NameOfArrayToBeAppended", [ArrayToBeAppended])
```
