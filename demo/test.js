
const e = new Country();
let d = e.RealCountry();
let f = e.CountryPrefix();
let g = e.CountrySuffix();
let c = e.Population;
console.log('Random Country Name: ' + d);
console.log('Random Country Prefix: ' + f);
console.log('Random Country Suffix: ' + g);
console.log('A random name: ' + e.RandomName(false, false,'NSRE',false));