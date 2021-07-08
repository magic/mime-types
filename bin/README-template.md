<!--

This file gets generated via 'bin/README-template.md'
do not change README.md, change the template instead!

-->

# @magic/mime-types

exports all mime-db mimetypes that have file extensions.

exports a key => value store,

where key = extension and value = mime/type

[html-docs](https://magic.github.io/mime-types)

### installation
be in a nodejs project
```bash
npm install --save-exact @magic/mime-types
```

### recreate README.md
**README.md should never be changed manually.**
run
```bash
./bin/bin.mjs docs
```
to rebuild the file.

### usage:
in yourproject.js

```javascript
import defaultMimes, { mimes, compressibles } from '@magic/mime-types'
```

very detailed usage below

## Dev

### recreate src/index.mjs
**src/index.mjs should never be changed manually.**
run
```bash
./bin/bin.mjs build
```
to rebuild the file.

### changelog

#### 0.0.1
first publish

#### 0.0.2
* required node version is >= 13.5.0
* update mime-db

#### 0.0.3
bump required node version to 14.2.0

#### 0.0.4
small change

#### 0.0.5
* bin now only builds, no commands needed.
* build only loops once.
* update documentation.

#### 0.0.6
update mime-db

#### 0.0.7
update mime-db

#### 0.0.8
update mime-db

#### 0.0.9
* remove greenkeeper badges from readme
* update @magic devdependency libraries

#### 0.0.10
update mime-db

#### 0.0.11 - unreleased
...


### import / usage
```javascript
import mimes from '@magic/mime-types'

||::mime-db-content::||
```

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic/mime-types.svg
[npm-url]: https://www.npmjs.com/package/@magic/mime-types
[travis-image]: https://img.shields.io/travis/com/magic/mime-types.svg?branch=master
[travis-url]: https://travis-ci.com/magic/mime-types
[appveyor-image]: https://img.shields.io/appveyor/ci/magic/mime-types/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magic/mime-types/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic/mime-types/badge.svg
[coveralls-url]: https://coveralls.io/github/magic/mime-types
[snyk-image]: https://snyk.io/test/github/magic/mime-types/badge.svg
[snyk-url]: https://snyk.io/test/github/magic/mime-types
