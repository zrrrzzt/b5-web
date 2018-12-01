[![Build Status](https://travis-ci.org/zrrrzzt/b5-web.svg?branch=master)](https://travis-ci.org/zrrrzzt/b5-web)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# b5-web

Website for big five personality test.

Let's you answer 120 questions from the [Johnson 120 IPIP-NEO-PI-R](http://ipip.ori.org/30FacetNEO-PI-RItems.htm) items.

Runs on Node/Next.js but can be exported to a static site.

See it live: [b5.allthethings.win](https://b5.allthethings.win/)

## Deploy your own to ZEIT/Now

Clone the repo.

Install dependencies.

```
$ npm install
```

Export the site to a static version

```
$ npm run export
```

Deploy the export to Now

```
$ now --static out --name b5-web
```

## Related
- [b5-johnson-120-ipip-neo-pi-r](https://github.com/Alheimsins/b5-johnson-120-ipip-neo-pi-r) The npm module with questions
- [b5-calculate-score](https://github.com/zrrrzzt/b5-calculate-score) Module for calculating score
- [b5-result-text](https://github.com/zrrrzzt/b5-result-text) Create a text resume based on the score
- [bigfive-web](https://github.com/maccyber/bigfive-web) Different approach to testsite based on microservices

## License

[MIT](LICENSE)

## About

Created with <3 by [zrrzzt](https://github.com/zrrrzzt) and [maccyber](https://github.com/maccyber)

![Robohash image of zrrrzzt](https://robots.kebabstudios.party/zrrrzzt.png "Robohash image of zrrrzzt") 
![Robohash image of maccyber](https://robots.kebabstudios.party/maccyber.png "Robohash image of maccyber")