# Drator

Simple API for sending data from the server to the client mainly so I can get used to publishing to npm.

## Usage


### Simple data sharing

```js
// server.js
import {dehydrate} from 'drator';

const markup = dehydrate('App', {simple: 'object'});

// 'window.App={"simple":"object"}'
```

```js
// client.js
import {hydrate} from 'drator';

const data = hydrate('App');

data.simple; // 'object'
```
