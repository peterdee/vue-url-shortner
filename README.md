## vue-url-shortner

[![Build Status](https://travis-ci.com/peterdee/vue-url-shortner.svg?branch=stage)](https://travis-ci.com/peterdee/vue-url-shortner)

[![Known Vulnerabilities](https://snyk.io/test/github/peterdee/vue-url-shortner/badge.svg?targetFile=package.json)](https://snyk.io/test/github/peterdee/vue-url-shortner?targetFile=package.json)

Frontend for the [deno-url-shortner](https://github.com/peterdee/deno-url-shortner) project.

Stack: [`Express`](https://expressjs.com/), [`Vue`](https://vuejs.org/), [`Vue-Router`](https://router.vuejs.org/)

DEV: http://localhost:5050

STAGE: https://vue-url-shortner.herokuapp.com

### Deploy

```shell script
git clone https://github.com/peterdee/vue-url-shortner
cd ./vue-url-shortner
nvm use 14
npm install
```

### Environment

The `.env` file is required.

See the [.env.example](.env.example) for more information.

### Launch

```shell script
npm run serve
```

### Lint

```shell script
npm run lint
```

### Build

```shell script
npm run build
```

### Static

Build the project and then run:

```shell script
npm run start
```

Static files are served with `Express`.

See the [serve.js](serve.js) file for more information.

### Heroku

The `stage` branch is deployed to Heroku automatically.
