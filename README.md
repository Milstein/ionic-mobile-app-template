# Ionic-mobile-app-template

This is a template application for the [Ionic Framework](http://ionicframework.com/). It was originally generated using this [Yeoman](http://yeoman.io/) [Ionic generator](https://github.com/diegonetto/generator-ionic) version 0.6.1 on January 29th, 2015. It is meant to be a template and starting point for Ionic mobile applications.

Features:
* Core module which includes applicaion settings
* A Sample Module for demonstration
* Persisting local storage through SQLite
* Facebook and Twitter social media syncronization


# Setup Instructions

## Android

Update the local package list and download GIT and Node.js 

```bash
sudo apt-get update
sudo apt-get install -y git
sudo apt-get install -y nodejs
```

Create a symbolic link between nodejs and node (some older programs that use node call it through 'node' instead of 'nodejs')

```bash
sudo ln -s /usr/bin/nodejs /usr/bin/node
```


Install Bower Web Package Manager and Grunt Task Runner

```bash
npm install -g bower
npm install -g grunt-cli
```


Clone the project and navigate into it

```bash
git clone https://github.com/castlewhitehall/ionic-mobile-app-template.git
cd ionic-mobile-app-template/
```


Download required libraries

```bash
npm install
bower install
```


Initialize the project

```bash
grunt init
```


Install Android platform

```bash
cordova platform add android
```


Run on attached Android device


```bash
grunt run:android
```

Host locally to debug/develop in browser (Note: cordova plugins and social media will not work in browser)


```bash
grunt serve
```


