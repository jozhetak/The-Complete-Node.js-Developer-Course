const axios = require('axios');

// const getExchangeRate = (from, to) => {
//     return axios.get(`https://api.fixer.io/latest?base=${from}`)
//         .then(response => {
//             return response.data.rates[to];
//         });
// };


// const getCountries = (currencyCode) => {
//     return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
//         .then(response => {
//             return response.data.map(country => country.name);
//         });
// };

// const convertCurrency = (from, to, amount) => {
//     let countries;
//     return getCountries(to)
//         .then(tempCountries => {
//             countries = tempCountries;
//             return getExchangeRate(from, to);
//         })
//         .then(rate => {
//             const exchangeAmount = amount * rate;
            
//             return `${amount} ${from} is worth ${exchangeAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`;
//         });
// };

const getExchangeRate = async (from, to) => {
    var response = await axios.get(`https://api.fixer.io/latest?base=${from}`);
    return response.data.rates[to];
};

const getCountries = async (currencyCode) => {
    var response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
    return response.data.map(country => country.name);
};

const convertCurrency = async (from, to, amount) => {
    var countries = await getCountries(to);
    var rate = await getExchangeRate(from, to);
    const exchangeAmount = amount * rate;
            
    return `${amount} ${from} is worth ${exchangeAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`;
};

// getExchangeRate('USD', 'CAD')
//     .then(rate => console.log(rate))
//     .catch(err => console.log(err));

// getCountries('USD')
//     .then(countries => console.log(countries))
//     .catch(err => console.log(err));

convertCurrency('USD', 'BRL', 100)
    .then(status => console.log(status))
    .catch(err => console.log(err));