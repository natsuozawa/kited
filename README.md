# kited

Automation toolkit for using the University of Edinburgh's websites.

# Installation

## Firefox

Download the xpi file [here](https://kited.natsuozawa.com/kited.xpi). (Signed by Mozilla)

## Chrome

Download this repository as a zip file and unzip the file.

Head to `chrome://extensions`, and enable developer mode. Then, click "load unpacked" and select the unzipped folder (named kited).

Note: the extension is not tested on Chrome.

# Features

## Automatic login

Automatic login is supported on the following sites. In order to use this feature, your browser or password manager must polyfill the password column automatically.

This feature does not tamper with ed.ac.uk cookies. Therefore, it still takes about 30 seconds to login even with the automation.

* www.learn.ed.ac.uk
* www.myed.ed.ac.uk
* www.wiki.ed.ac.uk

# Build

```
$ ./package.sh
```

# Update xpi file

```
$ cp kited-1.0.[version number]-fx.xpi docs/kited.xpi
```
