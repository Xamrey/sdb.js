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

// Get data
var data = sdb.get("NameOfDataToBeRead")

// Set data
sdb.set("NameOfDataToBeSet", "DataToBeSet")

// Append data
sdb.append("NameOfDataToBeAppended", "DataToBeAppended")
```
