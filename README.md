# Use OpenLayers 3 with Browserify or WebPack

To get started on an OpenLayers project, you have two main choices to manage dependencies:

* By hand, like if you go to take a look on the [OpenLayers official quickstart](http://openlayers.org/en/v3.13.1/doc/quickstart.html)

* Using Node tools like Browserify or WebPack to get all the libraries, compress them and manage dependencies

## How to

For this purpose, this repository was created.

Here, we use `ol.js` bundled file but normally, you have to build your own custom `ol.js` file to gain file size in production.

Let's get started!

### Retrieve repository

You can do the following to make things worked (you already have `git` on your machine for sure)

    git clone https://github.com/webgeodatavore/demo_browserify_webpack_ol3.git
    cd demo_browserify_webpack_ol3

or if you want to avoid using `git`, download, unzip <https://github.com/webgeodatavore/demo_browserify_webpack_ol3/archive/master.zip> and go into the directory using the system command line executable `cd`.

### Install dependencies

Then, run NPM (we supposed you already installed [Node](http://nodejs.org) or [io.js](https://iojs.org))

    npm install

Build the js code including ol3 library and the custom code

*With Browserify*

    ./node_modules/.bin/browserify app.js -o bundle.js

*With WebPack*

    ./node_modules/.bin/webpack app.js bundle.js

We were able to solve various issues due to feedbacks from [this issue](https://github.com/openlayers/ol3/issues/3162).
We changed the webpack.config.js and it works now.

### Test

Open in a browser the index.html file, preferably hosted on a server

Congrats! It should display a map!

If not, open an issue to tell us more!

## Note

* In the repository, for the demo purpose, we added `devDependencies` to both Browserify and WebPack. In fact, depending of your tool choice, you can remove for Browserify only `webpack` and for WebPack, `browserify`.
* The version of OpenLayers is now updated to 3.13.1

## Learn more

**Browserify**

* [Browserify official website](http://browserify.org/)
* [Browserify handbook](https://github.com/substack/browserify-handbook)

**WebPack**

* [WebPack official website](https://webpack.github.io)
* [How To WebPack](https://github.com/petehunt/webpack-howto)
* [WebPack for Browserify users](https://github.com/webpack/docs/wiki/webpack-for-browserify-users)
