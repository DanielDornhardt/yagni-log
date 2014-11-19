Package.describe({
  name: 'yagni:log',
  summary: "Simple log method for client, server and templates.",
  homepage: "https://github.com/DanielDornhardt/yagni-log",
  author: "Daniel Dornhardt <daniel@dornhardt.com> (http://www.dornhardt.com)",
  version: "1.2.1",
  git: "https://github.com/DanielDornhardt/yagni-log.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.export('log');
  api.addFiles('yagni-log.js');
});
