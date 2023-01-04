#!/usr/bin/bash

cd local-module
npm pack
cd ../
npm i -g ./local-module/local-module-1.0.0.tgz
pwd
node linux.js