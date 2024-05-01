# Socketing

## Description

Sample project to learn more about how Web Sockets work.

## Getting started

Clone this repository and run the following commands:

```bash
npm install
npm run dev
```

This should fire up the `NodeJS` server and let you know that's is listening on `ws://localhost:8080`. So now you can open the `/websocket/frontend/index.html`  on your Browser and check the DevTool's Console as you click on the `Greet` button.

## References

- [WebSockets in 100 seconds](https://www.youtube.com/watch?v=1BfCnjr_Vjg).

## What, Where and Why?

Web Sockets are a another way that a `Server` and a `Client` can communicate between each other.

Tradicitonally, information is sent to the `Client` only when they request it (tipically via a `GET` call). But when we want our `Clients` to have the most up to date information, we could try to develop a timer based approach of every X seconds/minutes/hours, to fetch more data. But when there's a need for a more instant method, for example:

1. When you have chat app where multiple members of the group can send and receive messages in real time.
2. When you want to refresh data instately on the `Client` like stock market app with a dashboard.

This is where `Web Sockets` shine.

We can make use of the `ws` npm package on a `NodeJS` server and use the built-in version of that same library in the client.
