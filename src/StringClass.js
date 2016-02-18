(function() {
  'use strict';

  String.prototype.hasVowels = function() {
    return /[aeiou]/i.test(this);
  };

  String.prototype.toUpper = function() {
    return this.replace(/[a-z]/g, (str) => {
      return String.fromCharCode(str.charCodeAt() - 32);
    });
  };

  String.prototype.toLower = function() {
    return this.replace(/[A-Z]/g, (str) => {
      return String.fromCharCode(str.charCodeAt() + 32);
    });
  };

  String.prototype.ucFirst = function() {
    return this.replace(/[a-z]/, (str) => {
      return str.toUpper();
    });
  };

  String.prototype.isQuestion = function() {
    return /(\?.)$/.test(this);
  };

  String.prototype.words = function() {
    return this.split(/\W/g);
  };

  String.prototype.wordCount = function() {
    return this.words().length;
  };
  
  String.prototype.toCurrency = function() {
    var re = /(\d)(?=(\d{3})+(?!\d))/g;
    return Number(this.replace(/[^0-9\.]/g, '')).toFixed(2).replace(re, '$1,');
  };

  String.prototype.fromCurrency = function() {
    return parseFloat(this.replace(/,/g, ''));
  };
})();
