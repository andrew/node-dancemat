# Node Dancemat

Interface for PS3 compatible dancemat controller into Node.js

## Usage

    var DancematController = require('dancemat')
    var dancemat = new DancematController

    dancemat.on("start:press", function(key) {
      console.log("start press");
    });

    dancemat.on("select:press", function(key) {
      console.log("select press");
    });

    dancemat.on("left:press", function(key) {
      console.log("left press");
    });

    dancemat.on("right:press", function(key) {
      console.log("right press");
    });

    dancemat.on("right:release", function(key) {
      console.log("right release");
    });

    dancemat.on("left:release", function(key) {
      console.log("left release");
    });

    dancemat.on("up:press", function(key) {
      console.log("up press");
    });

    dancemat.on("down:press", function(key) {
      console.log("down press");
    });

    dancemat.on("up:release", function(key) {
      console.log("up release");
    });

    dancemat.on("down:release", function(key) {
      console.log("down release");
    });

    dancemat.on("circle:press", function(key) {
      console.log("circle press");
    });

    dancemat.on("circle:release", function(key) {
      console.log("circle release");
    });

    dancemat.on("cross:press", function(key) {
      console.log("cross press");
    });

    dancemat.on("cross:release", function(key) {
      console.log("cross release");
    });

    dancemat.on("triangle:press", function(key) {
      console.log("triangle press");
    });

    dancemat.on("square:press", function(key) {
      console.log("square press");
    });

## Copyright

Copyright (c) 2013 Andrew Nesbitt. See [LICENSE](https://github.com/andrew/node-xbox-controller/blob/master/LICENSE) for details.