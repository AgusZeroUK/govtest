# Some Government Service

This project is a government service to register users.


### Prerequisites

We also use a number of node.js tools to initialize and test angular-seed. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).


### Clone repository

Clone the repository using [git][git]:

```
git clone https://github.com/AgusZeroUK/govtest.git

```

## Installation

Before running any Gulp tasks:

1. Check out this repository
2. Ensure you have node installed
3. Ensure you have installed mongoDB and running.
3. Run `npm install` in the root directory (this will install bower dependencies too)
4. For livereload functionality, install the [livereload Chrome extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)


### Running the App 

```
gulp watch-dev

```


### Running the App in Production (Temporary not working)

```
gulp watch-prod

```

## Project Structure

The project ships with a directory structure like:

    /gov-test
    |
    |---- package.json
    |
    |---- bower.json
    |
    |---- gulpfile.js
    |
    |---- /app
    |     |
    |     |---- index.html
    |     |---- app/
    |     |     |
    |     |     |---- main.component.js
    |     |     |---- main.component.html
    |     |---- confirmation/
    |     |     |
    |     |     |---- confirmation.component.js
    |     |     |---- confirmation.component.html
    |     |---- personal-details/
    |     |     |
    |     |     |---- personal-details.component.js
    |     |     |---- personal-details.component.html
    |     |---- shared/
    |     |     |
    |     |     |---- countries-api.factory.js
    |     |     |---- countries-api.factory.js
    |     |     |---- userService.factory.js
    |     |---- /styles
    |     |     |
    |     |     |---- app.scss
    |
    |---- server.js
    |
    |---- /devServer
    |     |
    |     |---- ...
    |
    |---- (/dist.dev)
    |
    |---- (/dist.prod)
    



### Processed Sources

The gulp tasks listed below deal with taking sources from /app and "compiling" them for either development or production. `*-dev` tasks will output to /dist.dev, and `*-prod` will output to /dist.prod. Here's an overview of the directory structures for each:

### /dist.dev

Sources built for development. Styles are compiled to CSS. Everything else from /app is validated and moved directly in here. Nothing is concatenated, uglified, or minified. Vendor scripts are moved in as well.

    /dist.dev
    |
    |---- /bower_components
    |
    |---- /components
    |     |
    |     ...
    |
    |---- /styles
    |     |
    |     ...
    |
    |---- app.js
    |
    |---- index.html

### /dist.prod

Sources built for production. Everything is validated, things are concatenated and uglified. HTML partials are pre-loaded into the angular template cache with gulp-ng-html2js.

    /dist.prod
    |
    |---- /scripts
    |     |
    |     |---- app.min.js
    |     |---- vendor.min.js
    |
    |---- /styles
    |     |
    |     |---- app.min.css
    |
    |---- index.html
    
Pretty self-explanatory.

### Running Unit Tests

The angular-seed app comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma
configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._test.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.


