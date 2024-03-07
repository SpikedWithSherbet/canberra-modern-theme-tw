# Canberra Modern Theme - Tailwind CSS version

The basic bones of this theme have been created by Ben Ennis Butler as a starting point for students studying front-end web design (11056).

This version has been set up to use TailwindCSS.


## How to use it!

1. First install Wordpress with Local following the instructions on Canvas
2. Make sure your Wordpress site is running!
3. Pull the lastest code from GitHub, via GitHub desktop or VSCode
4. In your terminal, navigate to the theme folder (if you've set VSCode up properly you should be in the root theme folder), then type `npm run watch`. If this doesn't work, you may need to install Node, details below.
5. Start writing code!


## Install Node

For Windows:
Download Installer: [Node.js](https://nodejs.org/)

Run Installer:
Run the downloaded installer and follow the installation instructions.
Ensure that the "npm" package manager option is selected during installation.

Verify Installation:
Open a command prompt, PowerShell or terminal in VSCode
Run the following commands to verify the installation:

`node -v`
`npm -v`

These commands should display the installed Node.js and npm versions.


For Mac:
Download Installer: [Node.js](https://nodejs.org/)

Run Installer:
Run the downloaded installer and follow the installation instructions.
Ensure that the "npm" package manager option is selected during installation.

Verify Installation:
Open terminal in VSCode
Run the following commands to verify the installation:

`node -v`
`npm -v`

These commands should display the installed Node.js and npm versions.

## Folder structure

`assets`: This folder is often used to store CSS, JavaScript, and images related to your theme.

`inc`: This folder can contain various PHP files, each handling specific functionalities. For example, custom-post-types.php might define custom post types, and theme-support.php might add theme support features.

`templates`: This is where your Twig templates reside. The `partials` subfolder can contain reusable components like headers, footers, and navigation.

`functions.php`: This file includes functions related to theme setup, enqueueing scripts and styles, and other theme-specific functionalities. You probably won't touch it.

`style.css`: A style.css file is needed for WordPress theme identification. When using Tailwind, the styles are automatically added to this, so no need to use it.


## Built upon
There are quite a few things in use in order to get this to work:

#### TailwindCSS v3.4.1
Tailwind is a utility-first CSS framework
[Tailwind Docs](https://tailwindcss.com/docs/)

#### Timber Starter Theme
The "_s" for Timber: a dead-simple theme that you can build from. The primary purpose of this theme is to provide a file structure rather than a framework for markup or styles. [Starter Theme](https://travis-ci.com/github/timber/starter-theme)

#### Twig
Timber uses Twig. Twig is a flexible and secure template engine for PHP used primarily in web development to separate the logic of the application from its presentation layer.
[Twig](https://twig.symfony.com/)


## Other Resources

* [Twig for Timber Cheatsheet](http://notlaura.com/the-twig-for-timber-cheatsheet/)
* [Timber and Twig Reignited My Love for WordPress](https://css-tricks.com/timber-and-twig-reignited-my-love-for-wordpress/) on CSS-Tricks
* [A real live Timber theme](https://github.com/laras126/yuling-theme).

