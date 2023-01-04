const pathToPackage = require("../").getPath("local-module", "local-module");
const pathToPackageLm = require("../").getPath("local-module", "lm");
console.log("PATH TO PACKAGE: " + pathToPackage);
console.log("PATH TO PACKAGELM " + pathToPackageLm);