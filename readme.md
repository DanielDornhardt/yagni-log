yagni-log
===

Usage
---

log('inside coolFunc',this,arguments);

Installation
---

Make sure to have installed the meteorite package manager for Meteor (see https://github.com/oortcloud/meteorite/)

To install:

    mrt add yagni-log

Synopsis
---
"log" - A light console.log - wrapper

http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/

NOTE: Always wraps the given arguments in an array for better content formatting in the
different browsers' consoles! Don't be surprised!

A little bit longer:
---

A simple log command to be able to call log('something') on both client and server.

On the client it writes to the browser console, on the server to stdout / wherever console.log puts its stuff.

Makes sure the console.log - command exists (eg. older IEs), and allows for dumping arguments and basically anything else.

Behaves like the standard console.log in that it's possible to pass multiple parameters.

Also it wraps all items to be logged in an array which tends to lead to a more readable console.log output.

License
---

Published by Paul Irish and put into public domain (see linked page: http://www.paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/#comment-786938033)

Meteor package produced by Daniel Dornhardt <daniel at dornhardt.com> and put into the public domain as well using the un-license (see un-license.txt).
