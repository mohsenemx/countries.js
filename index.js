
// This will produce an array of country names with 194 possible indexes.
const listof_countries = "Afghanistan;Albania;Algeria;Andorra;Angola;Antigua and Barbuda;Argentina;Armenia;Australia;Austria;Azerbaijan;The Bahamas;Bahrain;Bangladesh;Barbados;Belarus;Belgium;Belize;Benin;Bhutan;Bolivia;Bosnia and Herzegovina;Botswana;Brazil;Brunei;Bulgaria;Burkina Faso;Burundi;Cape Verde;Cambodia;Cameroon;Canada;Central African Republic;Chad;Chile;China;Colombia;Comoros;Congo, Democratic Republic of the;Congo, Republic of the;Costa Rica;Côte d’Ivoire;Croatia;Cuba;Cyprus;Czech Republic;Denmark;Djibouti;Dominica;Dominican Republic;East Timor (Timor-Leste);Ecuador;Egypt;El Salvador;Equatorial Guinea;Eritrea;Estonia;Eswatini;Ethiopia;Fiji;Finland;France;Gabon;The Gambia;Georgia;Germany;Ghana;Greece;Grenada;Guatemala;Guinea;Guinea-Bissau;Guyana;Haiti;Honduras;Hungary;Iceland;India;Indonesia;Iran;Iraq;Ireland;Israel;Italy;Jamaica;Japan;Jordan;Kazakhstan;Kenya;Kiribati;North Korea;South Korea;Kosovo;Kuwait;Kyrgyzstan;Laos;Latvia;Lebanon;Lesotho;Liberia;Libya;Liechtenstein;Lithuania;Luxembourg;Madagascar;Malawi;Malaysia;Maldives;Mali;Malta;Marshall Islands;Mauritania;Mauritius;Mexico;Micronesia, Federated States of;Moldova;Monaco;Mongolia;MontenegroMorocco;Mozambique;Myanmar;Namibia;Nauru;Nepal;Netherlands;New Zealand;Nicaragua;Niger;Nigeria;North Macedonia;Norway;Oman;Pakistan;Palau;Panama;Papua New Guinea;Paraguay;Peru;Philippines;Poland;Portugal;Qatar;Romania;Russia;Rwanda;Saint Kitts and Nevis;Saint Lucia;Saint Vincent and the Grenadines;Samoa;San Marino;Sao Tome and Principe;Saudi Arabia;Senegal;Serbia;Seychelles;Sierra Leone;Singapore;Slovakia;Slovenia;Solomon Islands;Somalia;South Africa;Spain;Sri Lanka;Sudan;South Sudan;Suriname;Sweden;Switzerland;Syria;Taiwan;Tajikistan;Tanzania;Thailand;Togo;Tonga;Trinidad and Tobago;Tunisia;Turkey;Turkmenistan;Tuvalu;Uganda;Ukraine;United Arab Emirates;United Kingdom;United States;Uruguay;Uzbekistan;Vanuatu;Vatican City;Venezuela;Vietnam;Yemen;Zambia;Zimbabwe".split(';');
const listof_prefixes = "Republic of;Federal Republic of;Democratic People’s Republic of;Islamic Republic;Kingdom of;Empire of;Emirates".split(';');
const listof_suffixes = "Republic;Arab Republic;Kingdom;Empire".split(';');

class Country {
    constructor() {
        this.Population = {
            "Afghanistan": 34161000,
            "Albania": 2806000,
            "Algeria": 45502000,
            "Andorra": 80300,
            "Angola": 33013000,
            "Antigua and Barbuda": 101000,
            "Argentina": 46235000,
            "Armenia": 2964000,
            "Australia": 25801000,
            "Austria":  9003000,
            "Azerbaijan": 10197000,
            "The Bahamas": 397900,
            "Bahrain": 1442000,
            "Bangladesh": 171704000,
            "Barbados": 271600,
            "Belarus": 9274000,
            "Belgium": 11535000,
            "Belize": 441500,
            "Benin": 13024000,
            "Bhutan": 763400,
            "Bolivia": 12006000,
            "Bosnia and Herzegovina": 3443000,
            "Botswana": 3443000,
            "Brazil": 214891000,
            "Brunei": 434000,
            "Bulgaria": 6855000,
            "Burkina Faso": 22127000,
            "Burundi": 12857000,
            "Cape Verde": 482900,
            "Cambodia": 16271000,
            "Cameroon": 26097000,
            "Canada": 37424000,
            "Central African Republic": 5455000,
            "Chad": 17963000,
            "Chile": 19829000,
            "China": 1412952000, // The Big Guy
            "Colombia": 52579000,
            "Comoros": 827900,
            "Congo, Democratic Republic of the": 108408000,
            "Congo, Republic of the": 5956000,
            /*
            
    */
        }
        this.CountryIndex = {
            "Afghanistan":0,
            "Albania":1,
            "Algeria":2,
            "Andorra":3,
            "Angola":4,
            "Antigua and Barbuda":5,
            "Argentina":6,
            "Armenia":7,
            "Australia":8,
            "Austria":9,
            "Azerbaijan": 10,
            "The Bahamas": 11,
            "Bahrain": 12,
            "Bangladesh": 13,
            "Barbados": 14,
            "Belarus": 15,
            "Belgium": 16,
        }
    }
    RealCountry() {
        let rand = Math.round(Math.random() * listof_countries.length);
        return listof_countries[rand];
    }
    CountryPrefix() {
        let rand = Math.round(Math.random() * listof_prefixes.length);
        return listof_prefixes[rand];
    }
    CountrySuffix() {
        let rand = Math.round(Math.random() * listof_suffixes.length);
        if (listof_suffixes[rand] == undefined || listof_suffixes[rand] == "") {
            return listof_suffixes[rand];
        }
    }
}