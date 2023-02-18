const { error } = require("console")
const fs = require("fs")

const get = function(file) {
    try {
        const data = fileRef = fs.readFileSync("node_modules/sdb.js/" + file, "utf8")
        return data
    }
    catch (err) {
        return null
    }
}

const set = function(file, newData) {
    try {
        fs.writeFileSync("node_modules/sdb.js/" + file, newData)
    }
    catch {
        error("sdb.js - an error occurred while setting data; please make sure that the parameters are both strings")
    }
}

const append = function(file, newData) {
    try {
        fs.appendFileSync("node_modules/sdb.js/" + file, newData)
    }
    catch {
        error("sdb.js - an error occurred while appending data; please make sure that the parameters are both strings")
    }
}



module.exports.get = get
module.exports.set = set
module.exports.append = append