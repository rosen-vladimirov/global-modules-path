"use strict";

// Linter rules, so mocha's methods will not be detected as undeclared.
/* global describe, it */

const assert = require("chai").assert;

describe("getProcessPlatform", () => {
	it("returns process.platform", () => {
		const actualResult = require("../lib/process-wrapper").getProcessPlatform();
		assert.deepEqual(process.platform, actualResult);
	});
});
