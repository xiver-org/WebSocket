# WebSocket Chat
![Untitled-3](https://user-images.githubusercontent.com/66390330/227357662-a8dc2189-bbe8-48ee-a6e4-d12c75e4c2be.png)

WebSocket Chat


ws is a simple to use, blazing fast, and thoroughly tested WebSocket client and server implementation.

Passes the quite extensive Autobahn test suite: server, client.

Note: This module does not work in the browser. The client in the docs is a reference to a back end with the role of a client in the WebSocket communication. 
Browser clients must use the native WebSocket object. To make the same code work seamlessly on Node.js and the browser, you can use one of the many wrappers 
available on npm, like isomorphic-ws.
Docs: https://www.npmjs.com/package/ws

![WebSocket](https://user-images.githubusercontent.com/66390330/227494531-a9dc327c-cfef-4926-ade8-c59135220634.png)

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

```bash
npm run start
```
## Client launch

Open the directory where the repository is stored locally, open the /public directory. Run index.html. The number of times index.html is run, 
the number of clients you will create.
