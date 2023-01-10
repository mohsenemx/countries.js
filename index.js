
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
            "Costa Rica": 5213000,
            "Côte d’Ivoire": 27832000,
            "Croatia":4008000,
            "Cuba": 11164000,
            "Cyprus": 1346000,
            "Czech Republic": 10535000,
            "Denmark": 5893000,
            "Djibouti": 1017000,
            "Dominica": 64700,
            "Dominican Republic": 10622000,
            "East Timor": 1337000,
            "Ecuador": 18041000,
            "Egypt": 104239000,
            "El Salvador": 6331000,
            "Equatorial Guinea": 1558000,
            "Eritrea": 6209000,
            "Estonia": 1328000,
            "Eswatini": 1134000,
            "Ethiopia": 107089000,
            "Fiji": 895700,
            "Finland": 5555000,
            "France": 65823000,
            "Gabon": 2301000,
            "The Gambia": 2785000,
            "Georgia": 3732000,
            "Germany": 83200000,
            "Ghana": 31486000,
            "Greece": 10619000,
            "Grenada": 114800,
            "Guatemala": 15998000,
            "Guinea": 13269000,
            "Guinea-Bissau": 1644000,
            "Guyana": 742300,
            "Haiti": 12080000,
            "Honduras": 9596000,
            "Hungary": 9705000,
            "Iceland": 380500,
            "India": 1357181000, // Second Big Guy
            "Indonesia": 275400000,
            "Iran": 86110000,
            "Iraq": 42281000,
            "Ireland": 5054000,
            "Israel": 8866000,
            "Italy": 58426000,
            "Jamaica": 2744000,
            "Japan": 125816000,
            "Jordan": 11192000,
            "Kazakhstan": 19261000,
            "Kenya": 51464000,
            "Kiribati": 122700,
            "North Korea": 25991000,
            "South Korea": 51582000,
            "Kosovo": 1822000,
            "Kuwait": 4467000,
            "Kyrgyzstan": 6769000,
            "Laos": 7529000,
            "Latvia": 1873000,
            "Lebanon": 6685000,
            "Lesotho": 2084000,
            "Liberia": 5059000,
            "Libya": 7362000,
            "Liechtenstein": 39500,
            "Lithuania": 2790000,
            "Luxembourg": 647800,
            "Madagascar": 29022000,
            "Malawi": 19610000,
            "Malaysia": 33331000,
            "Maldives": 606800,
            "Mali": 21719000,
            "Malta": 547700,
            "Marshall Islands": 55300,
            "Mauritania": 4371000,
            "Mauritius": 1263000,
            "Mexico": 128550000,
            "Micronesia, Federated States of": 105000,
            "Moldova": 2553000,
            "Monaco": 38400,
            "Mongolia": 3411000,
            "Montenegro": 619100,
            "Morocco": 36093000,
            "Mozambique": 31616000,
            "Myanmar": 55869000,
            "Namibia": 2596000,
            "Nauru": 14000,
            "Nepal": 30752000,
            "Netherlands": 17650000,
            "New Zealand": 5134000,
            "Niger": 23437000,
            "Nigeria": 217376000,
            "North Macedonia": 1829000,
            "Norway": 5443000,
            "Oman": 4674000,
            "Pakistan": 235409000,
            "Romania": 18991000,
            "Russia": 143377000,
            "Rwanda": 13256000,
            "Saint Kitts and Nevis": 48200,
            "Saint Lucia": 183800,
            "Saint Vincent and the Grenadines": 110400,
            "Samoa": 205800,
            "San Marino": 33700,
            "Sao Tome and Principe": 219100,
            "Saudi Arabia": 36687000,
            "Senegal": 17739000,
            "Serbia": 6807000,
            "Seychelles": 100100,
            "Sierra Leone": 8494000,
            "Singapore": 5230000,
            "Slovakia": 5457000,
            "Slovenia": 2124000,
            "Solomon Islands": 773600,
            "Somalia": 14650000,
            "South Africa": 60970000,
            "South Sudan": 14235000,
            "Spain": 47323000,
            "Sri Lanka": 22152000,
            "Sudan": 45168000,
            "Suriname": 621900,
            "Sweden": 10495000,
            "Switzerland": 8771000,
            "Syria": 27569000,
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
        let rand = Math.round(Math.random() * (listof_countries.length - 1));
        return listof_countries[rand];
    }
    CountryPrefix() {
        let rand = Math.round(Math.random() * (listof_prefixes.length - 1));
        return listof_prefixes[rand];
    }
    CountrySuffix() {
        let rand = Math.round(Math.random() * (listof_suffixes.length - 1));
        return listof_suffixes[rand];
    }
    RandomName(seed, usePrefix, engine, useSuffix) {
        if (usePrefix && useSuffix) {
            return 'usePrefix and useSuffix cannot be true at the same time.';   
        } else {
        if (engine == "crle" || engine == "CRLE") {
        if (seed.length < 10) {
            return 'Not enough letters in seed';
        } else {
        let marsko_letd = seed.split('');
        let marsko_letd_length = marsko_letd.length;
        let letters_n = Math.round(Math.random() * (seed.length - 6) + 3); 
        let alph = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(' ');
        let final = '';
        
        for (let i = 0; i < letters_n;i++) {
        // do something
            let rand = Math.round(Math.random() * (alph.length - 1));
            final = final + alph[rand];
            }
            if (usePrefix) {
                let rand = Math.round(Math.random() * (listof_prefixes.length - 1));
                return listof_prefixes[rand]  + ' ' + final;
            } else if (useSuffix) {
                let rand = Math.round(Math.random() * (listof_suffixes.length - 1));
                return listof_suffixes[rand] + ' ' + final;
            } else if (!usePrefix && !useSuffix) {
                return final;
            }
        }
        } else if (engine == 'NSRE' || engine == 'nsre' || engine == undefined || engine == null) {
            let final = '';
            let alph = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(' ');
            let letters_n = Math.round(Math.random() * 9 + 4);
            
            for (let i = 0; i < letters_n;i++) {
                let rand = Math.round(Math.random() * (alph.length - 1));
                if (final.indexOf('e') == -1) {
                    final = final + 'e';
                } else if (final.indexOf('i') == -1) {
                    final = final + 'i';
                } else if (final.indexOf('o') == -1) {
                    final = final + 'o';
                } else {
                    final = final + alph[rand];
                }
            }

            if (usePrefix) {
                let rand = Math.round(Math.random() * (listof_prefixes.length - 1));
                return listof_prefixes[rand]  + ' ' + final;
            } else if (useSuffix) {
                let rand = Math.round(Math.random() * (listof_suffixes.length - 1));
                return final + ' ' + listof_suffixes[rand];
            } else if (!usePrefix && !useSuffix) {
                return final;
            }
            } else {
                return 'Selected Engine does not exist. Please Try SRLE';
            }
        }
    }
} // Not so random engine NSRE