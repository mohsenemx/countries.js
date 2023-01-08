## How to get population of a country?
### Basic Usage
Well, It's Easy!
```JS
let c = new Country();
let population = c.Population;
console.log('Population of Afghanistan: ' + population.Afghanistan);
```
First, we declare a variable that creates a new Country class: `let c = new Country();`
Then, we make another variable to point to Population database: `let population = c.Population;`
And we're done! Only part that remains is using it, but how? Easy! : `console.log('Population of Afghanistan: ' + population.Afghanistan);`
We use Javascript's JSON API to select our country: `population.Afghanistan` returns 34161000.

### Countries that include " " in their name
For countries that include " " (Space) in their name, we'll do things differently:
```JS
let c = new Country();
let population = c.Population;
console.log('Population of Afghanistan: ' + population["Afghanistan"]);
```
It's the same as before but we don't use "." anymore, instead we use `["CountryName"]` next to our variable we declared before that points to our database.