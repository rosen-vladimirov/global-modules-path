#!/usr/bin/bash

npm i -g ./local-module/local-module-1.0.0.tgz
npm i -g ./local-module-2/local-module-2-1.0.0.tgz
../node_modules/mocha/bin/_mocha --recursive --reporter spec-xunit-file --timeout 1500 linux.js