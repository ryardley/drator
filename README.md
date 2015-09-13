# Drator

Simple API for sending data from the server to the client mainly so I can get used to publishing to npm.

## Usage


### Simple data sharing

The idea is to send structured data on the rendered HTML page to your clientside code. This is done so that your clientside code can pick up the state of the app as constructed by the server and continue to serve user interations.

#### To send a message

```js
// server.js
import {dehydrate} from 'drator';

const markup = dehydrate('App', {simple: 'object'});

// 'window.App={"simple":"object"}'
```


#### To recieve a message
```js
// client.js
import {hydrate} from 'drator';

const data = hydrate('App');

data.simple; // 'object'
```

