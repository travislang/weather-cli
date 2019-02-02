## weather-cli

A command line interface for retrieving the weather forecast for any location.  The location defaults to the user's current location.

## Usage

Install the CLI tool

```
npm install
```

Now it is as easy as typing ```weather now``` into the terminal!

<img src="/assets/weather-now.png" alt="Image of weather CLI app" width="500"/>

The location automatically defaults to your current location.

## Options

If you want to get the 3 day weather forecast simply type ```weather forecast```

<img src="/assets/weather-forecast.png" alt="Image of weather CLI app" width="500"/>

If you want to know the current weather for a location other than your own you can use the ```--location``` flag or just ```-l```
for short.  Make sure you put the location in quotes if it has any spaces.

Example :

```
weather now --location 'New York, New York'
```
<img src="/assets/weather-now-location.png" alt="Image of weather CLI app" width="500"/>

```
weather now --l 'Salt Lake City, UT'
```
<img src="/assets/weather-slc.png" alt="Image of weather CLI app" width="500"/>

typing ```weather --help``` will explain the options and flags you can use.

<img src="/assets/weather-help.png" alt="Image of weather CLI app" width="500"/>

## Enjoy!
