var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.ign.com/')
  .wait('.button-submit')
  .click('a[href="/reviews"]')
  .type('input#search-input');
  .evaluate(function (result) {
    var header = document.querySelector('.page-category')
    console.log('h2');
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });