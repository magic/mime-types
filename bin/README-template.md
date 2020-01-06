---

This file gets generated via 'bin/README-template.md'
do not change README.md, change the template instead!

---

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


### recreate src/index.mjs
**src/index.mjs should never be changed manually.**
run
```bash
./bin/bin.mjs build
```
to rebuild the file.


### import / usage
```javascript
import mimes from '@magic/mime-types'

||::mime-db-content::||
```

### changelog

#### 0.0.1
first publish

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic/mime-types.svg
[npm-url]: https://www.npmjs.com/package/@magic/mime-types
[travis-image]: https://img.shields.io/travis/com/magic/mime-types.svg?branch=master
[travis-url]: https://travis-ci.com/magic/mime-types
[appveyor-image]: https://img.shields.io/appveyor/ci/magic/mime-types/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magic/mime-types/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic/mime-types/badge.svg
[coveralls-url]: https://coveralls.io/github/magic/mime-types
[greenkeeper-image]: https://badges.greenkeeper.io/magic/mime-types.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic/mime-types.svg
[snyk-image]: https://snyk.io/test/github/magic/mime-types/badge.svg
[snyk-url]: https://snyk.io/test/github/magic/mime-types
