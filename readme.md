# Introduction

# Development

## Technologies and Tools

- HTML
- CSS
- Javascript
- SCSS
- JQuery

## Getting started

- Run this command `npm init`
- Run this command to install node-sass
  If your Node version is a 14.x version, enter:
  `npm install --save-dev node-sass@4.14.1`
  If your Node version is a 15.x version, enter:
  `npm install --save-dev node-sass@5`
  If your Node version is a 16.x version, enter:
  `npm install --save-dev node-sass@6`
- Run these command
  `npm install --save-dev sass`
  `npm install --save-dev onchange@7.0.0`
  `npm install --save-dev -E parallelshell@3.0.1`
- Add compilation script to `package.json`
  `"scripts": { "lite": "lite-server", "scss": "node-sass -o css/ css/", "start": "npm run watch:all", "test": "echo \"Error: no test specified\" && exit 1", "watch:scss": "onchange 'css/*.scss' -- npm run scss", "watch:all": "parallelshell 'npm run watch:scss' 'npm run lite'" },`
- Run the scss compiler
  `npm run scss`

## Demo

Please see the demo [site](landing-company.netlify.app). Deployed on Netlify.
