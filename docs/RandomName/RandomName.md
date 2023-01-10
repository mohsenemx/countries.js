## What's this?
Countries.js's RadnomName API Supports multipe engines, and each of them has a folder same as their name.
Default is "NSRE" that stands for Not So Random Engine.
You can also choose CRLE which stands for Completely Random Letter Engine.

## Usage
General Usage is like this:
```JS
const e = new Country();
let mylovelyVar = e.RandomName(seed,usePrefix,engine,useSuffix);
```
Seed is a value used for only some engines. you can pass False if your selected engine doesn't require seed.
usePrefix is a bool identifying if you want a random prefix to be added to your random name. Using Country.js's CountryPrefix() API. Default is false
engine is the most important options to pass, It should be a string. You can check engines.md for more detailed information.
useSuffix is similiar to usePrefix but adds some random Suffix to end of the country's name. Is a bool and can't be true if usePrefix is also true.