# Drator

Simple API for sending data from the server to the client

## Usage

```js
// server.js
import {dehydrate} from 'drator';

const data = {
  simple: 'object'
}

const markup = dehydrate('App', data);

// 'window.App={"simple":"object"}'
```

```js
// client.js
import {hydrate} from 'drator';

const data = hydrate('App');

data.simple; // 'object'
```


