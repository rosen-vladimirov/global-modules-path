const { assert } = require("chai");

describe("integration tests", () => {
    it("full name", () => {

        const pathToPackage = require("../").getPath("local-module", "local-module");
        assert.deepEqual(pathToPackage.replace(/\/node\/18\..+?\..+?\//, "node/NODE_VERSION/"), "/opt/hostedtoolcache/node/NODE_VERSION/x64/lib/node_modules/local-module")
    });

    it("short name", () => {

        const pathToPackage = require("../").getPath("local-module", "lm");
        assert.deepEqual(pathToPackage.replace(/\/node\/18\..+?\..+?\//, "node/NODE_VERSION/"), "/opt/hostedtoolcache/node/NODE_VERSION/x64/lib/node_modules/local-module")
    });
});
