# Laima

A starter kit of Front-End Tool to develop, showcase, and mock API,
powered by webpack.

## Usage

```bash
git clone git@github.com:indigofeather/laima.git
cd laima
yarn
```

## Commands

```bash
# start server
yarn start

# start mock if you need
yarn run mock

# build projeck
yarn run build
yarn run build:view

# before `release` and `master`, please `build`
# git push `build/release`
yarn run release
# git push `build/master`
yarn run master

# lint with ESLint
yarn run lint

# test with karma-mocha
yarn test
yarn run test:watch
```

## Caveats

 - Webpack `reslove.root` = `src`
 - `gh-pages` default branch:
    - `release`: `build/release`
    - `master`: `build/master`

## Folder Structure

 - `build/` - build files
 - `mock/` - mock
    - api.js
    - server.js
 - `src/` - source files
    - `font/`
    - `img/`
        - `sprites/` - images for sprite
        - `sprites-build` - build files of sprite
    - `template`
        - `dev.jade`
        - `index.jade`
    - `index.js`
    - `index.css`
 - `static` - static files, copy to `build`
    - `locales/` - i18n files
 - `test/` - testing files

## Build Folder Structure

 - `build/` - build files
    - `_/`
        - `font/`
        - `img/`
    - `locales/`
    - `application-[hash:7].css`
    - `application-[hash:7].css.map`
    - `bundle-[hash:7].js`
    - `bundle-[hash:7].js.map`
    - `vendor-[hash:7].js`
    - `vendor-[hash:7].js.map`
    - `index.html`
    - `manifest.appcache`

## Tools

 - [font-minify](https://github.com/indigofeather/font-minify)
 - [laima-api-tools](https://github.com/indigofeather/laima-api-tools)
 - [eslint-config-l3e](https://github.com/l3e/eslint-config-l3e)
 - [eslint-config-l3e-base](https://github.com/l3e/eslint-config-l3e-base)

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
