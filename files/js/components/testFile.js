define([
  "jquery"
], function ($) {
  "use strict";

  // Proof of requirejs concept
  console.log("this will log first since testFile.js is loaded first from main.js before the init main console log is called")

  var TestFile = {};

  TestFile.init = function () {
  	console.log("init test file will log last");
  };
  
  return TestFile;
});