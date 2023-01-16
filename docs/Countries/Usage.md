# What's this?
You can get a lot of information about countries.
>Note: This wasn't orginally written by me, but I modified it to match our database.
## Basic Usage
```JS
const e = new Country();
console.log(e.Countries[CountryIndex]);
```
You'll need country's index in our database and put it in `CountryIndex` area. This'll return a object.
You can use Javascripts's Object API like this:
```JS
console.log(e.Countries[0].name);
```
This will print "Afghanistan" in the console as it's the first in our array.
## Getting Country Index
You can use one of our other tools, Index API.
### Usage
```JS
const e = new Country();
console.log(e.CountryIndex["Australia"]);
```
And this'll print "8" to the console.
This also works with countries that have " "(Space) in their name.