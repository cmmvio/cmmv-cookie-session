<p align="center">
  <a href="https://cmmv.io/" target="blank"><img src="https://raw.githubusercontent.com/andrehrferreira/docs.cmmv.io/main/public/assets/logo_CMMV2_icon.png" width="300" alt="CMMV Logo" /></a>
</p>
<p align="center">Contract-Model-Model-View (CMMV) <br/> A minimalistic framework for building scalable and modular applications using TypeScript contracts.</p>
<p align="center">
    <a href="https://www.npmjs.com/package/@cmmv/core"><img src="https://img.shields.io/npm/v/@cmmv/core.svg" alt="NPM Version" /></a>
    <a href="https://github.com/andrehrferreira/cmmv-server/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@cmmv/core.svg" alt="Package License" /></a>
    <a href="https://dl.circleci.com/status-badge/redirect/circleci/QyJWAYrZ9JTfN1eubSDo5u/JEtDUbr1cNkGRxfKFJo7oR/tree/main" target="_blank"><img src="https://dl.circleci.com/status-badge/img/circleci/QyJWAYrZ9JTfN1eubSDo5u/JEtDUbr1cNkGRxfKFJo7oR/tree/main.svg?style=svg" alt="CircleCI" /></a>
</p>

<p align="center">
  <a href="https://cmmv.io">Documentation</a> &bull;
  <a href="https://github.com/andrehrferreira/cmmv-server/issues">Report Issue</a>
</p>

## Description

The ``@cmmv/cookie-session`` module is the CMMV implementation of the popular [cookie-session](https://www.npmjs.com/package/cookie-session) middleware, designed specifically for integration within CMMV applications. It offers an optimized and seamless way to manage sessions using cookies, providing compatibility and performance improvements tailored for CMMV's architecture. This module supports session handling with secure cookie storage, configurable expiration times, and various options to customize session behavior, making it easy to create and manage user sessions in a scalable and organized manner.

By using ``@cmmv/cookie-session``, developers can leverage CMMV's native support for middleware integration while benefiting from performance adjustments and enhancements made specifically for the framework.

## Installation

Install the ``@cmmv/cookie-session`` package via npm:

```bash
$ pnpm add @cmmv/cookie-session
```

## Quick Start

Below is a simple example of how to create a new CMMV application:

```typescript
import cmmv from "@cmmv/server";
import cookieSession from "@cmmv/cookie-session";

const app = cmmv();

app.use(cookieSession( { name: "session", secret: "123" }));

app.get("/", (req, res) => {
    console.log(req.session)
    res.json({Hello: "World"});
})

app.listen({ host: "127.0.0.1", port: 3000})
.then(server => {
    console.log(
        `Listen on http://${server.address().address}:${server.address().port}`,
    );
})
.catch(err => {
    throw Error(err.message);
});
```

## Documentation

The complete documentation is available [here](https://cmmv.io).

## Support

CMMV is an open-source project, and we are always looking for contributors to help improve it. If you encounter a bug or have a feature request, please open an issue on [GitHub](https://github.com/andrehrferreira/cmmv-server/issues).

## Stay in Touch

- Author - [André Ferreira](https://github.com/andrehrferreira)
- Twitter - [@andrehrferreira](https://twitter.com/andrehrferreira)
- Linkdin - [@andrehrf](https://www.linkedin.com/in/andrehrf)
- Youtube - [@Andrehrferreira](https://www.youtube.com/@Andrehrferreira)

## License

CMMV is [MIT licensed](LICENSE).
