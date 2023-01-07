
// This will produce an array of country names with 194 possible indexes.

const listof_countries = "Afghanistan;Albania;Algeria;Andorra;Angola;Antigua and Barbuda;Argentina;Armenia;Australia;Austria;Azerbaijan;The Bahamas;Bahrain;Bangladesh;Barbados;Belarus;Belgium;Belize;Benin;Bhutan;Bolivia;Bosnia and Herzegovina;Botswana;Brazil;Brunei;Bulgaria;Burkina Faso;Burundi;Cabo Verde;Cambodia;Cameroon;Canada;Central African Republic;Chad;Chile;China;Colombia;Comoros;Congo, Democratic Republic of the;Congo, Republic of the;Costa Rica;Côte d’Ivoire;Croatia;Cuba;Cyprus;Czech Republic;Denmark;Djibouti;Dominica;Dominican Republic;East Timor (Timor-Leste);Ecuador;Egypt;El Salvador;Equatorial Guinea;Eritrea;Estonia;Eswatini;Ethiopia;Fiji;Finland;France;Gabon;The Gambia;Georgia;Germany;Ghana;Greece;Grenada;Guatemala;Guinea;Guinea-Bissau;Guyana;Haiti;Honduras;Hungary;Iceland;India;Indonesia;Iran;Iraq;Ireland;Israel;Italy;Jamaica;Japan;Jordan;Kazakhstan;Kenya;Kiribati;North Korea;South Korea;Kosovo;Kuwait;Kyrgyzstan;Laos;Latvia;Lebanon;Lesotho;Liberia;Libya;Liechtenstein;Lithuania;Luxembourg;Madagascar;Malawi;Malaysia;Maldives;Mali;Malta;Marshall Islands;Mauritania;Mauritius;Mexico;Micronesia, Federated States of;Moldova;Monaco;Mongolia;MontenegroMorocco;Mozambique;Myanmar;Namibia;Nauru;Nepal;Netherlands;New Zealand;Nicaragua;Niger;Nigeria;North Macedonia;Norway;Oman;Pakistan;Palau;Panama;Papua New Guinea;Paraguay;Peru;Philippines;Poland;Portugal;Qatar;Romania;Russia;Rwanda;Saint Kitts and Nevis;Saint Lucia;Saint Vincent and the Grenadines;Samoa;San Marino;Sao Tome and Principe;Saudi Arabia;Senegal;Serbia;Seychelles;Sierra Leone;Singapore;Slovakia;Slovenia;Solomon Islands;Somalia;South Africa;Spain;Sri Lanka;Sudan;South Sudan;Suriname;Sweden;Switzerland;Syria;Taiwan;Tajikistan;Tanzania;Thailand;Togo;Tonga;Trinidad and Tobago;Tunisia;Turkey;Turkmenistan;Tuvalu;Uganda;Ukraine;United Arab Emirates;United Kingdom;United States;Uruguay;Uzbekistan;Vanuatu;Vatican City;Venezuela;Vietnam;Yemen;Zambia;Zimbabwe".split(';');
const listof_prefixes = "Republic of;Federal Republic of;Democratic People’s Republic of;Islamic Republic;".split(';');
const listof_suffixes = "Republic;Arab Republic;".split(';');
class Country {
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
        return listof_suffixes[rand];
    }
}