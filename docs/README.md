This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

# Section 16 wgetter
Using electron to build an app using web components that lets CSMs use `s16wgetter.py` without a terminal.

## Setup
To help develop this application or use its code, use the following commands. Pretty standard stuff, but always good to write it down somewhere.

### Install
To install node dependencies:
```shell
yarn install
```
You might need to run
```shell
yarn global add node-sass-chokidar
```

At the time of the last update to this README, I am using web-skin via git, so to pull that in, run this script:
```shell
./tools/git-deps.sh
```
That will hopefully be removed in the future.

### Run
```shell
yarn start
```

### Build
```shell
yarn build
```

## Scripts
There are some scripts here that are useful for developing.

### new_component.sh
The following example will create a component boiler plate for a component named ComponentName in the directory `lib/src/ComponentName`.
```shell
./tools/new_component.sh ComponentName
```
