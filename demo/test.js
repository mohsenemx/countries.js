const e = new Country();
let d = e.RealCountry();
let f = e.CountryPrefix();
let g = e.CountrySuffix();
let c = e.Population;
let rand = Math.round(Math.random() * (e.Countries.length - 1));
console.log(e.Countries[rand].name);
console.log(e.Countries[rand].currencyId);
console.log(e.Countries[rand].phoneCode);
function getNew() {
    document.getElementById('cdd').innerHTML = e.RandomName(false, true,'NSRE',false) + '<br />';
}

// Please Change it