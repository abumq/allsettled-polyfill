# Promise.allSettled Polyfill

A simple polyfill with zero-dependecies for `Promise.allSettled`. Uses default implementation if available.

[![Version](https://img.shields.io/npm/v/allsettled-polyfill.svg)](https://www.npmjs.com/package/allsettled-polyfill)

## Install

Using NPM

```
npm i allsettled-polyfill --save
```

```
yarn add allsettled-polyfill
```

## Usage

```js
import 'allsettled-polyfill';

Promise.allSettled([Promise.resolve(2), Promise.resolve(3), Promise.reject(555)])
```

### Log rejection

```js
import 'allsettled-polyfill';

Promise.allSettled([Promise.resolve(2), Promise.resolve(3), Promise.reject(555)]).then(results => results.filter(res => res.status === 'rejected'))
.then(rejectedPromises => {
  if (rejectedPromises.length > 0) {
    rejectedPromises.forEach(rejectedPromise => {
      console.error('Rejected promise reason: %s', rejectedPromise.reason);
    })
  }
});
```

## License
```
The MIT License (MIT)

Copyright (c) 2018 Amrayn Web Services
Copyright (c) 2018 @abumusamq

https://github.com/amrayn/
https://amrayn.com

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
