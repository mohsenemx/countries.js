# Quick Start Guide
## Setting Up
1. Close the repo on your device. (The easiest way is to use Github Desktop or just download the whole repo)
2. Make a folder for your projects. (Idk how node modules work, this only works in Web for now)
3. In your HTML file, include it: `<script src=".\lib\countries.js"></script>` I think I'll add a CDN options too later on.
4. Use it! You can check other folders in Docs folder for full Docs.
5. We're gonna use "Random Country Name API (RCNA)" Here is an example:
```JS
let c = new Country();
```
Now first step is done! How to use the library:
```JS
console.log('A Random Country:' + c.RealCountry());
```
And this'll return a random country's name!
It'll return a different name everytime you request it.