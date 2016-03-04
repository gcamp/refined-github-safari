# <img src="icon.png" width="45" align="left"> Refined GitHub

> Safari extension that simplifies the GitHub interface and adds useful features

This is a Safari version of [Refined Github](https://github.com/sindresorhus/refined-github), you can build it with [Gulp](http://gulpjs.com) or download it already signed in the [Releases](https://github.com/fantattitude/refined-github/releases).

## Installation

- You can install the extension directly downloading it from the [Releases](https://github.com/fantattitude/refined-github/releases).
- You can also build it yourself but you'll need a Safari Developer Membership to install it on Safari.

## Build

#### Dependencies
- npm

#### First clone the repository
```sh
git clone https://github.com/fantattitude/refined-github-safari
```

#### Then enter in the project folder and install needed dependencies
```sh
cd refined-github-safari
npm install
```

#### And finally you can build the project using the following command
```sh
gulp build
```

The tmp folder will contain the `.safariextension` folder which can be installed using **Extension Builder**.

## Credits

All credits for **Refined Github** goes to its original creator [Sindre Sorhus](https://github.com/sindresorhus).

The gulp script is highly inspired by [Octotree](https://github.com/buunguyen/octotree)'s build script because I'm terrible at automating javascript.
