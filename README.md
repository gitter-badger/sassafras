# [![sassafras.io](http://sassafras.io)](assets/sassafras_logo.svg) ![Build Status](https://travis-ci.org/tylerreckart/sassafras.svg?branch=master) [![npm version](https://badge.fury.io/js/sassafras_io.svg)](http://badge.fury.io/js/sassafras_io) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
A handy multi-language CSS compiler for SASS, Sassy CSS, and LESS

## Introduction

Sassafras is a tool for compiling multiple css preprocessors into css that can be read by the browser. It works great with languages like SASS, SCSS (Sassy CSS) and LESS. It was built out of a necessecity for a proper way to compile other languages into CSS. Sassafrass is built to be quick and easy to impliment. Check it out!

### Installation

Installation is super simple. Just run:

    npm install sassafras_io

That's it! Just make sure you have all of the dependencies in the root folder of your project.

## Usage

Running the package is also super easy. Thanks to grunt, all you need is one simple command

   grunt

As you write your `SCSS` or `LESS`, grunt will watch your code and actively generate a `main.css` file in your main CSS directory.

## Additional Info

Depending on how you lay out your file structure, you may need to edit the paths in the `gruntfile`. If you have your folder structure laid out differently that I built into sassafras, grunt won't know where to look in order to read your `SCSS` or `LESS` and generate the `main.css` file. However, do not fret! Editing the paths in the `gruntfile` is super simple.

### Editing the path/to/css
For example:
```js
 module.exports = function(grunt) {
 grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	sass: {
		dist: {
			files: {
				'assets/css/main.css' : 'assets/scss/*.scss'
			}
		}
	},
  less: {
		dist: {
			files: {
				'assets/css/main.css' : 'assets/less/*.less'
			}
		}
	},
  ...
```
Could become:
```js
 module.exports = function(grunt) {
 grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	sass: {
		dist: {
			files: {
				'styles/main.css' : 'styles/*.scss'
			}
		}
	},
  less: {
		dist: {
			files: {
				'styles/main.css' : 'styles/*.less'
			}
		}
	},
  ...
```
It all just depends on how you like to organize your files. I like mine to be organized in a certain way, therefore I wrote sassafras to follow that structure.

## Licensing 

The MIT License (MIT)
=====================

Copyright © 2015 Tyler A. Reckart

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
