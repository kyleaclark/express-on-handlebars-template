define([
  "jquery",
  "js/components/testFile"
], function ($, TestFile) {
  "use strict";

  console.log("init main will log second");
  
  // Call init method from returned TestFile object
  TestFile.init();
});