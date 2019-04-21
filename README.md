[![Build Status](https://travis-ci.org/zrrrzzt/b5-web.svg?branch=master)](https://travis-ci.org/zrrrzzt/b5-web)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# b5-web

Webapp for big five personality test.

Let's you answer 120 questions from the [Johnson 120 IPIP-NEO-PI-R](http://ipip.ori.org/30FacetNEO-PI-RItems.htm) items.

Runs on Node/Next.js but can be exported to a static site.

See it live: [b5.allthethings.win](https://b5.allthethings.win/)

## Deploy your own to ZEIT/Now

You will need to have [Now](https://zeit.co/now) installed as well as [Node.js](https://nodejs.org).

- Clone the repo.
- Configure [now.json](now.json) with your own alias
- Run the deploy script 

```
$ npm run deploy
```

## Deploy your own to another host

- Clone the repo
- Install dependencies
- Run the export script

```
$ npm run export
```

Deploy the `dist` folder to your favorite host


## Related
- [b5-johnson-120-ipip-neo-pi-r](https://github.com/Alheimsins/b5-johnson-120-ipip-neo-pi-r) The npm module with questions
- [b5-calculate-score](https://github.com/zrrrzzt/b5-calculate-score) Module for calculating score
- [b5-result-text](https://github.com/zrrrzzt/b5-result-text) Create a text resume based on the score
- [bigfive-web](https://github.com/Alheimsins/bigfive-web) Different approach to testsite based on microservices

## License

[MIT](LICENSE)

## About

Created with <3 by [zrrzzt](https://github.com/zrrrzzt) and [maccyber](https://github.com/maccyber)
