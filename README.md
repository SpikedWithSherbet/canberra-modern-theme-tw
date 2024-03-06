# Canberra Modern Theme - Tailwind CSS version

The basic bones of this theme have been created by Ben Ennis Butler as a starting point for students studying front-end web design (11056).

This version has been set up to use tailwind CSS.

## The Timber Starter Theme

[![Build Status](https://travis-ci.com/timber/starter-theme.svg?branch=master)](https://travis-ci.com/github/timber/starter-theme)
[![Packagist Version](https://img.shields.io/packagist/v/upstatement/canberra-modern-theme?include_prereleases)](https://packagist.org/packages/upstatement/canberra-modern-theme)

The "_s" for Timber: a dead-simple theme that you can build from. The primary purpose of this theme is to provide a file structure rather than a framework for markup or styles. Configure your SASS files, scripts, and task runners however you would like!


### The `StarterSite` class

In **functions.php**, we call `new StarterSite();`. The `StarterSite` class sits in the **src** folder. You can update this class to add functionality to your theme. This approach is just one example for how you could do it.

The **src** folder would be the right place to put your classes that [extend Timber’s functionality](https://timber.github.io/docs/v2/guides/extending-timber/).

Small tip: You can make use of Composer’s [autoloading functionality](https://getcomposer.org/doc/04-schema.md#psr-4) to automatically load your PHP classes when they are requested instead of requiring one by one in **functions.php**.

## What else is there?

- `static/` is where you can keep your static front-end scripts, styles, or images. In other words, your Sass files, JS files, fonts, and SVGs would live here.
- `views/` contains all of your Twig templates. These pretty much correspond 1 to 1 with the PHP files that respond to the WordPress template hierarchy. At the end of each PHP template, you’ll notice a `Timber::render()` function whose first parameter is the Twig file where that data (or `$context`) will be used. Just an FYI.
- `tests/` ... basically don’t worry about (or remove) this unless you know what it is and want to.

## Other Resources

* [Twig for Timber Cheatsheet](http://notlaura.com/the-twig-for-timber-cheatsheet/)
* [Timber and Twig Reignited My Love for WordPress](https://css-tricks.com/timber-and-twig-reignited-my-love-for-wordpress/) on CSS-Tricks
* [A real live Timber theme](https://github.com/laras126/yuling-theme).
* [Timber Video Tutorials](http://timber.github.io/timber/#video-tutorials) and [an incomplete set of screencasts](https://www.youtube.com/playlist?list=PLuIlodXmVQ6pkqWyR6mtQ5gQZ6BrnuFx-) for building a Timber theme from scratch.
