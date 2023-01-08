const { assert } = require("chai");

describe("Integration tests", () => {
    it("finds correct path to executable when full name of executable is used", () => {
        const pathToPackage = require("../").getPath("local-module", "local-module");
        assert.deepEqual(pathToPackage.replace(/\/node\/18\..+?\..+?\//, "/node/NODE_VERSION/"), "C:\\npm\\prefix\\node_modules\\local-module");
    });

    it("finds correct path to executable when package name and executable name differ", () => {
        const pathToPackage = require("../").getPath("local-module", "lm");
        assert.deepEqual(pathToPackage.replace(/\/node\/18\..+?\..+?\//, "/node/NODE_VERSION/"), "C:\\npm\\prefix\\node_modules\\local-module");
    });

    it("finds correct path to executable when only package name is used", () => {
        const pathToPackage = require("../").getPath("local-module");
        assert.deepEqual(pathToPackage.replace(/\/node\/18\..+?\..+?\//, "/node/NODE_VERSION/"), "C:\\npm\\prefix\\node_modules\\local-module");
    });
});
